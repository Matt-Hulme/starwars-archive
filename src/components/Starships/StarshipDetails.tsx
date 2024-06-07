import { useParams, useSearchParams } from 'react-router-dom'
import { useGetStarshipDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, HorizontalScroller } from '../common'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl } from '../../utils'
import { LoadingPage } from '../common'
import { startCase } from 'lodash'
import { ListCard } from '../common/ListCard'

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
          classNames="h-[225px] lg:min-h-[280px] lg:min-w-[400px]"
          image={starshipImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={panelContentA} variant="light" />
            <DetailsHeaderPanel panelContent={panelContentB} variant="dark" />
          </div>
        </DetailsHeader>
        {(starshipDetailsData?.pilotConnection?.pilots?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Pilots'
            >
              {starshipDetailsData?.pilotConnection?.pilots?.map((pilot, index) => {
                const title = pilot?.name ?? ''
                const id = getFormattedId(pilot?.id ?? '')
                const image = `/assets/images/characters/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0 z--1'
                    containerClassNames='min-h-[260px] min-w-[180px] rounded-lg overflow-hidden relative'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {}}
                  />
                )
              })}
            </HorizontalScroller>
          </section>
        )}
        {(starshipDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Films'
            >
              {starshipDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/films/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0 z--1'
                    containerClassNames='min-h-[260px] min-w-[180px] rounded-lg overflow-hidden relative'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {}}
                  />
                )
              })}
            </HorizontalScroller>
          </section>
        )}
      </div>
    </div>
  )
}
