import { useParams, useSearchParams } from 'react-router-dom'
import { startCase } from 'lodash'
import { useGetCharacterDetailsQuery } from './hooks'
import {
  DetailsHeader,
  DetailsHeaderPanel,
  HorizontalScroller,
} from '../common'
import { getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { LoadingPage } from '../common'
import { ListCard } from '../common/ListCard'

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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] pb-10 px-10 overflow-y-auto">
      <div className="space-y-5 overflow-hidden">
        <DetailsHeader
          classNames="h-[300px] lg:min-h-[400px] lg:min-w-[280px]"
          image={characterImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel variant="light" panelContent={panelContentA} />
            <DetailsHeaderPanel variant="dark" panelContent={panelContentB} />
          </div>
        </DetailsHeader>
        {(characterDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] rounded-lg w-fit max-w-full">
            <HorizontalScroller>
              {characterDetailsData?.filmConnection?.films?.map((film, index) => {
                const title = film?.title ?? ''
                const id = getFormattedId(film?.id ?? '')
                const image = `/assets/images/films/${id}.jpg`

                return (
                  <ListCard key={index} title={title} id={id} onClick={() => {}} image={image} containerClassName='flex-none min-w-64 relative h-[400px] min-h-[400px]' className='absolute inset-0 object-cover'/>
                )
              })}
            </HorizontalScroller>
          </section>
        )}
        {(characterDetailsData?.vehicleConnection?.vehicles?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] rounded-lg w-fit max-w-full">
            <HorizontalScroller>
              {characterDetailsData?.vehicleConnection?.vehicles?.map((vehicle, index) => {
                const title = vehicle?.name ?? ''
                const id = getFormattedId(vehicle?.id ?? '')
                const image = `/assets/images/vehicles/${id}.jpg`

                return (
                  <ListCard key={index} title={title} id={id} onClick={() => {}} image={image} containerClassName='flex-none min-w-64 relative h-[400px] min-h-[400px]' className='absolute inset-0 object-cover'/>
                )
              })}
            </HorizontalScroller>
          </section>
        )}
        {(characterDetailsData?.starshipConnection?.starships?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] rounded-lg w-fit max-w-full">
            <HorizontalScroller>
              {characterDetailsData?.starshipConnection?.starships?.map((starship, index) => {
                const title = starship?.name ?? ''
                const id = getFormattedId(starship?.id ?? '')
                const image = `/assets/images/starships/${id}.jpg`

                return (
                  <ListCard key={index} title={title} id={id} onClick={() => {}} image={image} containerClassName='flex-none min-w-64 relative h-[400px] min-h-[400px]' className='absolute inset-0 object-cover'/>
                )
              })}
            </HorizontalScroller>
          </section>
        )}
      </div>
    </div>
  )
}
