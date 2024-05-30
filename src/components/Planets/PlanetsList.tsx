import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllPlanetsQuery } from './hooks'

const planetsImgs = Array.from(
  { length: 60 },
  (_, i) => `/assets/images/planets/${i + 1}.jpg`,
)

export const PlanetsList = () => {
  const { planetsData } = useGetAllPlanetsQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    const decodedId = atob(id).split(':')[1]
    navigate(`/planets/${formattedName}?id=${decodedId}`)
  }

  console.log('planetsData:', planetsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {planetsImgs.map((image, index) => {
            const name = planetsData?.planets?.[index]?.name ?? ''
            const id = planetsData?.planets?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
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
          {planetsImgs.map((image, index) => {
            const name = planetsData?.planets?.[index]?.name ?? ''
            const id = planetsData?.planets?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
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
          {planetsImgs.map((image, index) => {
            const name = planetsData?.planets?.[index]?.name ?? ''
            const id = planetsData?.planets?.[index]?.id ?? ''

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                index={index}
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
