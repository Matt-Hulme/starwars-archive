import Loader from 'react-loaders'

export const LoadingPage = () => (
  <div className="bg-cover bg-fixed bg-star-background flex flex-col items-center min-h-[100dvh] pt-[104px] px-10">
    <div className="pt-[30vh]">
      <Loader type="ball-pulse-sync" active />
    </div>
  </div>
)
