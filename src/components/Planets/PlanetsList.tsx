import { ArrowBack } from '@mui/icons-material'
import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const planetsImgs = Array.from(
  { length: 60 },
  (_, i) => `/assets/images/planets/${i + 1}.jpg`,
)

export const PlanetsList = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className="bg-fit bg-star-background h-screen overflow-y-scroll relative">
      <div className="absolute bg-black-100 flex flex-row max-h-[calc(100vh-64px)] top-16 w-full">
        <div className="block grow rounded-lg md:hidden">
          <ImageList sx={{ width: '100%' }} cols={1}>
            {planetsImgs.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={`vehicle${index + 1}`}
                  className="rounded-lg"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="grow hidden rounded-lg md:block lg:hidden">
          <ImageList sx={{ width: '100%' }} cols={3}>
            {planetsImgs.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={`vehicle${index + 1}`}
                  className="rounded-lg"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="grow hidden rounded-lg lg:block">
          <ImageList sx={{ width: '100%' }} cols={5}>
            {planetsImgs.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item}
                  alt={`vehicle${index + 1}`}
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
