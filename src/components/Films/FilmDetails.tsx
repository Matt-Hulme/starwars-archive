import { useSearchParams } from 'react-router-dom'
import { useGetFilmDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'

export const FilmDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { filmDetailsData, error: hasError } = useGetFilmDetailsQuery(id)
  const { title } = filmDetailsData ?? {}
  const filmImage = `/assets/images/films/${id}.jpg`

  console.log('filmDetailsData::', filmDetailsData)

  if (hasError) return <ErrorPage type="Film" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 w-full">
        <DetailsHeader
          classNames="min-h-[200px] min-w-[150px] md:min-h-[300px] md:min-w-[225px] lg:min-h-[400px] lg:min-w-[280px] rounded-full"
          image={filmImage}
          name={title ?? ''}
        />
        <section className="bg-gray-100">Film Characters</section>
        <section className="bg-gray-100">Film Planets</section>
        <section className="bg-gray-100">Film Species</section>
        <section className="bg-gray-100">Film Vehicles</section>
        <section className="bg-gray-100">Film Starships</section>
      </div>
    </div>
  )
}
