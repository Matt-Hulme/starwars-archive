import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllPlanetsQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'

export const PlanetsList = () => {
  const {
    planetsData,
    error: hasError,
    loading: isLoading,
  } = useGetAllPlanetsQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    navigate(`/planets/${getNameForUrl(name)}?id=${id}`)
  }

  console.log('planetsData:', planetsData)

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Planets data" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
      <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] group max-w-[2000px] pt-[104px] w-full">
        {(planetsData?.planets ?? []).map((planet, index) => {
          const name = planet?.name ?? ''
          const id = getFormattedId(planet?.id ?? '')
          const image = `assets/images/planets/${id}.jpg`

          return (
            <ListCard
              classNames="absolute inset-0 group-hover:brightness-50 hover:!brightness-100 transition duration-200"
              containerClassNames="relative min-h-[260px]"
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
