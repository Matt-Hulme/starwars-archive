import { ImageListItem } from '@mui/material'

interface ListCardProps {
  classNames?: string
  containerClassNames?: string
  image: string
  id: string
  onClick: (id: string) => void
  title: string
}

export const ListCard = ({
  classNames,
  containerClassNames,
  image,
  id,
  onClick,
  title,
}: ListCardProps) => (
  <ImageListItem
    className={`hover:cursor-pointer ${containerClassNames}`}
    onClick={() => onClick(id)}
  >
    <div className="absolute bg-black bg-opacity-50 left-5 rounded-sm text-white top-5 z-10">
      {title}
    </div>
    <img src={image} alt={title} className={`h-full object-cover w-full ${classNames}`} />
  </ImageListItem>
)
