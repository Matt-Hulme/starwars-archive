import { useParams, useSearchParams } from 'react-router-dom'
import { startCase } from 'lodash'
import { useGetCharacterDetailsQuery } from './hooks'
import {
  DetailsHeader,
  DetailsHeaderPanel,
  HorizontalScroller,
  ListCard,
  LoadingPage,
} from '../common'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'

export const CharacterDetails = () => {
  const { name: urlName } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    characterDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetCharacterDetailsQuery(id)
  const name = characterDetailsData?.name ?? ''
  const characterImage = `/assets/images/characters/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  const panelContentA = [
    {
      heading: 'Species',
      content: startCase(characterDetailsData?.species?.name ?? ''),
      href: `/species/${getNameForUrl(
        characterDetailsData?.species?.name ?? '',
      )}?id=${getFormattedId(characterDetailsData?.species?.id ?? '')}`,
    },
    {
      heading: 'Homeworld',
      content: startCase(characterDetailsData?.homeworld?.name ?? ''),
      href: `/planets/${getNameForUrl(
        characterDetailsData?.homeworld?.name ?? '',
      )}?id=${getFormattedId(characterDetailsData?.homeworld?.id ?? '')}`,
    },
    {
      heading: 'Birth Year',
      content: startCase(characterDetailsData?.birthYear?.toString() ?? ''),
    },
    {
      heading: 'Gender',
      content: startCase(characterDetailsData?.gender ?? ''),
    },
  ]

  const panelContentB = [
    {
      heading: 'Height',
      content: characterDetailsData?.height?.toString() ?? '',
    },
    {
      heading: 'Mass',
      content: characterDetailsData?.mass?.toString() ?? '',
    },
    {
      heading: 'Hair Color',
      content: startCase(characterDetailsData?.hairColor ?? ''),
    },
    {
      heading: 'Eye Color',
      content: startCase(characterDetailsData?.eyeColor ?? ''),
    },
  ]

  console.log('characterDetailsData:', characterDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Character" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen overflow-y-auto pb-10 pt-[104px] px-10">
      <div className="overflow-hidden space-y-5">
        <DetailsHeader
          classNames="h-[300px] lg:min-h-[400px] lg:min-w-[280px]"
          image={characterImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={panelContentA} variant="light" />
            <DetailsHeaderPanel panelContent={panelContentB} variant="dark" />
          </div>
        </DetailsHeader>
        {(characterDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Films'
            >
              {characterDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/films/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0'
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
        {(characterDetailsData?.vehicleConnection?.vehicles?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Vehicles'
            >
              {characterDetailsData?.vehicleConnection?.vehicles?.map((vehicle, index) => {
                const title = vehicle?.name ?? ''
                const id = getFormattedId(vehicle?.id ?? '')
                const image = `/assets/images/vehicles/${id}.jpg`
                
                return (
                  <ListCard 
                    classNames='absolute inset-0'
                    containerClassNames='min-h-[180px] min-w-[260px] rounded-lg overflow-hidden relative'
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
        {(characterDetailsData?.starshipConnection?.starships?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Starships'
            >
              {characterDetailsData?.starshipConnection?.starships?.map((starship, index) => {
                const title = starship?.name ?? ''
                const id = getFormattedId(starship?.id ?? '')
                const image = `/assets/images/starships/${id}.jpg`

                return (
                  <ListCard 
                    classNames='absolute inset-0'
                    containerClassNames='min-h-[180px] min-w-[260px] rounded-lg overflow-hidden relative'
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
