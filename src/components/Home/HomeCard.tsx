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
    <Card className="cursor-pointer h-full bg-transparent rounded-[12px] overflow-hidden"
      sx={{ padding: '0px', borderRadius: '14px', overflow: 'hidden'}}
    >
      <CardContent
        className="relative h-full"
        sx={{ padding: '0px',}}
        onClick={onClick}
      >
        {children}
        <div className="absolute bg-[#39302e] hidden px-1 rounded-lg text-[#ffbe00] lg:block">
          <Typography className="text-[#ffbe00]" variant="h5">
            {title}
          </Typography>
        </div>
        <div className="absolute bg-[#39302e] block px-1 rounded-lg text-[#ffbe00] lg:hidden">
          <Typography className="text-[#ffbe00]" variant="h6">
            {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
