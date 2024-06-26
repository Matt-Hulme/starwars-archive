import { Image } from '../common'
import { HomeCard } from './HomeCard'

export const Home = () => (
  <div className="bg-star-background flex flex-col items-center min-h-[100dvh] px-10">
    <div className="flex flex-col gap-1 group max-w-[400px] min-h-[500px] mx-auto pb-10 pt-[104px] w-full md:grid md:grid-cols-2 md:grid-rows-3 md:max-w-[750px] lg:flex lg:flex-row lg:max-w-[2000px] lg:min-h-[100dvh]">
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Characters">
          <Image alt='Characters' draggable={false}  className="block h-full inset-0 object-cover w-full" src='assets/images/characters/4.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Films">
          <Image alt='Films' draggable={false} className="block h-full inset-0 object-cover w-full" src='assets/images/films/2.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Planets">
          <Image alt='Films' draggable={false} className="block h-full inset-0 object-cover w-full" src='assets/images/planets/4.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Species">
          <Image alt='Films' draggable={false} className="block h-full inset-0 object-cover w-full" src='assets/images/species/3.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Starships">
          <Image alt='Films' draggable={false} className="block h-full inset-0 object-cover w-full" src='assets/images/starships/10.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Vehicles">
          <Image alt='Films' draggable={false} className="block h-full inset-0 object-cover w-full" src='assets/images/vehicles/19.jpg' />
        </HomeCard>
      </div>
    </div>
  </div>
)
