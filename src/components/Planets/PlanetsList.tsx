import { ImageList, ImageListItem } from '@mui/material'

const planetsImgs = Array.from(
  { length: 60 },
  (_, i) => `/assets/images/planets/${i + 1}.jpg`,
)

export const PlanetsList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList cols={1}>
          {planetsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`planets${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {planetsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`planets${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {planetsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`planets${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
