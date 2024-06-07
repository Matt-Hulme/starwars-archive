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
    <header className="flex flex-col lg:flex-row gap-4">
      <div
        className={`max-h-full overflow-hidden relative flex justify-center items-center ${classNames}`}
      >
        <img
          alt={name ?? ''}
          className="lg:absolute h-full object-cover inset-0 rounded-lg"
          src={image}
        />
      </div>
      <div className="space-y-3">
        <div>
          <Typography
            className="text-[#ffbe00] text-center lg:hidden"
            variant="h3"
          >
            {name}
          </Typography>
          <Typography
            className="hidden line-clamp-1 relative right-20 text-[#ffbe00] lg:block"
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
