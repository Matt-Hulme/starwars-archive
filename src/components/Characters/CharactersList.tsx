import { ArrowBack } from '@mui/icons-material'
import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const imagePaths = Array.from(
  { length: 83 },
  (_, i) => `public/assets/images/characters/${i + 1}.jpg`,
)

export const CharactersList = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className="bg-fit bg-star-background pt-16">
      <div className="h-[calc(100vh-64px)] flex flex-row bg-black-100 pr-[84px] w-full p-5">
        <div>
          <Button
            className="duration-800 ease-linear opacity-80 transition-all hover:opacity-100"
            onClick={onClick}
            size="large"
            startIcon={<ArrowBack />}
            sx={{ color: '#FFBE00B3' }}
            variant="text"
          >
            Back
          </Button>
        </div>
        <div className="block md:hidden grow rounded-lg">
          <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
            {imagePaths.map((item, index) => (
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
        <div className="hidden md:block lg:hidden grow rounded-lg">
          <ImageList sx={{ width: '100%', height: '100%' }} cols={3}>
            {imagePaths.map((item, index) => (
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
        <div className="hidden lg:block grow rounded-lg">
          <ImageList sx={{ width: '100%', height: '100%' }} cols={5}>
            {imagePaths.map((item, index) => (
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
