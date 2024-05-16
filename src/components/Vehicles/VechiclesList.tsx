import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../common'

const vehiclesImgs = Array.from(
  { length: 39 },
  (_, i) => `/assets/images/vehicles/${i + 1}.jpg`,
)

export const VehiclesList = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className="bg-fit bg-star-background flex flex-col h-screen overflow-y-scroll items-center pt-16 w-full relative">
      <Navbar showBackButton={true} />
      <div className="grow h-[calc(100%-16px)]">
        <div className="block px-10 rounded-lg top-16 md:hidden">
          <ImageList sx={{ width: '100%' }} cols={1}>
            {vehiclesImgs.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={`vehicles${index + 1}`}
                  className="rounded-lg"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="hidden px-10 rounded-lg md:block lg:hidden">
          <ImageList sx={{ width: '100%' }} cols={3}>
            {vehiclesImgs.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={`vehicles${index + 1}`}
                  className="rounded-lg"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="hidden px-10 rounded-lg lg:block">
          <ImageList sx={{ width: '100%' }} cols={5}>
            {vehiclesImgs.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={`vehicles${index + 1}`}
                  className="rounded-lg"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  )
}
