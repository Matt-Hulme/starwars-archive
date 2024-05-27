import { useSearchParams } from 'react-router-dom'
import { useGetCharacterDetailsQuery } from './hooks'

export const CharacterDetails = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { characterDetailsData } = useGetCharacterDetailsQuery(id)

  console.log('characterDetailsData:', characterDetailsData)

  return (
    <div className="bg-fit bg-fixed bg-star-background flex flex-col min-h-screen px-10 pt-[104px]">
      <div className="w-full space-y-5">
        <header className="bg-gray-100">Character Header</header>
        <section className="bg-gray-100">Character Films</section>
        <section className="bg-gray-100">Character Vehicles</section>
        <section className="bg-gray-100">Character Starships</section>
      </div>
    </div>
  )
}
