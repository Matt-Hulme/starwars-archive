import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllPlanetsQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../utils'
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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {(planetsData?.planets ?? []).map((planet, index) => {
            const name = planet?.name ?? ''
            const id = getFormattedId(planet?.id ?? '')
            const image = `assets/images/planets/${id}.jpg`

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
      <div className="hidden pt-[104px] px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {(planetsData?.planets ?? []).map((planet, index) => {
            const name = planet?.name ?? ''
            const id = getFormattedId(planet?.id ?? '')
            const image = `assets/images/planets/${id}.jpg`

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
      <div className="hidden pt-[104px] px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {(planetsData?.planets ?? []).map((planet, index) => {
            const name = planet?.name ?? ''
            const id = getFormattedId(planet?.id ?? '')
            const image = `assets/images/planets/${id}.jpg`

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
