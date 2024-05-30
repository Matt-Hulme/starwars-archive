import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllVehiclesQuery } from './hooks'
import { ListCard } from '../common/ListCard'

const vehiclesImgs = Array.from(
  { length: 39 },
  (_, i) => `/assets/images/vehicles/${i + 1}.jpg`,
)

export const VehiclesList = () => {
  const { vehiclesData } = useGetAllVehiclesQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    const formattedName = name
      .replace(/ /g, '-')
      .replace(/\//g, '-')
      .toLowerCase()
    const decodedId = atob(id).split(':')[1]
    navigate(`/vehicles/${formattedName}?id=${decodedId}`)
  }

  console.log('vehiclesData:', vehiclesData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {vehiclesImgs.map((image, index) => {
            const name = vehiclesData?.vehicles?.[index]?.name ?? ''
            const id = vehiclesData?.vehicles?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {vehiclesImgs.map((image, index) => {
            const name = vehiclesData?.vehicles?.[index]?.name ?? ''
            const id = vehiclesData?.vehicles?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {vehiclesImgs.map((image, index) => {
            const name = vehiclesData?.vehicles?.[index]?.name ?? ''
            const id = vehiclesData?.vehicles?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
