import { ArrowBack } from '@mui/icons-material'
import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const imagePaths = Array.from(
  { length: 83 },
  (_, i) => `src/assets/images/characters/${i + 1}.jpg`,
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
        <div className="grow bg-blue-400 rounded-lg">
          <ImageList
            sx={{ width: '100%', height: '100%' }}
            cols={6}
            rowHeight={300}
          >
            {imagePaths.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item} alt={`character${index + 1}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  )
}
