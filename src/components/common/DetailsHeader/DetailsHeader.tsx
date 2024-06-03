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
    <header className="flex flex-col md:flex-row gap-4">
      <div
        className={`max-h-full overflow-hidden relative flex justify-center items-center ${classNames}`}
      >
        <img
          className="md:absolute h-full inset-0 rounded-lg"
          alt={name ?? ''}
          src={image}
        />
      </div>
      <div className="space-y-3">
        <div>
          <Typography
            className="text-[#ffbe00] text-center md:hidden"
            variant="h3"
          >
            {name}
          </Typography>
          <Typography
            className="hidden line-clamp-1 text-[#ffbe00] relative right-20 md:block lg:hidden"
            variant="h3"
          >
            {name}
          </Typography>
          <Typography
            className="hidden line-clamp-1 text-[#ffbe00] relative right-20 lg:block"
            variant="h2"
          >
            {name}
          </Typography>
        </div>
        {children}
      </div>
    </header>
  )
}
