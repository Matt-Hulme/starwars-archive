import { Typography } from '@mui/material'

interface ErrorPageProps {
  type: string
}

export const ErrorPage = ({ type }: ErrorPageProps) => (
  <div className="bg-fit bg-fixed bg-star-background flex flex-col justify-center min-h-screen pt-[104px] px-10">
    <Typography className="text-[#ffbe00] text-center md:hidden" variant="h4">
      {type} not found
    </Typography>
    <Typography
      className="hidden text-[#ffbe00] text-center md:block lg:hidden"
      variant="h3"
    >
      {type} not found
    </Typography>
    <Typography
      className="hidden text-[#ffbe00] text-center lg:block"
      variant="h2"
    >
      {type} not found
    </Typography>
  </div>
)
