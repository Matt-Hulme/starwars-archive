import { Card, Typography } from '@mui/material'
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
    <Card className="cursor-pointer group/homecard h-full relative hover:outline hover:outline-[#ffbe00] hover:outline-[2px]"
      sx={{ padding: '0px', margin: '0px', borderRadius: '0px', overflow: 'hidden', backgroundColor: 'transparent'}}
      onClick={onClick}
    >
      {children}
      <div className="absolute bg-[#39302e] duration-200 left-1 px-2 rounded-[12px] text-[#ffbe00] top-1 transition group-hover/homecard:bg-[#ffbe00] group-hover/homecard:text-[#39302e]">
        <Typography sx={{ margin: '0px', padding: '0px',}}
          variant="h6"
        >
          {title}
        </Typography>
      </div>
    </Card>
  )
}
