import { useNavigate } from 'react-router-dom'
import { useGetAllFilmsQuery } from './hooks'
import { ListCard } from '../common/ListCard'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'
import { Typography } from '@mui/material'

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

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Film" />

  return (
    <div className="bg-star-background flex flex-col items-center min-h-[100dvh] pb-10 pt-[88px] px-10">
      <div className="max-w-[2000px] space-y-8 w-full">
        <div className="bg-[#ffbe00] px-1 rounded-md text-[#39302e] w-fit">
          <Typography variant='h4'>
            Films
          </Typography>
        </div>
        <div className="gap-1 grid group md:grid-cols-2 lg:grid-cols-3">
          {(filmsData?.films ?? []).map((film, index) => {
            const title = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                classNames="inset-0 absolute group-hover:brightness-50 hover:!brightness-100 transition duration-200"
                containerClassNames="min-h-[500px] md:min-h-[750px]"
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
    </div>
  )
}
