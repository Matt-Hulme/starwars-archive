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
    className={containerClassName}
    key={index}
    onClick={() => onClick(index + 1)}
  >
    <div className="absolute top-5 left-5 p- bg-black bg-opacity-50 text-white">
      {title}
    </div>
    <img src={image} alt={title} className={className} />
  </ImageListItem>
)
