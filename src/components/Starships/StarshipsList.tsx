import { ImageList, ImageListItem } from '@mui/material'

const starshipsImgs = Array.from(
  { length: 36 },
  (_, i) => `/assets/images/starships/${i + 1}.jpg`,
)

export const StarshipsList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList cols={1}>
          {starshipsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`starships${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {starshipsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`starships${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {starshipsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`starships${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
