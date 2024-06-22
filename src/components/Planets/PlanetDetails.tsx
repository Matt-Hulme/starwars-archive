import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetPlanetDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl, getPlanetPanelAContent, getPlanetPanelBContent } from '../../utils'

export const PlanetDetails = () => {
  const navigate = useNavigate()
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
    <div className="bg-cover bg-fixed bg-star-background flex flex-col min-h-[100dvh] pb-10 pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-10 w-full">
        <DetailsHeader
          classNames="h-[300px] lg:min-h-[275px] lg:min-w-[275px]"
          image={planetImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={getPlanetPanelAContent(planetDetailsData)} variant="light" />
            <DetailsHeaderPanel panelContent={getPlanetPanelBContent(planetDetailsData)} variant="dark" />
          </div>
        </DetailsHeader>
        {(planetDetailsData?.residentConnection?.residents?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Characters'
            >
              {planetDetailsData?.residentConnection?.residents?.map((resident, index) => {
                const title = resident?.name ?? ''
                const id = getFormattedId(resident?.id ?? '')
                const image = `/assets/images/characters/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0'
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
        {(planetDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title="Films"
            >
              {planetDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/films/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0'
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
