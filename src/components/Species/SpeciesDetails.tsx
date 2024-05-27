import { useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'

export const SpeciesDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { speciesDetailsData } = useGetSpeciesDetailsQuery(id)

  console.log('speciesDetailsData:', speciesDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <header className="bg-gray-100">Species Header</header>
        <section className="bg-gray-100">Species Characters</section>
        <section className="bg-gray-100">Species Films</section>
      </div>
    </div>
  )
}
