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
    <Card className="cursor-pointer group/homecard h-full relative rounded-[12px] hover:outline hover:outline-[#ffbe00] hover:outline-[2px]"
      sx={{ padding: '0px', borderRadius: '12px', margin: '0px',}}
    >
      <CardContent
        className="h-full overflow-hidden"
        sx={{ padding: '0px',}}
        onClick={onClick}
      >
        {children}
        <div className="absolute bg-[#39302e] duration-500 hidden left-1 px-2 rounded-[12px] text-[#ffbe00] top-1 transition lg:block group-hover/homecard:bg-[#ffbe00] group-hover/homecard:text-[#39302e]">
          <Typography sx={{ margin: '0px', padding: '0px',}}
            variant="h5"
          >
            {title}
          </Typography>
        </div>
        <div className="absolute bg-[#39302e] block duration-500 left-1 px-2 rounded-[12px] text-[#ffbe00] top-1 transition lg:hidden group-hover/homecard:bg-[#ffbe00] group-hover/homecard:text-[#39302e]">
          <Typography sx={{ margin: '0px', padding: '0px',}} variant="h6">
            {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
