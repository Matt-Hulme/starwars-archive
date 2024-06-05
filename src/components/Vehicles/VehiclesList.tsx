import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllVehiclesQuery } from './hooks'
import { ListCard } from '../common/ListCard'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'

export const VehiclesList = () => {
  const {
    vehiclesData,
    error: hasError,
    loading: isLoading,
  } = useGetAllVehiclesQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    navigate(`/vehicles/${getNameForUrl(name)}?id=${id}`)
  }

  console.log('vehiclesData:', vehiclesData)

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Vehicles data" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {(vehiclesData?.vehicles ?? []).map((vehicle, index) => {
            const name = vehicle?.name ?? ''
            const id = getFormattedId(vehicle?.id ?? '')
            const image = `assets/images/vehicles/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
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
          {(vehiclesData?.vehicles ?? []).map((vehicle, index) => {
            const name = vehicle?.name ?? ''
            const id = getFormattedId(vehicle?.id ?? '')
            const image = `assets/images/vehicles/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
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
          {(vehiclesData?.vehicles ?? []).map((vehicle, index) => {
            const name = vehicle?.name ?? ''
            const id = getFormattedId(vehicle?.id ?? '')
            const image = `assets/images/vehicles/${id}.jpg`
            console.log('id:', id)

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
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
