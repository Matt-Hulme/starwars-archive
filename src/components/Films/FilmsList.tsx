import { useNavigate } from 'react-router-dom'
import { useGetAllFilmsQuery } from './hooks'
import { ListCard } from '../common/ListCard'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'

export const FilmsList = () => {
  const {
    filmsData,
    error: hasError,
    loading: isLoading,
  } = useGetAllFilmsQuery()
  const navigate = useNavigate()

  const onClick = (title: string, id: string) => {
    navigate(`/films/${getNameForUrl(title)}?id=${id}`)
  }

  console.log('filmsData:', filmsData)

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Characters data not found" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
      <div className="gap-1 grid max-w-[1500px] pt-[104px] md:grid-cols-2 lg:grid-cols-3 rounded-lg w-full">
        {(filmsData?.films ?? []).map((film, index) => {
          const title = film?.title ?? ''
          const id = getFormattedId(film?.id ?? '')
          const image = `assets/images/films/${id}.jpg`

          return (
            <ListCard
              classNames="rounded-lg inset-0"
              containerClassNames="relative"
              id={id}
              image={image}
              key={index}
              title={title}
              onClick={() => onClick(title, id)}
            />
          )
        })}
      </div>
    </div>
  )
}
