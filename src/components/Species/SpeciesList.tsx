import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllSpeciesQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage, LoadingPage } from '../common'

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

  console.log('speciesData:', speciesData)

  if (isLoading) return <LoadingPage />

  if (hasError) return <ErrorPage type="Species data" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
      <div className="gap-1 grid max-w-[2000px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] pt-[104px] rounded-lg w-full">
        {(speciesData?.species ?? []).map((species, index) => {
          const name = species?.name ?? ''
          const id = getFormattedId(species?.id ?? '')
          const image = `assets/images/species/${id}.jpg`

          return (
            <ListCard
              classNames="rounded-lg absolute inset-0"
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
  )
}
