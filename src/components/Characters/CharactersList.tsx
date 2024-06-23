import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllCharactersQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'
import { Typography } from '@mui/material'

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

  if (hasError) return <ErrorPage type="Character" />

  return (
    <div className="bg-cover bg-fixed bg-star-background flex flex-col gap-8 items-center min-h-[100dvh] pb-10 pt-[88px] px-10">
      <div className="bg-[#ffbe00] px-1 rounded-md text-[#39302e] md:hidden">
        <Typography variant='h4'>
          Characters
        </Typography>
      </div>
      <div className="bg-[#ffbe00] hidden px-1 rounded-md text-[#39302e] md:block">
        <Typography variant='h4'>
        Characters
        </Typography>
      </div>
      <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] group max-w-[2000px] w-full">
        {(charactersData?.people ?? []).map((character, index) => {
          const name = character?.name ?? ''
          const id = getFormattedId(character?.id ?? '')
          const image = `assets/images/characters/${id}.jpg`

          return (
            <ListCard
              classNames="absolute inset-0 group-hover:brightness-50 hover:!brightness-100 transition duration-200"
              containerClassNames="min-h-[400px]"
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
