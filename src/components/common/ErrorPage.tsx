import { Typography } from '@mui/material'

interface ErrorPageProps {
  type: string
}

export const ErrorPage = ({ type }: ErrorPageProps) => (
  <div className="bg-fit bg-fixed bg-star-background min-h-[100dvh] pt-[104px] px-10">
    <div className="pt-[30vh] text-center md:hidden">
      <Typography className="text-[#ffbe00]" variant="h4">
        {type} not found
      </Typography>
    </div>
    <div className="pt-[30vh] hidden text-center md:block lg:hidden">
      <Typography className="text-[#ffbe00]" variant="h3">
        {type} not found
      </Typography>
    </div>
    <div className="pt-[30vh] hidden items-center text-center lg:block">
      <Typography className="text-[#ffbe00]" variant="h2">
        {type} not found
      </Typography>
    </div>
  </div>
)
