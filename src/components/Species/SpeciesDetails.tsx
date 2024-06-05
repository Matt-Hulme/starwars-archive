import { useParams, useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel } from '../common'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl } from '../../utils'
import { LoadingPage } from '../common'
import { startCase } from 'lodash'

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

  const panelContentA = [
    {
      heading: 'Homeworld',
      content: startCase(speciesDetailsData?.homeworld?.name ?? ''),
      href: `/species/${getNameForUrl(
        speciesDetailsData?.homeworld?.name ?? '',
      )}?id=${getFormattedId(speciesDetailsData?.homeworld?.id ?? '')}`,
    },
    {
      heading: 'Language',
      content: startCase(speciesDetailsData?.language ?? ''),
    },
    {
      heading: 'Designation',
      content: startCase(speciesDetailsData?.designation ?? ''),
    },
  ]

  const panelContentB = [
    {
      heading: 'Avg Height',
      content: startCase(speciesDetailsData?.averageHeight?.toString() ?? ''),
    },
    {
      heading: 'Avg Lifespan',
      content: startCase(speciesDetailsData?.averageLifespan?.toString() ?? ''),
    },
    {
      heading: 'Skin Colors',
      content:
        speciesDetailsData?.skinColors
          ?.map((skinColor: string | null) => startCase(skinColor ?? ''))
          .join(', ') ?? '',
    },
    {
      heading: 'Eye Colors',
      content:
        speciesDetailsData?.eyeColors
          ?.map((eyeColor: string | null) => startCase(eyeColor ?? ''))
          .join(', ') ?? '',
    },
  ]

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Species" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 overflow-x-hidden w-full">
        <DetailsHeader
          classNames="h-[300px] min-w-[225px] lg:min-h-[400px] lg:min-w-[280px]"
          image={speciesImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel variant="light" panelContent={panelContentA} />
            <DetailsHeaderPanel variant="dark" panelContent={panelContentB} />
          </div>
        </DetailsHeader>
        <section className="bg-gray-100">Species Characters</section>
        <section className="bg-gray-100">Species Films</section>
      </div>
    </div>
  )
}
