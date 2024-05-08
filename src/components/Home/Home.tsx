import { HomeCard } from "./HomeCard"

export const Home = () => (
  <div className="bg-fit bg-star-background flex flex-col pt-16">
      <div className="grid grid-cols-6 grid-rows-6 h-[calc(100vh-4rem)] min-h-[500px] overflow-y-auto p-10 md:min-h-[450px] lg:flex-row lg:min-h-[150px]">
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard title='Characters'/>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard title='Films' />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard title='Planets'/>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard title='Species' />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard title='Vehicles'/>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard title='Starships'/>
        </div>
      </div>
  </div>
)