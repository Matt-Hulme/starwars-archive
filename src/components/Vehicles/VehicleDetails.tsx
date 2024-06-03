import { useParams, useSearchParams } from 'react-router-dom'
import { useGetVehicleDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'
import { LoadingPage } from '../common'
import { startCase } from 'lodash'
import { DetailsHeaderPanel } from '../common/DetailsHeader/DetailsHeaderPanel'

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

  const panelContentA = [
    {
      heading: 'Manufacturer',
      content:
        vehicleDetailsData?.manufacturers
          ?.map((manufacturer: string | null) => manufacturer)
          .join(', ') ?? '',
    },
    {
      heading: 'Model',
      content: startCase(vehicleDetailsData?.model ?? ''),
    },
    {
      heading: 'Class',
      content: startCase(vehicleDetailsData?.vehicleClass ?? ''),
    },
    {
      heading: 'Cost',
      content: vehicleDetailsData?.costInCredits?.toString() ?? '',
    },
  ]

  const panelContentB = [
    {
      heading: 'Crew',
      content: vehicleDetailsData?.crew?.toString() ?? '',
    },
    {
      heading: 'Passengers',
      content: vehicleDetailsData?.passengers?.toString() ?? '',
    },
    {
      heading: 'Speed',
      content: vehicleDetailsData?.maxAtmospheringSpeed?.toString() ?? '',
    },
    {
      heading: 'Length',
      content: vehicleDetailsData?.length?.toString() ?? '',
    },
    {
      heading: 'Cargo Capacity',
      content: vehicleDetailsData?.cargoCapacity?.toString() ?? '',
    },
    {
      heading: 'Consumables',
      content: startCase(vehicleDetailsData?.consumables ?? ''),
    },
  ]

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Vehicle" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-5 w-full">
        <DetailsHeader
          classNames="min-w-[400px] md:min-w-[300px] md:min-h-[225px] lg:min-w-[400px] lg:min-h-[280px]"
          image={vehicleImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel variant="light" panelContent={panelContentA} />
            <DetailsHeaderPanel variant="dark" panelContent={panelContentB} />
          </div>
        </DetailsHeader>
        <section className="bg-gray-100">Vehicle Pilots</section>
        <section className="bg-gray-100">Vehicle Films</section>
      </div>
    </div>
  )
}
