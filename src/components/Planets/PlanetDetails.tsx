import { useParams, useSearchParams } from 'react-router-dom'
import { useGetPlanetDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel } from '../common'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../../utils'
import { LoadingPage } from '../common'
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
            <DetailsHeaderPanel variant="light" panelContent={panelContentA} />
            <DetailsHeaderPanel variant="dark" panelContent={panelContentB} />
          </div>
        </DetailsHeader>
        <header className="bg-gray-100">Planet Header</header>
        <section className="bg-gray-100">Planet Characters</section>
        <section className="bg-gray-100">Planet Films</section>
      </div>
    </div>
  )
}
