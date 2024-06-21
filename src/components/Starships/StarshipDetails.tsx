import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetStarshipDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl, getStarshipPanelAContent, getStarshipPanelBContent } from '../../utils'

export const StarshipDetails = () => {
  const navigate = useNavigate()
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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-[100dvh] pb-10 pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-10 w-full">
        <DetailsHeader
          classNames="h-[225px] lg:min-h-[280px] lg:min-w-[400px]"
          image={starshipImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={getStarshipPanelAContent(starshipDetailsData)} variant="light" />
            <DetailsHeaderPanel panelContent={getStarshipPanelBContent(starshipDetailsData)} variant="dark" />
          </div>
        </DetailsHeader>
        {(starshipDetailsData?.pilotConnection?.pilots?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Pilots'
            >
              {starshipDetailsData?.pilotConnection?.pilots?.map((pilot, index) => {
                const title = pilot?.name ?? ''
                const id = getFormattedId(pilot?.id ?? '')
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
        {(starshipDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Films'
            >
              {starshipDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/films/${id}.jpg`

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
