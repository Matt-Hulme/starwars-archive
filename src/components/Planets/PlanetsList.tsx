import { ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const planetsImgs = Array.from(
  { length: 60 },
  (_, i) => `/assets/images/planets/${i + 1}.jpg`,
)

export const PlanetsList = () => {
  const navigate = useNavigate()

  const onClick = (id: number) => {
    navigate(`/planets/${id}`)
  }

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {planetsImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`planets${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] px-10 rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {planetsImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`planets${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] px-10 rounded-lg lg:block">
        <ImageList cols={5}>
          {planetsImgs.map((item, index) => (
            <ImageListItem
              key={index}
              className="hover:cursor-pointer"
              onClick={() => onClick(index + 1)}
            >
              <img
                src={item}
                alt={`planets${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
