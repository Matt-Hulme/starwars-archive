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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-[100dvh] px-10">
      <div className="gap-1 grid group max-w-[1500px] pb-10 pt-[104px] w-full md:grid-cols-2 lg:grid-cols-3">
        {(filmsData?.films ?? []).map((film, index) => {
          const title = film?.title ?? ''
          const id = getFormattedId(film?.id ?? '')
          const image = `assets/images/films/${id}.jpg`

          return (
            <ListCard
              classNames="inset-0 absolute group-hover:brightness-50 hover:!brightness-100 transition duration-200"
              containerClassNames="min-h-[700px]"
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
