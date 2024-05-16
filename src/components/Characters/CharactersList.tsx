import { ImageList, ImageListItem } from '@mui/material'

const charactersImgs = Array.from(
  { length: 83 },
  (_, i) => `/assets/images/characters/${i + 1}.jpg`,
)

export const CharactersList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList cols={1}>
          {charactersImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`characters${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {charactersImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`characters${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {charactersImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`characters${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
