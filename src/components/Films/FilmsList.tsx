import { ImageList, ImageListItem } from '@mui/material'

const filmsImgs = Array.from(
  { length: 6 },
  (_, i) => `/assets/images/films/${i + 1}.jpg`,
)

export const FilmsList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList cols={1}>
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
        <ImageList cols={2}>
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
      <div className="hidden px-10 rounded-lg md:block">
        <ImageList cols={3}>
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
