import { useSearchParams } from 'react-router-dom'
import { useGetVehicleDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'

export const VehicleDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { vehicleDetailsData, error: hasError } = useGetVehicleDetailsQuery(id)
  const { name } = vehicleDetailsData ?? {}
  const vehicleImage = `/assets/images/vehicles/${id}.jpg`

  console.log('vehicleDetailsData:', vehicleDetailsData)

  if (hasError) return <ErrorPage type="Vehicle" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader
          classNames="min-h-[150px] min-w-[200px] md:min-h-[225px] md:min-w-[300px] lg:min-h-[280px] lg:min-w-[400px] rounded-full"
          image={vehicleImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Vehicle Pilots</section>
        <section className="bg-gray-100">Vehicle Films</section>
      </div>
    </div>
  )
}
