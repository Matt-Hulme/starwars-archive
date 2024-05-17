import { ImageList, ImageListItem } from '@mui/material'

const charactersImgs = Array.from(
  { length: 83 },
  (_, i) => `/assets/images/characters/${i + 1}.jpg`,
)

export const CharactersList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '78%', margin: 'auto' }}>
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
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
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
      <div className="hidden rounded-lg lg:block pt-[104px]">
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
