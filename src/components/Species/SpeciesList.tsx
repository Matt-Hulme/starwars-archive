import { ImageList, ImageListItem } from '@mui/material'

const speciesImgs = Array.from(
  { length: 37 },
  (_, i) => `/assets/images/species/${i + 1}.jpg`,
)

export const SpeciesList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList cols={1}>
          {speciesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {speciesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {speciesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
