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
    <div className="bg-cover bg-fixed bg-star-background flex flex-col items-center min-h-[100dvh] px-10">
      <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] group max-w-[2000px] pb-10 pt-[104px] w-full lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {(vehiclesData?.vehicles ?? []).map((vehicle, index) => {
          const name = vehicle?.name ?? ''
          const id = getFormattedId(vehicle?.id ?? '')
          const image = `assets/images/vehicles/${id}.jpg`
          console.log('id:', id)

          return (
            <ListCard
              classNames="absolute inset-0 group-hover:brightness-50 hover:!brightness-100 transition duration-200"
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
