import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetFilmDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFilmPanelAContent, getFormattedId, getNameForUrl } from '../../utils'

export const FilmDetails = () => {
  const navigate = useNavigate()
  const { name: urlTitle } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    filmDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetFilmDetailsQuery(id)
  const title = filmDetailsData?.title ?? ''
  const filmImage = `/assets/images/films/${id}.jpg`

  useEffect(() => {
    if (title && urlTitle !== getNameForUrl(title)) {
      setNameError(true)
    }
  }, [title, urlTitle])

  console.log('filmDetailsData::', filmDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Film" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-[100dvh] pb-10 pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-10 w-full">
        <DetailsHeader
          classNames="h-[400px] lg:min-h-[400px] lg:min-w-[280px]"
          image={filmImage}
          name={title ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={getFilmPanelAContent(filmDetailsData)} variant="light" />
          </div>
        </DetailsHeader>
        {(filmDetailsData?.characterConnection?.characters?.length ??
          0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Characters'
            >
              {filmDetailsData?.characterConnection?.characters?.map(
                (character, index) => {
                  const title = character?.name ?? ''
                  const id = getFormattedId(character?.id ?? '')
                  const image = `/assets/images/characters/${id}.jpg`

                  return (
                    <ListCard                    
                      classNames="absolute inset-0 z--1"
                      containerClassNames="min-h-[280px] min-w-[200px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {navigate(`/characters/${getNameForUrl(title)}?id=${id}`)}}
                    />
                  )
                },
              )}
            </HorizontalScroller>
          </section>
        )}
        {(filmDetailsData?.planetConnection?.planets?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Planets'
            >
              {filmDetailsData?.planetConnection?.planets?.map(
                (planet, index) => {
                  const title = planet?.name ?? ''
                  const id = getFormattedId(planet?.id ?? '')
                  const image = `/assets/images/planets/${id}.jpg`

                  return (
                    <ListCard
                      classNames="absolute inset-0"
                      containerClassNames="min-h-[280px] min-w-[280px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {navigate(`/planets/${getNameForUrl(title)}?id=${id}`)}}
                    />
                  )
                },
              )}
            </HorizontalScroller>
          </section>
        )}
        {(filmDetailsData?.speciesConnection?.species?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Species'
            >
              {filmDetailsData?.speciesConnection?.species?.map(
                (species, index) => {
                  const title = species?.name ?? ''
                  const id = getFormattedId(species?.id ?? '')
                  const image = `/assets/images/species/${id}.jpg`

                  return (
                    <ListCard
                      classNames="absolute inset-0"
                      containerClassNames="min-h-[280px] min-w-[200px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {navigate(`/species/${getNameForUrl(title)}?id=${id}`)}}
                    />
                  )
                },
              )}
            </HorizontalScroller>
          </section>
        )}
        {(filmDetailsData?.vehicleConnection?.vehicles?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Vehicles'
            >
              {filmDetailsData?.vehicleConnection?.vehicles?.map(
                (vehicle, index) => {
                  const title = vehicle?.name ?? ''
                  const id = getFormattedId(vehicle?.id ?? '')
                  const image = `/assets/images/vehicles/${id}.jpg`

                  return (
                    <ListCard
                      classNames="absolute inset-0"
                      containerClassNames="min-h-[200px] min-w-[280px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {navigate(`/vehicles/${getNameForUrl(title)}?id=${id}`)}}
                    />
                  )
                },
              )}
            </HorizontalScroller>
          </section>
        )}
        {(filmDetailsData?.starshipConnection?.starships?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Starships'
            >
              {filmDetailsData?.starshipConnection?.starships?.map(
                (starship, index) => {
                  const title = starship?.name ?? ''
                  const id = getFormattedId(starship?.id ?? '')
                  const image = `/assets/images/starships/${id}.jpg`

                  return (
                    <ListCard
                      classNames="absolute inset-0"
                      containerClassNames="min-h-[200px] min-w-[280px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {navigate(`/starships/${getNameForUrl(title)}?id=${id}`)}}
                    />
                  )
                },
              )}
            </HorizontalScroller>
          </section>
        )}
      </div>
    </div>
  )
}
