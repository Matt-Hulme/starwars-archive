import { useParams, useSearchParams } from 'react-router-dom'
import { useGetPlanetDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl } from '../../utils'
import { startCase } from 'lodash'

export const PlanetDetails = () => {
  const { name: urlName } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    planetDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetPlanetDetailsQuery(id)
  const name = planetDetailsData?.name ?? ''
  const planetImage = `/assets/images/planets/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('planetDetailsData:', planetDetailsData)

  const panelContentA = [
    {
      heading: 'Terrain',
      content:
        planetDetailsData?.terrains
          ?.map((terrain: string | null) => startCase(terrain ?? ''))
          .join(', ') ?? '',
    },
    {
      heading: 'Climate',
      content:
        planetDetailsData?.climates
          ?.map((climate: string | null) => startCase(climate ?? ''))
          .join(', ') ?? '',
    },
    {
      heading: 'Surface Water',
      content: planetDetailsData?.surfaceWater?.toString() ?? '',
    },
  ]

  const panelContentB = [
    {
      heading: 'Population',
      content: planetDetailsData?.population?.toString() ?? '',
    },
    {
      heading: 'Gravity',
      content: startCase(planetDetailsData?.gravity ?? ''),
    },
    {
      heading: 'Diameter',
      content: planetDetailsData?.diameter?.toString() ?? '',
    },
    {
      heading: 'Rotation',
      content: planetDetailsData?.rotationPeriod?.toString() ?? '',
    },
  ]

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Planet" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-5 w-full">
        <DetailsHeader
          classNames="h-[300px] lg:min-h-[275px] lg:min-w-[275px]"
          image={planetImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={panelContentA} variant="light" />
            <DetailsHeaderPanel panelContent={panelContentB} variant="dark" />
          </div>
        </DetailsHeader>
        {(planetDetailsData?.residentConnection?.residents?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Characters'
            >
              {planetDetailsData?.residentConnection?.residents?.map((resident, index) => {
                const title = resident?.name ?? ''
                const id = getFormattedId(resident?.id ?? '')
                const image = `/assets/images/characters/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0'
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
        {(planetDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title="Films"
            >
              {planetDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/films/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0'
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
