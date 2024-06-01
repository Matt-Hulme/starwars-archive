import { useSearchParams } from 'react-router-dom'
import { useGetCharacterDetailsQuery } from './hooks'
import { DetailsHeader } from '../common/DetailsHeader'

export const CharacterDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { characterDetailsData } = useGetCharacterDetailsQuery(id)
  const { name } = characterDetailsData ?? {}
  const characterImage = `/assets/images/characters/${id}.jpg`

  console.log('characterDetailsData:', characterDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen pt-[104px] px-10">
      <div className="relative space-y-5 w-full">
        <DetailsHeader
          classNames={'h-[400px] w-[280px] rounded-full'}
          image={characterImage}
          name={name ?? ''}
        />
        <section className="bg-gray-100">Character Films</section>
        <section className="bg-gray-100">Character Vehicles</section>
        <section className="bg-gray-100">Character Starships</section>
      </div>
    </div>
  )
}
