import { ImageList, ImageListItem } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

const filmsImgs = Array.from(
  { length: 6 },
  (_, i) => `/assets/images/films/${i + 1}.jpg`,
)

export const FilmsList = () => {
  // const navigate = useNavigate()

  // const onClick = () => {
  //   navigate('/')
  // }

  return (
    <div className="bg-fit bg-star-background flex flex-col h-full pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList sx={{ width: '100%' }} cols={1}>
          {filmsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`films${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList sx={{ width: '100%' }} cols={3}>
          {filmsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`films${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList sx={{ width: '100%' }} cols={5}>
          {filmsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`films${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
