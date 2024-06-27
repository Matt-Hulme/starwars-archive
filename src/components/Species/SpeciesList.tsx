import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllSpeciesQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'
import { Typography } from '@mui/material'

export const SpeciesList = () => {
  const {
    speciesData,
    error: hasError,
    loading: isLoading,
  } = useGetAllSpeciesQuery()
  const navigate = useNavigate()

  const onClick = (name: string, id: string) => {
    navigate(`/species/${getNameForUrl(name)}?id=${id}`)
  }

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Species" />

  return (
    <div className="bg-star-background flex flex-col items-center min-h-[100dvh] pb-10 pt-[88px] px-10">
      <div className="max-w-[2000px] space-y-8 w-full">
        <div className="bg-[#ffbe00] px-1 rounded-md text-[#39302e] w-fit">
          <Typography variant='h4'>
            Species
          </Typography>
        </div>
        <div className="gap-1 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] group">
          {(speciesData?.species ?? []).map((species, index) => {
            const name = species?.name ?? ''
            const id = getFormattedId(species?.id ?? '')
            const image = `assets/images/species/${id}.jpg`

            return (
              <ListCard
                classNames="absolute inset-0 group-hover:brightness-50 hover:!brightness-100 transition duration-200"
                containerClassNames="relative min-h-[400px]"
                id={id}
                image={image}
                key={index}
                title={name}
                onClick={() => onClick(name, id)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
