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
    <div className="w-full flex flex-col gap-4 mt-4">
      <div className="flex justify-center px-4">
        <Input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder="Cari Surah..."
          className="max-w-2xl w-full"
        />
      </div>
      <div className="grid w-full grid-cols-2 gap-1 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataSurah
          .filter((surah) => surah.name.toLowerCase().includes(query))
          .map((surah) => (
            <SurahItem
              key={surah.number}
              query={query}
              number={surah.number}
              name={surah.name}
              translation={surah.translation}
              revelation={surah.revelation}
              numberOfAyahs={surah.numberOfAyahs}
              description={surah.description}
            />
          ))}
      </div>
    </div>
  );
}
