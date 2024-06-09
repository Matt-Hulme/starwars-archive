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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
      <div className="gap-1 grid max-w-[2000px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] pt-[104px] rounded-lg w-full">
        {(charactersData?.people ?? []).map((character, index) => {
          const name = character?.name ?? ''
          const id = getFormattedId(character?.id ?? '')
          const image = `assets/images/characters/${id}.jpg`

          return (
            <ListCard
              classNames="rounded-lg absolute inset-0"
              containerClassNames="relative min-h-[400px]"
              id={id}
              image={image}
              key={index}
              title={name}
              onClick={() => onClick(name, id)}
            />
          )
        })}
      </div>
    </div>
  )
}
