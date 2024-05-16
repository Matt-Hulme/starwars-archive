import { ImageList, ImageListItem } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

const speciesImgs = Array.from(
  { length: 37 },
  (_, i) => `/assets/images/species/${i + 1}.jpg`,
)

export const SpeciesList = () => {
  // const navigate = useNavigate()

  // const onClick = () => {
  //   navigate('/')
  // }

  return (
    <div className="bg-fit bg-star-background flex flex-col h-full pt-16">
      <div className="block px-10 rounded-lg md:hidden">
        <ImageList sx={{ width: '100%' }} cols={1}>
          {speciesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg md:block lg:hidden">
        <ImageList sx={{ width: '100%' }} cols={3}>
          {speciesImgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item}
                alt={`species${index + 1}`}
                className="rounded-lg"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="hidden px-10 rounded-lg lg:block">
        <ImageList sx={{ width: '100%' }} cols={5}>
          {speciesImgs.map((item, index) => (
            <ImageListItem key={index}>
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
