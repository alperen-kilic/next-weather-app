import Image from "next/image";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type Props = {
  city: string;
  results: Root;
  lat: string;
  long: string;
};

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#3D5AB8] to-[#284AA6] text-white p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-slate-200 mt-5">
          Long/Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />

      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("tr-TR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="font-extralight">
            Saat Dilimi:{" "}
            {Intl.DateTimeFormat("tr-TR").resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("tr-TR", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </p>
      </div>

      <hr className="mt-10 mb-5" />

      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.svg`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />

          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current_weather.temperature.toFixed(1)}°C
            </p>

            <p className="text-right font-extralight text-lg">
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#3D5AB8] rounded-md bg-[#133A94]">
          <Image
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"
            }
            alt={"Gün Doğumu"}
            width={40}
            height={40}
          />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Gün Doğumu</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("tr-TR", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4 py-3 border border-[#3D5AB8] rounded-md bg-[#133A94]">
          <Image
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/moonrise.svg"
            }
            alt={"Gün Batımı"}
            width={40}
            height={40}
          />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Gün Batımı</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("tr-TR", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
