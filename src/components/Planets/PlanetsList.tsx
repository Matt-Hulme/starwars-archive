import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllPlanetsQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'
import { Typography } from '@mui/material'

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

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Planets" />

  return (
    <div className="bg-star-background flex flex-col items-center min-h-[100dvh] pb-10 pt-[88px] px-10">
      <div className="max-w-[2000px] space-y-8 w-full">
        <div className="bg-[#ffbe00] px-1 rounded-md text-[#39302e] w-fit">
          <Typography variant='h4'>
            Planets
          </Typography>
        </div>
        <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] group">
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
    </div>
  )
}
