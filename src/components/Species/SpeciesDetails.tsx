import { useParams, useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'
import { LoadingPage } from '../common'

export const SpeciesDetails = () => {
  const { name: urlName } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    speciesDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetSpeciesDetailsQuery(id)
  const { name } = speciesDetailsData ?? {}
  const speciesImage = `/assets/images/species/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('speciesDetailsData:', speciesDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Species" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader
          classNames="min-h-[400px] md:min-h-[300px] md:min-w-[225px] lg:min-h-[400px] lg:min-w-[280px]"
          image={speciesImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Species Characters</section>
        <section className="bg-gray-100">Species Films</section>
      </div>
    </div>
  )
}
