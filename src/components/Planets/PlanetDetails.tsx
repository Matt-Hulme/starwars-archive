import { useSearchParams } from 'react-router-dom'
import { useGetPlanetDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'

export const PlanetDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { planetDetailsData, error: hasError } = useGetPlanetDetailsQuery(id)
  const { name } = planetDetailsData ?? {}
  const planetImage = `/assets/images/planets/${id}.jpg`

  console.log('planetDetailsData:', planetDetailsData)

  if (hasError) return <ErrorPage type="Planet" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 w-full">
        <DetailsHeader
          classNames={
            'min-h-[200px] min-w-[200px] md:min-h-[300px] md:min-w-[300px] lg:min-h-[400px] lg:min-w-[400px] rounded-full'
          }
          image={planetImage}
          name={name ?? ''}
        />
        <header className="bg-gray-100">Planet Header</header>
        <section className="bg-gray-100">Planet Characters</section>
        <section className="bg-gray-100">Planet Films</section>
      </div>
    </div>
  )
}
