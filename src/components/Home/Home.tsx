import { HomeCard } from './HomeCard'

export const Home = () => (
  <div className="bg-fit bg-star-background flex flex-col min-h-screen px-10">
    <div className="gap-1 grid grid-cols-6 grid-rows-6 h-screen min-h-[500px] overflow-y-auto pb-5 pt-[104px] lg:flex-row">
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Characters">
          <img alt='Characters' className="absolute h-full object-cover w-full" src='assets/images/characters/4.jpg' />
        </HomeCard>
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Films">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/films/2.jpg' />
        </HomeCard>
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Planets">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/planets/4.jpg' />
        </HomeCard>
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Species">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/species/3.jpg' />
        </HomeCard>
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Starships">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/starships/10.jpg' />
        </HomeCard>
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Vehicles">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/vehicles/7.jpg' />
        </HomeCard>
      </div>
    </div>
  </div>
)
