import { useNavigate } from 'react-router-dom'
import { useGetAllVehiclesQuery } from './hooks'
import { ListCard } from '../common/ListCard'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'
import { Typography } from '@mui/material'

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

  if (hasError) return <ErrorPage type="Vehicles" />

  return (
    <div className="bg-star-background flex flex-col items-center min-h-[100dvh] pb-10 pt-[88px] px-10">
      <div className="max-w-[2000px] space-y-8 w-full">
        <div className="bg-[#ffbe00] px-1 rounded-md text-[#39302e] w-fit">
          <Typography variant='h4'>
            Vehicles
          </Typography>
        </div>
        <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] group lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
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
    </div>
  )
}
