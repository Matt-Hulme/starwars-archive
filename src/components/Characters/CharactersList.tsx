import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllCharactersQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'

export const CharactersList = () => {
  const {
    charactersData,
    error: hasError,
    loading: isLoading,
  } = useGetAllCharactersQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    navigate(`/characters/${getNameForUrl(name)}?id=${id}`)
  }

  console.log('charactersData:', charactersData)

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Characters data" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1} sx={{ maxWidth: '78%', margin: 'auto' }}>
          {(charactersData?.people ?? []).map((character, index) => {
            const name = character?.name ?? ''
            const id = getFormattedId(character?.id ?? '')
            const image = `assets/images/characters/${id}.jpg`

            return (
              <ListCard
                classNames="rounded-lg"
                containerClassNames="relative"
                id={id}
                image={image}
                key={index}
                title={name}
                onClick={() => onClick(name, id)}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {(charactersData?.people ?? []).map((character, index) => {
            const name = character?.name ?? ''
            const id = getFormattedId(character?.id ?? '')
            const image = `assets/images/characters/${id}.jpg`

            return (
              <ListCard
                classNames="rounded-lg"
                containerClassNames="relative"
                id={id}
                image={image}
                key={index}
                title={name}
                onClick={() => onClick(name, id)}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {(charactersData?.people ?? []).map((character, index) => {
            const name = character?.name ?? ''
            const id = getFormattedId(character?.id ?? '')
            const image = `assets/images/characters/${id}.jpg`

            return (
              <ListCard
                classNames="rounded-lg"
                containerClassNames="relative"
                id={id}
                image={image}
                key={index}
                title={name}
                onClick={() => onClick(name, id)}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
