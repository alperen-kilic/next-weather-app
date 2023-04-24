import { SunIcon } from "@heroicons/react/24/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon className="h-24 w-24 animate-bounce text-yellow-500" />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Hava Durumu Bilgisi Yükleniyor
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Yapay zeka, hava durumu sunumunu hazırlarken lütfen bekleyin...
      </h2>
    </div>
  );
}

export default Loading;
