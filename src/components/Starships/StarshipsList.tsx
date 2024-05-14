import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const StarshipsList = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className="bg-fit bg-star-background flex flex-col pt-16">
      <div className="h-[calc(100vh-64px)] bg-black-100 w-full px-[58px] pt-5">
        <Button
          className="duration-800 ease-linear opacity-80 transition-all hover:opacity-100"
          onClick={onClick}
          size="large"
          startIcon={<ArrowBack />}
          sx={{ color: '#FFBE00B3' }}
          variant="text"
        >
          Back
        </Button>
      </div>
    </div>
  )
}
