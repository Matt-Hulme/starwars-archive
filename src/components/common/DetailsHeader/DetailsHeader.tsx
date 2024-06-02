import { Typography } from '@mui/material'

interface DetailsHeaderProps {
  classNames?: string
  children?: React.ReactNode
  image: string
  name: string
}

export const DetailsHeader = ({
  classNames,
  children,
  image,
  name,
}: DetailsHeaderProps) => {
  return (
    <header className="flex flex-col gap-3 items-center md:flex-row md:items-start md:justify-center">
      <div className={`overflow-hidden relative ${classNames}`}>
        <img
          className="absolute h-full inset-0 object-cover w-full"
          alt={name ?? ''}
          src={image}
        />
      </div>
      <div>
        <div className="space-y-5 md:hidden">
          <Typography
            className="line-clamp-2 text-[#ffbe00] text-center"
            variant="h4"
          >
            {name}
          </Typography>
          {children}
        </div>
        <div className="space-y-3 hidden md:block lg:hidden">
          <Typography
            className="line-clamp-2 relative right-20 text-[#ffbe00]"
            variant="h3"
          >
            {name}
          </Typography>
          {children}
        </div>
        <div className="space-y-3 hidden lg:block">
          <Typography
            className="line-clamp-2 relative right-20 text-[#ffbe00]"
            variant="h2"
          >
            {name}
          </Typography>
          {children}
        </div>
      </div>
    </header>
  )
}
