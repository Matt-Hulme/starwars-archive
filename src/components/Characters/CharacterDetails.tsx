import { useParams, useSearchParams } from 'react-router-dom'
import { startCase } from 'lodash'
import { useGetCharacterDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'
import { DetailsHeaderPanel } from '../common/DetailsHeader/DetailsHeaderPanel'
import { getFormattedId, getNameForUrl } from '../utils'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'
import { LoadingPage } from '../common'

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
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="space-y-5 overflow-x-hidden">
        <DetailsHeader
          classNames="min-h-[400px] md:min-h-[300px] md:min-w-[225px] lg:min-h-[400px] lg:min-w-[280px]"
          image={characterImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel variant="light" panelContent={panelContentA} />
            <DetailsHeaderPanel variant="dark" panelContent={panelContentB} />
          </div>
        </DetailsHeader>
        <section className="bg-gray-100">Character Films</section>
        <section className="bg-gray-100">Character Vehicles</section>
        <section className="bg-gray-100">Character Starships</section>
      </div>
    </div>
  )
}
