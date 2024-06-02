import { Skeleton } from '@mui/material'

export const LoadingPage = () => (
  <div className="bg-fit bg-fixed bg-star-background flex flex-col justify-center items-center min-h-screen pt-[104px] px-10">
    <div className="bg-white bg-opacity-50">
      <Skeleton variant="rounded" height={60} width={60} />
    </div>
  </div>
)
