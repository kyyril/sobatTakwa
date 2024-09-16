"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import SurahItem from "./SurahItem";

interface SurahListProps {
  dataSurah: typeSurahList[];
}

export default function SurahList({ dataSurah }: SurahListProps) {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex justify-center mx-20">
        <Input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari Surah"
        />
      </div>
      <div className="grid w-screen grid-cols-1 grid-rows-1 px-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dataSurah
          .filter((surah) => surah.name.toLocaleLowerCase().includes(query))
          .map(
            (
              surah //surah.surah judul surah
            ) => (
              <div key={surah.number}>
                {/* Pass the relevant data to surahItem */}
                <SurahItem
                  number={surah.number}
                  name={surah.name}
                  translation={surah.translation}
                  revelation={surah.revelation}
                  numberOfAyahs={surah.numberOfAyahs}
                  description={surah.description}
                />
              </div>
            )
          )}
      </div>
    </div>
  );
}
