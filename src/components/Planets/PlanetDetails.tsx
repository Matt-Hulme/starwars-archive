import { useParams, useSearchParams } from 'react-router-dom'
import { useGetPlanetDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'
import { LoadingPage } from '../common'

export const PlanetDetails = () => {
  const { name: urlName } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    planetDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetPlanetDetailsQuery(id)
  const name = planetDetailsData?.name ?? ''
  const planetImage = `/assets/images/planets/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('planetDetailsData:', planetDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Planet" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 w-full">
        <DetailsHeader
          classNames={
            'min-h-[200px] min-w-[200px] md:min-h-[300px] md:min-w-[300px] lg:min-h-[400px] lg:min-w-[400px] rounded-full'
          }
          image={planetImage}
          name={name ?? ''}
        />
        <header className="bg-gray-100">Planet Header</header>
        <section className="bg-gray-100">Planet Characters</section>
        <section className="bg-gray-100">Planet Films</section>
      </div>
    </div>
  )
}
