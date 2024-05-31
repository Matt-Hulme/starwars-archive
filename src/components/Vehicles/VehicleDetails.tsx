import { useSearchParams } from 'react-router-dom'
import { useGetVehicleDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'

export const VehicleDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { vehicleDetailsData } = useGetVehicleDetailsQuery(id)
  const { name } = vehicleDetailsData ?? {}
  const vehicleImage = `/assets/images/vehicles/${id}.jpg`

  console.log('vehicleDetailsData:', vehicleDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader image={vehicleImage} name={name ?? ''} />
        <section className="bg-gray-100">Vehicle Pilots</section>
        <section className="bg-gray-100">Vehicle Films</section>
      </div>
    </div>
  )
}
