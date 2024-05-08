import { HomeCard } from "./HomeCard"

export const Home = () => (
  <div className="bg-fit bg-star-background flex flex-col h-full overflow-y-auto pt-16 w-screen">
      <div className="grid grid-cols-6 grid-rows-6 h-[calc(100vh-16px)] min-h-[450px] p-10 lg:flex-row lg:min-h-[200px]">
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