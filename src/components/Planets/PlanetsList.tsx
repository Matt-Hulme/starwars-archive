import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllPlanetsQuery } from './hooks'

export const PlanetsList = () => {
  const { planetsData } = useGetAllPlanetsQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    navigate(`/planets/${formattedName}?id=${id}`)
  }

  console.log('planetsData:', planetsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {(planetsData?.planets ?? []).map((planet, index) => {
            const name = planet?.name ?? ''
            const id = atob(planet?.id ?? '').split(':')[1]
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
            const id = atob(planet?.id ?? '').split(':')[1]
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
            const id = atob(planet?.id ?? '').split(':')[1]
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
