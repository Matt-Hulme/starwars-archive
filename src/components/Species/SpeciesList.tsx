import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllSpecies } from './hooks'
import { ListCard } from '../common/ListCard'

const speciesImgs = Array.from(
  { length: 37 },
  (_, i) => `/assets/images/species/${i + 1}.jpg`,
)

export const SpeciesList = () => {
  const { speciesData } = useGetAllSpecies()
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(`/species/${id}`)
  }

  console.log('speciesData:', speciesData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {speciesImgs.map((image, index) => (
            <ListCard
              className="rounded-lg"
              containerClassName="relative"
              index={index}
              image={image}
              onClick={onClick}
              title={speciesData?.species?.[index]?.name ?? ''}
            />
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {speciesImgs.map((image, index) => (
            <ListCard
              className="rounded-lg"
              containerClassName="relative"
              index={index}
              image={image}
              onClick={onClick}
              title={speciesData?.species?.[index]?.name ?? ''}
            />
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {speciesImgs.map((image, index) => (
            <ListCard
              className="rounded-lg"
              containerClassName="relative"
              index={index}
              image={image}
              onClick={onClick}
              title={speciesData?.species?.[index]?.name ?? ''}
            />
          ))}
        </ImageList>
      </div>
    </div>
  )
}
