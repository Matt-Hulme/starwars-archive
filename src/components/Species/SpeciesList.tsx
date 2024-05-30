import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllSpeciesQuery } from './hooks'

const speciesImgs = Array.from(
  { length: 37 },
  (_, i) => `/assets/images/species/${i + 1}.jpg`,
)

export const SpeciesList = () => {
  const { speciesData } = useGetAllSpeciesQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    const decodedId = atob(id).split(':')[1]
    navigate(`/species/${formattedName}?id=${decodedId}`)
  }

  console.log('speciesData:', speciesData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {speciesImgs.map((image, index) => {
            const name = speciesData?.species?.[index]?.name ?? ''
            const id = speciesData?.species?.[index]?.id ?? ''
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
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {speciesImgs.map((image, index) => {
            const name = speciesData?.species?.[index]?.name ?? ''
            const id = speciesData?.species?.[index]?.id ?? ''
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
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {speciesImgs.map((image, index) => {
            const name = speciesData?.species?.[index]?.name ?? ''
            const id = speciesData?.species?.[index]?.id ?? ''
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
