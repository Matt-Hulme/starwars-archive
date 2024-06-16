import { HomeCard } from './HomeCard'

export const Home = () => (
  <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
    <div className="flex flex-col gap-1 group max-w-[400px] min-h-[500px] mx-auto pb-5 pt-[104px] w-full md:grid md:grid-cols-2 md:grid-rows-3 md:max-w-[750px] lg:flex lg:flex-row lg:max-w-[2000px] lg:min-h-screen">
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Characters">
          <img alt='Characters' className="block h-full inset-0 object-cover w-full" src='assets/images/characters/4.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Films">
          <img alt='Films' className="block h-full inset-0 object-cover w-full" src='assets/images/films/2.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Planets">
          <img alt='Films' className="block h-full inset-0 object-cover w-full" src='assets/images/planets/4.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Species">
          <img alt='Films' className="block h-full inset-0 object-cover w-full" src='assets/images/species/3.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Starships">
          <img alt='Films' className="block h-full inset-0 object-cover w-full" src='assets/images/starships/10.jpg' />
        </HomeCard>
      </div>
      <div className="duration-200 h-[400px] transition lg:flex-1 lg:h-auto lg:min-h-full group-hover:brightness-50 hover:!brightness-100">
        <HomeCard title="Vehicles">
          <img alt='Films' className="block h-full inset-0 object-cover w-full" src='assets/images/vehicles/19.jpg' />
        </HomeCard>
      </div>
    </div>
  </div>
)
