import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllFilms } from './hooks'
import { ListCard } from '../common/ListCard'

const filmsImgs = Array.from(
  { length: 6 },
  (_, i) => `/assets/images/films/${i + 1}.jpg`,
)

export const FilmsList = () => {
  const { filmsData } = useGetAllFilms()
  const navigate = useNavigate()

  const onClick = (name: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    navigate(`/films/${formattedName}`)
  }

  console.log('filmsData:', filmsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '74%', margin: 'auto' }}>
          {filmsImgs.map((image, index) => {
            const filmName = filmsData?.films?.[index]?.title ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(filmName)}
                title={filmName}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
        <ImageList cols={2} sx={{ margin: 'auto' }}>
          {filmsImgs.map((image, index) => {
            const filmName = filmsData?.films?.[index]?.title ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(filmName)}
                title={filmName}
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
          {filmsImgs.map((image, index) => {
            const filmName = filmsData?.films?.[index]?.title ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(filmName)}
                title={filmName}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
