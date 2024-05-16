import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../common'

const charactersImgs = Array.from(
  { length: 83 },
  (_, i) => `/assets/images/characters/${i + 1}.jpg`,
)

export const CharactersList = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className="bg-fit bg-star-background flex flex-col h-screen pt-16 relative">
      <Navbar showBackButton={true} />
      <div className="grow overflow-y-auto">
        <div className="block px-10 rounded-lg md:hidden">
          <ImageList sx={{ width: '100%' }} cols={1}>
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
          <ImageList sx={{ width: '100%' }} cols={3}>
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
          <ImageList sx={{ width: '100%' }} cols={5}>
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
    </div>
  )
}
