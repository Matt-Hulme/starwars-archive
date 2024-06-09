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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
      <div className="gap-1 grid max-w-[2000px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] pt-[104px] rounded-lg w-full">
        {(vehiclesData?.vehicles ?? []).map((vehicle, index) => {
          const name = vehicle?.name ?? ''
          const id = getFormattedId(vehicle?.id ?? '')
          const image = `assets/images/vehicles/${id}.jpg`
          console.log('id:', id)

          return (
            <ListCard
              classNames="rounded-lg absolute inset-0"
              containerClassNames="relative min-h-[130px] lg:min-h-[260px]"
              id={id}
              image={image}
              key={index}
              title={name}
              onClick={() => onClick(name, id)}
            />
          )
        })}
      </div>
    </div>
  )
}
