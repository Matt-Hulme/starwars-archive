import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllStarshipsQuery } from './hooks'
import { ListCard } from '../common/ListCard'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'

export const StarshipsList = () => {
  const {
    starshipsData,
    error: hasError,
    loading: isLoading,
  } = useGetAllStarshipsQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    navigate(`/starships/${getNameForUrl(name)}?id=${id}`)
  }

  console.log('starshipsData:', starshipsData)

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Starships data" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {(starshipsData?.starships ?? []).map((starship, index) => {
            const name = starship?.name ?? ''
            const id = getFormattedId(starship?.id ?? '')
            const image = `assets/images/starships/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {(starshipsData?.starships ?? []).map((starship, index) => {
            const name = starship?.name ?? ''
            const id = getFormattedId(starship?.id ?? '')
            const image = `assets/images/starships/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {(starshipsData?.starships ?? []).map((starship, index) => {
            const name = starship?.name ?? ''
            const id = getFormattedId(starship?.id ?? '')
            const image = `assets/images/starships/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
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
