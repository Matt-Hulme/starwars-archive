import { Typography } from '@mui/material'
import { HorizontalScroller } from '../HorizontalScroller'

interface DetailsPanelProps {
  children: React.ReactNode
  title: string
}

export const DetailsPanel = ({ children, title }: DetailsPanelProps) => (
  <div className="relative rounded-lg w-full">
    <Typography className="absolute left-0 top-0" variant="h6">
      {title}
    </Typography>
    <HorizontalScroller>
      {children}
    </HorizontalScroller>
  </div>
)
