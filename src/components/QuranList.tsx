"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import QuranItem from "./QuranItem";
// Define props for DoaList to include typing for dataDoa

export default function QuranList() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex justify-center mx-20">
        <Input placeholder="Cari Surah" />
      </div>
      <div className="grid w-screen grid-cols-1 grid-rows-1 px-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <QuranItem />
        <QuranItem />
        <QuranItem />
        <QuranItem />
        <QuranItem />
        <QuranItem />
        <QuranItem />
        <QuranItem />
      </div>
    </div>
  );
}
