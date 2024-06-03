import { useParams, useSearchParams } from 'react-router-dom'
import { useGetVehicleDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'
import { LoadingPage } from '../common'

export const VehicleDetails = () => {
  const { name: urlName } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    vehicleDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetVehicleDetailsQuery(id)
  const name = vehicleDetailsData?.name ?? ''
  const vehicleImage = `/assets/images/vehicles/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('vehicleDetailsData:', vehicleDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Vehicle" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader
          classNames="min-w-[400px] md:min-w-[300px] md:min-h-[225px] lg:min-w-[400px] lg:min-h-[280px]"
          image={vehicleImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Vehicle Pilots</section>
        <section className="bg-gray-100">Vehicle Films</section>
      </div>
    </div>
  )
}
