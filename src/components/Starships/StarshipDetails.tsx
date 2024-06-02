import { useSearchParams } from 'react-router-dom'
import { useGetStarshipDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'

export const StarshipDetails = () => {
  const [searchparams] = useSearchParams()
  const id = searchparams.get('id') ?? ''
  const { starshipDetailsData, error: hasError } =
    useGetStarshipDetailsQuery(id)
  const { name } = starshipDetailsData ?? {}
  const starshipImage = `/assets/images/starships/${id}.jpg`

  console.log('starshipDetailsData:', starshipDetailsData)

  if (hasError) return <ErrorPage type="Starship" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader
          classNames="min-h-[150px] min-w-[200px] md:min-h-[225px] md:min-w-[300px] lg:min-h-[280px] lg:min-w-[400px] rounded-full"
          image={starshipImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Starship Pilots</section>
        <section className="bg-gray-100">Starship Films</section>
      </div>
    </div>
  )
}
