import React from "react";

interface DetailSurahProps {
  detailSurah: Surah;
}

export default function DetailSurahList({ detailSurah }: DetailSurahProps) {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <div className="flex flex-col justify-center m-2">
        <h1>{detailSurah.name}</h1>
        <h1>{detailSurah.translation}</h1>
        <h2> juz {detailSurah.ayahs[1].meta.juz}</h2>
        {detailSurah.ayahs.map((ayah) => (
          <div key={ayah.number.inQuran}>
            <div className="p-2 border rounded-lg ">
              <h2 className="flex font-bold text-xl">
                <span className="bg-yellow-500 bg-opacity-40 flex justify-start  w-fit rounded-full left-0 top-0 ">
                  {ayah.number.inSurah}
                </span>
              </h2>
              <p className="text-right text-3xl font-serif mb-2">{ayah.arab}</p>
              <p className="text-sm italic">{ayah.translation}</p>
              <audio
                className="w-full h-8 mt-2 opacity-70 rounded-lg border-none"
                controls
              >
                <source src={ayah.audio.alafasy} type="audio/mpeg" />
                Browser kamu tidak support untuk mpeg
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
