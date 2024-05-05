import { HomeCard } from "./HomeCard"

export const Home = () => (
  <div className="bg-fit bg-star-background flex flex-col h-screen justify-center overflow-hidden py-6 w-screen">
    <div className="flex-grow space-y-10">
      <div className="bg-white w-full">NavBar</div>
      <div className="grid grid-cols-6 grid-rows-6 h-full px-20">
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard />
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-2 lg:col-span-1 lg:row-span-6">
          <HomeCard />
        </div>
      </div>
    </div>
  </div>
)