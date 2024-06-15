import { HomeCard } from './HomeCard'

export const Home = () => (
  <div className="bg-fit bg-fixed bg-star-background flex flex-col items-center min-h-screen px-10">
    <div className="flex flex-col gap-1 min-h-[500px] max-w-[400px] md:grid md:grid-cols-2 mx-auto md:grid-rows-3 pb-5 pt-[104px] lg:flex lg:flex-row lg:min-h-screen w-full md:max-w-[750px] lg:max-w-[2000px]">
      <div className=" h-[400px] lg:min-h-full lg:flex-1 lg:h-auto">
        <HomeCard title="Characters">
          <img alt='Characters' className="absolute h-full object-cover w-full" src='assets/images/characters/4.jpg' />
        </HomeCard>
      </div>
      <div className=" h-[400px] lg:min-h-full lg:flex-1 lg:h-auto">
        <HomeCard title="Films">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/films/2.jpg' />
        </HomeCard>
      </div>
      <div className=" h-[400px] lg:min-h-full lg:flex-1 lg:h-auto">
        <HomeCard title="Planets">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/planets/4.jpg' />
        </HomeCard>
      </div>
      <div className=" h-[400px] lg:min-h-full lg:flex-1 lg:h-auto">
        <HomeCard title="Species">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/species/3.jpg' />
        </HomeCard>
      </div>
      <div className=" h-[400px] lg:min-h-full lg:flex-1 lg:h-auto">
        <HomeCard title="Starships">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/starships/10.jpg' />
        </HomeCard>
      </div>
      <div className=" h-[400px] lg:min-h-full lg:flex-1 lg:h-auto">
        <HomeCard title="Vehicles">
          <img alt='Films' className="absolute h-full object-cover w-full" src='assets/images/vehicles/19.jpg' />
        </HomeCard>
      </div>
    </div>
  </div>
)
