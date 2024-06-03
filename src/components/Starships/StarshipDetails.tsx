import { useParams, useSearchParams } from 'react-router-dom'
import { useGetStarshipDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getNameForUrl } from '../utils'
import { LoadingPage } from '../common'

export const StarshipDetails = () => {
  const { name: urlName } = useParams()
  const [searchparams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchparams.get('id') ?? ''
  const {
    starshipDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetStarshipDetailsQuery(id)
  const name = starshipDetailsData?.name ?? ''
  const starshipImage = `/assets/images/starships/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('starshipDetailsData:', starshipDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Starship" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <DetailsHeader
          classNames="min-w-[400px] md:min-w-[300px] md:min-h-[225px] lg:min-w-[400px] lg:min-h-[280px]"
          image={starshipImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Starship Pilots</section>
        <section className="bg-gray-100">Starship Films</section>
      </div>
    </div>
  )
}
