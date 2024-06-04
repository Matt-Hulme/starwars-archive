import { Button } from '@mui/material'

interface HorizontalScrollerProps {
  children: React.ReactNode
}

export const HorizontalScroller = ({ children }: HorizontalScrollerProps) => (
  <div className="flex flex-row items-center justify-between">
    <Button>Left Button</Button>
    <div className="flex flex-row items-center justify-between gap-2">
      {children}
    </div>
    <Button>Right Button</Button>
  </div>
)
