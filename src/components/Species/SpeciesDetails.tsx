import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetSpeciesDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl, getSpeciesPanelAContent, getSpeciesPanelBContent } from '../../utils'

export const SpeciesDetails = () => {
  const navigate = useNavigate()
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
    <div className="bg-cover bg-fixed bg-star-background flex flex-col min-h-[100dvh] pb-10 pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-10 w-full">
        <DetailsHeader
          classNames="h-[300px] min-w-[225px] lg:min-h-[400px] lg:min-w-[280px]"
          image={speciesImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            {<DetailsHeaderPanel panelContent={getSpeciesPanelAContent(speciesDetailsData)} variant="light" />}
            {<DetailsHeaderPanel panelContent={getSpeciesPanelBContent(speciesDetailsData)} variant="dark" />}
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
                    containerClassNames='min-h-[280px] min-w-[200px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {navigate(`/characters/${getNameForUrl(title)}?id=${id}`)}}
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
                    containerClassNames='min-h-[280px] min-w-[200px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {navigate(`/films/${getNameForUrl(title)}?id=${id}`)}}
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
