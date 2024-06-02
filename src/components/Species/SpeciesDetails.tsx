import { useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'

export const SpeciesDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { speciesDetailsData, error: hasError } = useGetSpeciesDetailsQuery(id)
  const { name } = speciesDetailsData ?? {}
  const speciesImage = `/assets/images/species/${id}.jpg`

  console.log('speciesDetailsData:', speciesDetailsData)

  if (hasError) return <ErrorPage type="Species" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader
          classNames="min-h-[200px] min-w-[150px] md:min-h-[300px] md:min-w-[225px] lg:min-h-[400px] lg:min-w-[280px] rounded-full"
          image={speciesImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Species Characters</section>
        <section className="bg-gray-100">Species Films</section>
      </div>
    </div>
  )
}
