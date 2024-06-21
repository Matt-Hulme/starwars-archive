import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetCharacterDetailsQuery } from './hooks'
import {
  DetailsHeader,
  DetailsHeaderPanel,
  HorizontalScroller,
  ListCard,
  LoadingPage,
} from '../common'
import { getCharacterPanelAContent, getCharacterPanelBContent, getFormattedId, getNameForUrl } from '../../utils'
import { ErrorPage } from '../common/ErrorPage'
import { useEffect, useState } from 'react'

export const CharacterDetails = () => {
  const navigate = useNavigate()
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


  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Character" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-[100dvh] overflow-y-auto pb-10 pt-[104px] px-10">
      <div className="overflow-hidden space-y-10">
        <DetailsHeader
          classNames="h-[300px] lg:min-h-[400px] lg:min-w-[280px]"
          image={characterImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={getCharacterPanelAContent(characterDetailsData)} variant="light" />
            <DetailsHeaderPanel panelContent={getCharacterPanelBContent(characterDetailsData)} variant="dark" />
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
                    containerClassNames='min-h-[200px] min-w-[280px]  overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {navigate(`/vehicles/${getNameForUrl(title)}?id=${id}`)}}
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
                    containerClassNames='min-h-[200px] min-w-[280px] overflow-hidden relative group-hover/horizontalScroller:brightness-50 hover/horizontalScroller:!brightness-100 transition duration-200'
                    id={id}
                    image={image}
                    key={index}
                    title={title}
                    titlePosition='bottom'
                    onClick={() => {{navigate(`/starships/${getNameForUrl(title)}?id=${id}`)}}}
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
