import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRef } from 'react'

interface HorizontalScrollerProps {
  children: React.ReactNode
}

export const HorizontalScroller = ({ children }: HorizontalScrollerProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: string) => {
    if (direction === 'left') {
      (ref.current as HTMLDivElement).scrollLeft -= 200
    }
    if (direction === 'right') {
      (ref.current as HTMLDivElement).scrollLeft += 200
    }
  }

  return (
    <div className="flex flex-row items-center py-2 relative max-w-full">
      <IconButton 
        className='absolute left-0'
        aria-label="Scroll Left" onClick={() => handleScroll('left')}>
        <ArrowLeft className='bg-[#ffbe00] rounded-md'/>
      </IconButton>
      <div
        ref={ref}
        className="flex flex-row items-center gap-2 px-1 overflow-auto no-scrollbar scroll-smooth w-full"
      >
        {children}
      </div>
      <IconButton
        className='absolute right-0'
        aria-label="Scroll Right"
        onClick={() => handleScroll('right')}
      >
        <ArrowRight className='bg-[#ffbe00] rounded-md'/>
      </IconButton>
    </div>
  )
}
