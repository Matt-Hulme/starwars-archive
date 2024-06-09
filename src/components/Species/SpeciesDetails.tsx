import { useParams, useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl } from '../../utils'
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
            <DetailsHeaderPanel panelContent={panelContentA} variant="light" />
            <DetailsHeaderPanel panelContent={panelContentB} variant="dark" />
          </div>
        </DetailsHeader>
        {(speciesDetailsData?.personConnection?.people?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Characters'
            >
              {speciesDetailsData?.personConnection?.people?.map((person, index) => {
                const title = person?.name ?? ''
                const id = getFormattedId(person?.id ?? '')
                const image = `/assets/images/characters/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0 z--1'
                    containerClassNames='min-h-[260px] min-w-[180px] rounded-lg overflow-hidden relative'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {}}
                  />
                )
              })}
            </HorizontalScroller>
          </section>
        )}
        {(speciesDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Films'
            >
              {speciesDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/characters/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0 z--1'
                    containerClassNames='min-h-[260px] min-w-[180px] rounded-lg overflow-hidden relative'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {}}
                  />
                )
              })}
            </HorizontalScroller>
          </section>
        )}
      </div>
    </div>
  )
}
