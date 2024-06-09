import { useParams, useSearchParams } from 'react-router-dom'
import { useGetFilmDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl } from '../../utils'
import { startCase } from 'lodash'

export const FilmDetails = () => {
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

  const panelContentA = [
    {
      heading: 'Director',
      content: startCase(filmDetailsData?.director ?? ''),
    },
    {
      heading: 'Producers',
      content:
        filmDetailsData?.producers
          ?.filter((producer: string | null) => producer !== null)
          .map((producer: string | null) => producer && startCase(producer))
          .join(', ') ?? '',
    },
    {
      heading: 'Release Date',
      content: startCase(filmDetailsData?.releaseDate ?? ''),
    },
  ]

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Film" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pb-10 pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-5 w-full">
        <DetailsHeader
          classNames="h-[400px] lg:min-h-[400px] lg:min-w-[280px]"
          image={filmImage}
          name={title ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={panelContentA} variant="light" />
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
                      containerClassNames="min-h-[260px] min-w-[180px] rounded-lg overflow-hidden relative"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {}}
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
                      containerClassNames="min-h-[260px] min-w-[260px] rounded-lg overflow-hidden relative"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {}}
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
                      containerClassNames="min-h-[260px] min-w-[180px] rounded-lg overflow-hidden relative"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {}}
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
                      containerClassNames="min-h-[180px] min-w-[260px] rounded-lg overflow-hidden relative"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {}}
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
                      containerClassNames="min-h-[180px] min-w-[260px] rounded-lg overflow-hidden relative"
                      id={id}
                      image={image}
                      key={index}
                      title={title}
                      titlePosition='bottom'
                      onClick={() => {}}
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
