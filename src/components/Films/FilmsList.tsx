import { ImageList } from '@mui/material'
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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '74%', margin: 'auto' }}>
          {(filmsData?.films ?? []).map((film, index) => {
            const title = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                classNames="rounded-lg"
                containerClassNames="relative"
                id={id}
                image={image}
                key={index}
                title={title}
                onClick={() => onClick(title, id)}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
        <ImageList cols={2} sx={{ margin: 'auto' }}>
          {(filmsData?.films ?? []).map((film, index) => {
            const title = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                classNames="rounded-lg"
                containerClassNames="relative"
                id={id}
                image={image}
                key={index}
                title={title}
                onClick={() => onClick(title, id)}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg lg:block pt-[104px]">
        <ImageList
          cols={3}
          sx={{ maxWidth: '88%', margin: 'auto' }}
          variant="standard"
        >
          {(filmsData?.films ?? []).map((film, index) => {
            const title = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                classNames="rounded-lg"
                containerClassNames="relative"
                id={id}
                image={image}
                key={index}
                title={title}
                onClick={() => onClick(title, id)}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
