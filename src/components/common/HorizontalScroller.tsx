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
    if (direction === 'left') {
      (ref.current as HTMLDivElement).scrollLeft -= 200
    }
    if (direction === 'right') {
      (ref.current as HTMLDivElement).scrollLeft += 200
    }
    checkScrollPosition()
  }

  return (
    <div className="flex flex-row items-center max-w-full py-2 relative">
      <IconButton 
        aria-label="Scroll Left" 
        className={`absolute left-0 ${isAtLeftEnd ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => handleScroll('left')}
      >
        <ArrowLeft className="bg-[#ffbe00] rounded-md"/>
      </IconButton>
      <div
        className="flex flex-row gap-2 group/horizontalscroller items-center no-scrollbar overflow-auto px-1 py-1 scroll-smooth w-full"
        ref={ref}
      >
        <div className="-top-4 absolute bg-[#ffbe00] left-5 px-1 rounded-md text-[#39302e] z-20">
          <Typography variant='h4'>
            {title}
          </Typography>
        </div>
        {children}
      </div>
      <IconButton
        aria-label="Scroll Right"
        className={`absolute right-0 ${isAtRightEnd ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => handleScroll('right')}
      >
        <ArrowRight className="bg-[#ffbe00] rounded-md"/>
      </IconButton>
    </div>
  )
}