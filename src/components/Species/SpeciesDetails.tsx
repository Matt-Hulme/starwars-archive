import { useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'

export const SpeciesDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { speciesDetailsData } = useGetSpeciesDetailsQuery(id)
  const { name } = speciesDetailsData ?? {}
  const speciesImage = `/assets/images/species/${id}.jpg`

  console.log('speciesDetailsData:', speciesDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader image={speciesImage} name={name ?? ''} />
        <section className="bg-gray-100">Species Characters</section>
        <section className="bg-gray-100">Species Films</section>
      </div>
    </div>
  )
}
