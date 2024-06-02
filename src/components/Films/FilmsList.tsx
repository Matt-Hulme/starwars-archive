import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllFilmsQuery } from './hooks'
import { ListCard } from '../common/ListCard'
import { getFormattedId, getNameForUrl } from '../utils'

export const FilmsList = () => {
  const { filmsData } = useGetAllFilmsQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    navigate(`/films/${getNameForUrl(name)}?id=${id}`)
  }

  console.log('filmsData:', filmsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '74%', margin: 'auto' }}>
          {(filmsData?.films ?? []).map((film, index) => {
            const name = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
        <ImageList cols={2} sx={{ margin: 'auto' }}>
          {(filmsData?.films ?? []).map((film, index) => {
            const name = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg lg:block pt-[104px]">
        <ImageList
          sx={{ maxWidth: '88%', margin: 'auto' }}
          cols={3}
          variant="standard"
        >
          {(filmsData?.films ?? []).map((film, index) => {
            const name = film?.title ?? ''
            const id = getFormattedId(film?.id ?? '')
            const image = `assets/images/films/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
