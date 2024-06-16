import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetVehicleDetailsQuery } from './hooks'
import { DetailsHeader, DetailsHeaderPanel, ErrorPage, HorizontalScroller, ListCard, LoadingPage } from '../common'
import { useEffect, useState } from 'react'
import { getFormattedId, getNameForUrl, getVehiclePanelAContent, getVehiclePanelBContent } from '../../utils'

export const VehicleDetails = () => {
  const navigate = useNavigate()
  const { name: urlName } = useParams()
  const [searchParams] = useSearchParams()
  const [nameError, setNameError] = useState(false)
  const id = searchParams.get('id') ?? ''
  const {
    vehicleDetailsData,
    error: hasError,
    loading: isLoading,
  } = useGetVehicleDetailsQuery(id)
  const name = vehicleDetailsData?.name ?? ''
  const vehicleImage = `/assets/images/vehicles/${id}.jpg`

  useEffect(() => {
    if (name && urlName !== getNameForUrl(name)) {
      setNameError(true)
    }
  }, [name, urlName])

  console.log('vehicleDetailsData:', vehicleDetailsData)

  if (isLoading) return <LoadingPage />

  if (nameError || hasError) return <ErrorPage type="Vehicle" />

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="overflow-x-hidden space-y-10 w-full">
        <DetailsHeader
          classNames="h-[225px] lg:min-h-[280px] lg:min-w-[400px]"
          image={vehicleImage}
          name={name ?? ''}
        >
          <div className="flex flex-col gap-2 w-full">
            <DetailsHeaderPanel panelContent={getVehiclePanelAContent(vehicleDetailsData)} variant="light" />
            <DetailsHeaderPanel panelContent={getVehiclePanelBContent(vehicleDetailsData)} variant="dark" />
          </div>
        </DetailsHeader>
        {(vehicleDetailsData?.pilotConnection?.pilots?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Pilots'
            >
              {vehicleDetailsData?.pilotConnection?.pilots?.map((pilot, index) => {
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
        {(vehicleDetailsData?.filmConnection?.films?.length ?? 0 > 0) && (
          <section className="bg-[#39302e] max-w-full rounded-lg w-fit">
            <HorizontalScroller
              title='Films'
            >
              {vehicleDetailsData?.filmConnection?.films?.map((film, index) => {
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
