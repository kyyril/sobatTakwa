import React from "react";

interface DetailSurahProps {
  detailSurah: Surah;
}

export default function DetailSurahList({ detailSurah }: DetailSurahProps) {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <div className="flex flex-col justify-center m-2 mx-6">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl text-yellow-400 font-serif font-extrabold">
            {detailSurah.name}
          </h1>
          <h1 className="font-semibold">{detailSurah.translation}</h1>
          <h2 className="flex justify-end w-full">
            <span className="bg-yellow-400 font-serif bg-opacity-10 w-auto rounded-full">
              juz {detailSurah.ayahs[1].meta.juz}
            </span>
          </h2>
        </div>
        {detailSurah.ayahs.map((ayah) => (
          <div key={ayah.number.inQuran}>
            <div className="p-2 border-none ">
              <h2 className="flex font-bold text-sm sticky top-0 z-20">
                <span className="bg-yellow-400 bg-opacity-80 font-serif flex justify-start w-fit rounded-full left-0 top-0 ">
                  {ayah.number.inSurah}
                </span>
              </h2>
              <p className="text-right text-4xl font-serif mb-2">{ayah.arab}</p>
              <audio
                className="w-full h-4 my-2 opacity-70 rounded-lg border-none"
                controls
              >
                <source src={ayah.audio.alafasy} type="audio/mpeg" />
                Browser kamu tidak support untuk mpeg
              </audio>
              <p className="text-sm italic">{ayah.translation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
