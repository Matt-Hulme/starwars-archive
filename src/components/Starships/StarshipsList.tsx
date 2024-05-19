import { ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const starshipsImgs = Array.from(
  { length: 36 },
  (_, i) => `/assets/images/starships/${i + 1}.jpg`,
)

export const StarshipsList = () => {
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(`/starships/${id}`)
  }

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {starshipsImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`starships${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {starshipsImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`starships${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {starshipsImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`starships${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
