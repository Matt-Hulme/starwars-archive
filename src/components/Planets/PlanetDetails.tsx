import { useSearchParams } from 'react-router-dom'
import { useGetPlanetDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'

export const PlanetDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { planetDetailsData } = useGetPlanetDetailsQuery(id)
  const { name } = planetDetailsData ?? {}
  const planetImage = `/assets/images/planets/${id}.jpg`

  console.log('planetDetailsData:', planetDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader image={planetImage} name={name ?? ''} />
        <header className="bg-gray-100">Planet Header</header>
        <section className="bg-gray-100">Planet Characters</section>
        <section className="bg-gray-100">Planet Films</section>
      </div>
    </div>
  )
}
