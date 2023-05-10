"use client";

import { SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#3D5AB8] to-[#284AA6] min-h-screen flex flex-col items-center justify-center text-slate-300">
      <Image
        className="animate-bounce"
        src={
          "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        }
        alt={"Güneş"}
        width={96}
        height={96}
      />
      <h1 className="text-4xl font-bold text-center mb-10 animate-pulse">
        Hava Durumu Bilgisi Yükleniyor
      </h1>
      <h2 className="text-lg font-bold text-center mb-10 animate-pulse">
        Yapay zeka, hava durumu sunumunu hazırlarken lütfen bekleyin...
      </h2>
    </div>
  );
}

export default Loading;
