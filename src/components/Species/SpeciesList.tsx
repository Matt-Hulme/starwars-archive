import { ImageList } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ListCard } from '../common/ListCard'
import { useGetAllSpeciesQuery } from './hooks'
import { getFormattedId, getNameForUrl } from '../utils'
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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10">
      <div className="block pt-[104px] rounded-lg md:hidden">
        <ImageList cols={1}>
          {(speciesData?.species ?? []).map((species, index) => {
            const name = species?.name ?? ''
            const id = getFormattedId(species?.id ?? '')
            const image = `assets/images/species/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg md:block lg:hidden">
        <ImageList cols={3}>
          {(speciesData?.species ?? []).map((species, index) => {
            const name = species?.name ?? ''
            const id = getFormattedId(species?.id ?? '')
            const image = `assets/images/species/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
      <div className="hidden pt-[104px] rounded-lg lg:block">
        <ImageList cols={5}>
          {(speciesData?.species ?? []).map((species, index) => {
            const name = species?.name ?? ''
            const id = getFormattedId(species?.id ?? '')
            const image = `assets/images/species/${id}.jpg`

            return (
              <ListCard
                key={index}
                className="rounded-lg"
                containerClassName="relative"
                id={id}
                image={image}
                onClick={() => onClick(name, id)}
                title={name}
              />
            )
          })}
        </ImageList>
      </div>
    </div>
  )
}
