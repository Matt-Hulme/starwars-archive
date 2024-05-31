import { ImageListItem } from '@mui/material'

interface ListCardProps {
  className?: string
  containerClassName?: string
  image: string
  id: string
  onClick: (id: string) => void
  title: string
}

export const ListCard = ({
  className,
  containerClassName,
  image,
  id,
  onClick,
  title,
}: ListCardProps) => (
  <ImageListItem
    className={`hover:cursor-pointer ${containerClassName}`}
    onClick={() => onClick(id)}
  >
    <div className="absolute bg-black bg-opacity-50 left-5 rounded-sm text-white top-5">
      {title}
    </div>
    <img src={image} alt={title} className={className} />
  </ImageListItem>
)
