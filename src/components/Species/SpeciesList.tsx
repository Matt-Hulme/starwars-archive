import { ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAllSpecies } from './hooks'

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
          {speciesImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {speciesImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {speciesImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
