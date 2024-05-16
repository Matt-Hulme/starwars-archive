import { ImageList, ImageListItem } from '@mui/material'

const vehiclesImgs = Array.from(
  { length: 39 },
  (_, i) => `/assets/images/vehicles/${i + 1}.jpg`,
)

export const VehiclesList = () => {
  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList cols={1}>
          {vehiclesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`vehicles${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {vehiclesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`vehicles${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {vehiclesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`vehicles${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
