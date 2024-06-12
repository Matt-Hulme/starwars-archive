import { Card, CardContent, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface HomeCardProps {
  children?: ReactNode
  title: string
}

export const HomeCard = ({ title, children }: HomeCardProps) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/${title.toLowerCase()}`)
  }

  return (
    <Card className="border-2 border-[#ffbe00] border-solid cursor-pointer h-full">
      <CardContent
        className="bg-transparent h-full"
        sx={{ padding: '3px' }}
        onClick={onClick}
      >
        {children}
        <div className="hidden lg:block">
          <Typography className="text-[#ffbe00]" variant="h5">
            {title}
          </Typography>
        </div>
        <div className="block lg:hidden">
          <Typography className="text-[#ffbe00]" variant="h4">
            {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
