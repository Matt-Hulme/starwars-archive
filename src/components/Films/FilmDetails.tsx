import { useSearchParams } from 'react-router-dom'
import { useGetFilmDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'

export const FilmDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { filmDetailsData } = useGetFilmDetailsQuery(id)
  const { title } = filmDetailsData ?? {}
  const filmImage = `/assets/images/films/${id}.jpg`

  console.log('filmDetailsData::', filmDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 w-full">
        <DetailsHeader
          classNames={'h-[400px] w-[280px]'}
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
