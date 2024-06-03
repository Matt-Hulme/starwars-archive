import { useParams, useSearchParams } from 'react-router-dom'
import { useGetStarshipDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'
import { LoadingPage } from '../common'
import { DetailsHeaderPanel } from '../common/DetailsHeader/DetailsHeaderPanel'
import { startCase } from 'lodash'

export const StarshipDetails = () => {
  const { name: urlName } = useParams()
  const [searchparams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchparams.get('id') ?? ''
  const {
    starshipDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetStarshipDetailsQuery(id)
  const name = starshipDetailsData?.name ?? ''
  const starshipImage = `/assets/images/starships/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('starshipDetailsData:', starshipDetailsData)

  const panelContentA = [
    {
      heading: 'Manufacturer',
      content:
        starshipDetailsData?.manufacturers
          ?.map((manufacturer: string | null) => manufacturer)
          .join(', ') ?? '',
    },
    {
      heading: 'Model',
      content: startCase(starshipDetailsData?.model ?? ''),
    },
    {
      heading: 'Class',
      content: startCase(starshipDetailsData?.starshipClass ?? ''),
    },
    {
      heading: 'Cost',
      content: starshipDetailsData?.costInCredits?.toString() ?? '',
    },
  ]

  const panelContentB = [
    {
      heading: 'Crew',
      content: starshipDetailsData?.crew?.toString() ?? '',
    },
    {
      heading: 'Passengers',
      content: starshipDetailsData?.passengers?.toString() ?? '',
    },
    {
      heading: 'Speed',
      content: starshipDetailsData?.maxAtmospheringSpeed?.toString() ?? '',
    },
    {
      heading: 'Length',
      content: starshipDetailsData?.length?.toString() ?? '',
    },
    {
      heading: 'Cargo Capacity',
      content: starshipDetailsData?.cargoCapacity?.toString() ?? '',
    },
    {
      heading: 'Hyperdrive',
      content: starshipDetailsData?.hyperdriveRating?.toString() ?? '',
    },
  ]

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Starship" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-5 w-full">
        <DetailsHeader
          classNames="min-w-[400px] md:min-w-[300px] md:min-h-[225px] lg:min-w-[400px] lg:min-h-[280px]"
          image={starshipImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel variant="light" panelContent={panelContentA} />
            <DetailsHeaderPanel variant="dark" panelContent={panelContentB} />
          </div>
        </DetailsHeader>
        <section className="bg-gray-100">Starship Pilots</section>
        <section className="bg-gray-100">Starship Films</section>
      </div>
    </div>
  )
}
