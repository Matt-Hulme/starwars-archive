import { ImageList, ImageListItem } from '@mui/material'

const filmsImgs = Array.from(
  { length: 6 },
  (_, i) => `/assets/images/films/${i + 1}.jpg`,
)

export const FilmsList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '74%', margin: 'auto' }}>
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
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
        <ImageList cols={2} sx={{ margin: 'auto' }}>
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
      <div className="hidden rounded-lg md:block pt-[104px]">
        <ImageList
          sx={{ maxWidth: '88%', margin: 'auto' }}
          cols={3}
          variant="standard"
        >
          {filmsImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`films${index + 1}`}
                className="rounded-lg object-contain w-full h-full"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
