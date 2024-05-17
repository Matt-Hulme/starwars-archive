import { HomeCard } from './HomeCard'

export const Home = () => (
  <div className="bg-fit bg-star-background flex flex-col min-h-screen px-10">
    <div className="grid grid-cols-6 grid-rows-6 h-screen min-h-[500px] overflow-y-auto pt-[104px] lg:flex-row">
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Characters" />
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Films" />
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Planets" />
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Species" />
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Starships" />
      </div>
      <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
        <HomeCard title="Vehicles" />
      </div>
    </div>
  </div>
)
