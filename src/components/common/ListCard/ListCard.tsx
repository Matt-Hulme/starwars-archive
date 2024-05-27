import { ImageListItem } from '@mui/material'

interface ListCardProps {
  className?: string
  containerClassName?: string
  image: string
  index: number
  onClick: (index: number) => void
  title: string
}

export const ListCard = ({
  className,
  containerClassName,
  image,
  index,
  onClick,
  title,
}: ListCardProps) => (
  <ImageListItem
    className={`hover:cursor-pointer ${containerClassName}`}
    onClick={() => onClick(index + 1)}
  >
    <div className="absolute bg-black bg-opacity-50 left-5 rounded-sm text-white top-5">
      {title}
    </div>
    <img src={image} alt={title} className={className} />
  </ImageListItem>
)
