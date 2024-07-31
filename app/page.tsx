import Image from "next/image";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature/Temperature";
import AirPollution from "./components/AirPollution/AirPollution";
import Sunset from "./components/Sunset/Sunset";
import Wind from "./components/Wind/Wind";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import UvIndex from "./components/UvIndex/UvIndex";
import Population from "./components/Population/Population";
import MobileNavbar from "./components/MobileNavBar";
import FeelsLike from "./components/FeelsLike/FeelsLike";
import Humidity from "./components/Humidity/Humidity";
import Visibility from "./components/Visibility/Visibility";

export default function Home() {
  return (
    <main className=" mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <div className="hidden xl:flex">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div className ="pb-4 flex flex-col gap-4 md:flex-row">
        <div className= "flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
          </div>
        </div>
      </div>
    </main>
  );
}
