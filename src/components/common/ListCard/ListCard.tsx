import { ImageListItem, Typography } from '@mui/material'

interface ListCardProps {
  classNames?: string
  containerClassNames?: string
  image: string
  id: string
  onClick: (id: string) => void
  title: string
  titlePosition?: string
}

export const ListCard = ({
  classNames,
  containerClassNames,
  id,
  image,
  onClick,
  title,
  titlePosition = 'top',
}: ListCardProps) => (
  <ImageListItem
    className={`hover:cursor-pointer ${containerClassNames}`}
    onClick={() => onClick(id)}
  >
    <div className={`absolute bg-[#39302e] bottom-0 left-0 h-fit rounded-md px-1 text-[#ffbe00] z-10 ${titlePosition === 'top' ? 'top-0' : 'bottom-0' }`}>
      {titlePosition ==='top' && 
      <>
        <div className='lg:hidden'>
          <Typography variant='subtitle2'>
            {title}
          </Typography>
        </div>
        <div className='hidden lg:block'>
          <Typography variant='h6'>
            {title}
          </Typography>
        </div>
      </>
      }
      {titlePosition ==='bottom' && 
      <Typography variant='caption'>
        {title}
      </Typography>}
    </div>
    <img alt={title} className={`${classNames}`} src={image} />
  </ImageListItem>
)

