import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllCharactersQuery } from './hooks'

const charactersImgs = Array.from(
  { length: 83 },
  (_, i) => `/assets/images/characters/${i + 1}.jpg`,
)

export const CharactersList = () => {
  const { charactersData } = useGetAllCharactersQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    const decodedId = atob(id).split(':')[1]
    navigate(`/characters/${formattedName}/?id=${decodedId}`)
  }

  console.log('charactersData:', charactersData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block rounded-lg md:hidden pt-[104px]">
        <ImageList cols={1} sx={{ maxWidth: '78%', margin: 'auto' }}>
          {charactersImgs.map((image, index) => {
            const name = charactersData?.people?.[index]?.name ?? ''
            const id = charactersData?.people?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg md:block lg:hidden pt-[104px]">
        <ImageList cols={3}>
          {charactersImgs.map((image, index) => {
            const name = charactersData?.people?.[index]?.name ?? ''
            const id = charactersData?.people?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden rounded-lg lg:block pt-[104px]">
        <ImageList cols={5}>
          {charactersImgs.map((image, index) => {
            const name = charactersData?.people?.[index]?.name ?? ''
            const id = charactersData?.people?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
