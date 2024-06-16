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
      <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] group max-w-[2000px] pt-[104px] w-full lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {(starshipsData?.starships ?? []).map((starship, index) => {
          const name = starship?.name ?? ''
          const id = getFormattedId(starship?.id ?? '')
          const image = `assets/images/starships/${id}.jpg`

          return (
            <ListCard
              classNames="absolute inset-0 group-hover:brightness-50 hover:!brightness-100 transition duration-200"
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
