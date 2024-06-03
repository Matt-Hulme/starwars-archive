import { useParams, useSearchParams } from 'react-router-dom'
import { useGetFilmDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'

export const FilmDetails = () => {
  const { name: urlTitle } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    filmDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetFilmDetailsQuery(id)
  const title = filmDetailsData?.title ?? ''
  const filmImage = `/assets/images/films/${id}.jpg`

  useEffect(() => {
    if (title && urlTitle !== getNameForUrl(title)) {
      setNameError(true)
    }
  }, [title, urlTitle])

  console.log('filmDetailsData::', filmDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Film" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 w-full">
        <DetailsHeader
          classNames="min-h-[400px] md:min-h-[300px] md:min-w-[225px] lg:min-h-[400px] lg:min-w-[280px]"
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
