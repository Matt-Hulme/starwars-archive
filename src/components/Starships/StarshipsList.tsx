import { ImageList, ImageListItem } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import { Navbar } from '../common'

const starshipsImgs = Array.from(
  { length: 36 },
  (_, i) => `/assets/images/starships/${i + 1}.jpg`,
)

export const StarshipsList = () => {
  // const navigate = useNavigate()

  // const onClick = () => {
  //   navigate('/')
  // }

  return (
    <div className="bg-fit bg-star-background flex flex-col h-screen items-center overflow-y-scroll relative w-full">
      <Navbar />
      <div className="grow pt-16">
        <div className="block px-10 rounded-lg md:hidden">
          <ImageList sx={{ width: '100%' }} cols={1}>
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
          <ImageList sx={{ width: '100%' }} cols={3}>
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
          <ImageList sx={{ width: '100%' }} cols={5}>
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
    </div>
  )
}
