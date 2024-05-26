import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllStarships } from './hooks'
import { ListCard } from '../common/ListCard'

const starshipsImgs = Array.from(
  { length: 36 },
  (_, i) => `/assets/images/starships/${i + 1}.jpg`,
)

export const StarshipsList = () => {
  const { starshipsData } = useGetAllStarships()
  const navigate = useNavigate()

  const onClick = (name: string) => {
    const formattedName = name.replace(/ /g, '-').toLowerCase()
    navigate(`/starships/${formattedName}`)
  }

  console.log('starshipsData:', starshipsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {starshipsImgs.map((image, index) => {
            const starshipName = starshipsData?.starships?.[index]?.name ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(starshipName)}
                title={starshipName}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {starshipsImgs.map((image, index) => {
            const starshipName = starshipsData?.starships?.[index]?.name ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(starshipName)}
                title={starshipName}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {starshipsImgs.map((image, index) => {
            const starshipName = starshipsData?.starships?.[index]?.name ?? ''
            return (
              <ListCard
                className="rounded-lg"
                containerClassName="relative"
                index={index}
                image={image}
                onClick={() => onClick(starshipName)}
                title={starshipName}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
