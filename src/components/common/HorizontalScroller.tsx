import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { useRef, useState, useEffect } from 'react'

interface HorizontalScrollerProps {
  children: React.ReactNode
  title?: string
}

export const HorizontalScroller = ({ children, title }: HorizontalScrollerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isAtLeftEnd, setIsAtLeftEnd] = useState(true)
  const [isAtRightEnd, setIsAtRightEnd] = useState(true)
  const [scrollIntervalId, setScrollIntervalId] = useState<NodeJS.Timeout | null>(null)

  const checkScrollPosition = () => {
    if (!ref.current) return
    setIsAtLeftEnd(ref.current.scrollLeft === 0)
    setIsAtRightEnd(ref.current.scrollLeft + ref.current.offsetWidth >= ref.current.scrollWidth)
  }

  useEffect(() => {
    const currentRef = ref.current
    currentRef?.addEventListener('scroll', checkScrollPosition)
    return () => currentRef?.removeEventListener('scroll', checkScrollPosition)
  }, [])

  useEffect(() => {
    setTimeout(checkScrollPosition, 0)
  }, [])

  const handleScroll = (direction: string) => {
    const scrollAmount = direction === 'left' ? -280 : 280
    if (ref.current) {
      ref.current.scrollLeft += scrollAmount
    }
    checkScrollPosition()
  }

  const startScroll = (direction: string) => {
    stopScroll()
    const intervalId = setInterval(() => handleScroll(direction), 100)
    setScrollIntervalId(intervalId)
  }

  const stopScroll = () => {
    if (scrollIntervalId) {
      clearInterval(scrollIntervalId)
      setScrollIntervalId(null)
    }
  }

  return (
    <div className="flex flex-row items-center max-w-[2000px] py-2 relative">
      <IconButton
        aria-label="Scroll Left"
        className={`absolute left-0 ${isAtLeftEnd ? 'opacity-0' : 'opacity-100'}`}
        onMouseDown={() => startScroll('left')}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
      >
        <ArrowLeft className="bg-[#ffbe00] rounded-md" />
      </IconButton>
      <div
        className="flex flex-row gap-2 group/horizontalScroller items-center no-scrollbar overflow-auto px-1 py-1 scroll-smooth w-full"
        ref={ref}
      >
        <div className="-top-4 absolute md:hidden bg-[#ffbe00] left-5 px-1 rounded-md text-[#39302e] z-20">
          <Typography variant='h6'>
            {title}
          </Typography>
        </div>
        <div className="-top-4 hidden md:block absolute bg-[#ffbe00] left-5 px-1 rounded-md text-[#39302e] z-20">
          <Typography variant='h4'>
            {title}
          </Typography>
        </div>
        {children}
      </div>
      <IconButton
        aria-label="Scroll Right"
        className={`absolute right-0 ${isAtRightEnd ? 'opacity-0' : 'opacity-100'}`}
        onMouseDown={() => startScroll('right')}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
      >
        <ArrowRight className="bg-[#ffbe00] rounded-md" />
      </IconButton>
    </div>
  )
}