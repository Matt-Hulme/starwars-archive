import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllCharacters } from './hooks'
import { ListCard } from '../common/ListCard'

const charactersImgs = Array.from(
  { length: 83 },
  (_, i) => `/assets/images/characters/${i + 1}.jpg`,
)

export const CharactersList = () => {
  const { charactersData } = useGetAllCharacters()
  const navigate = useNavigate()

  const onClick = (name: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    navigate(`/characters/${formattedName}`)
  }

  console.log('charactersData:', charactersData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '78%', margin: 'auto' }}>
          {charactersImgs.map((image, index) => {
            const characterName = charactersData?.people?.[index]?.name ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(characterName)}
                title={characterName}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
        <ImageList cols={3}>
          {charactersImgs.map((image, index) => {
            const characterName = charactersData?.people?.[index]?.name ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(characterName)}
                title={characterName}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg lg:block pt-[104px]">
        <ImageList cols={5}>
          {charactersImgs.map((image, index) => {
            const characterName = charactersData?.people?.[index]?.name ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(characterName)}
                title={characterName}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
