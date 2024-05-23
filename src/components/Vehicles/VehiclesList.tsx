import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllVehicles } from './hooks'
import { ListCard } from '../common/ListCard'

const vehiclesImgs = Array.from(
  { length: 39 },
  (_, i) => `/assets/images/vehicles/${i + 1}.jpg`,
)

export const VehiclesList = () => {
  const {
    vehiclesData,
    loading: isLoading,
    error: hasError,
  } = useGetAllVehicles()
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(`/vehicles/${id}`)
  }

  console.log('vehiclesData:', vehiclesData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {vehiclesImgs.map((image, index) => (
            <ListCard
              className="rounded-lg"
              containerClassName="relative"
              index={index}
              image={image}
              onClick={onClick}
              title={vehiclesData?.vehicles?.[index]?.name ?? ''}
            />
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {vehiclesImgs.map((image, index) => (
            <ListCard
              className="rounded-lg"
              containerClassName="relative"
              index={index}
              image={image}
              onClick={onClick}
              title={vehiclesData?.vehicles?.[index]?.name ?? ''}
            />
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {vehiclesImgs.map((image, index) => (
            <ListCard
              className="rounded-lg"
              containerClassName="relative"
              index={index}
              image={image}
              onClick={onClick}
              title={vehiclesData?.vehicles?.[index]?.name ?? ''}
            />
          ))}
        </ImageList>
      </div>
    </div>
  )
}
