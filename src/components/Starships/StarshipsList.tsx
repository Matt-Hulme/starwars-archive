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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
      <div className="gap-1 grid max-w-[2000px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] pt-[104px] rounded-lg w-full">
        {(starshipsData?.starships ?? []).map((starship, index) => {
          const name = starship?.name ?? ''
          const id = getFormattedId(starship?.id ?? '')
          const image = `assets/images/starships/${id}.jpg`

          return (
            <ListCard
              classNames="rounded-lg absolute inset-0"
              containerClassNames="relative min-h-[130px] lg:min-h-[260px]"
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
