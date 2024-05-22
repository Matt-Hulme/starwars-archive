import { ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllVehicles } from './hooks'

const vehiclesImgs = Array.from(
  { length: 39 },
  (_, i) => `/assets/images/vehicles/${i + 1}.jpg`,
)

export const VehiclesList = () => {
  const { vehiclesData } = useGetAllVehicles()
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(`/vehicles/${id}`)
  }

  console.log('vehiclesData:', vehiclesData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {vehiclesImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`vehicles${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {vehiclesImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`vehicles${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {vehiclesImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
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
  )
}
