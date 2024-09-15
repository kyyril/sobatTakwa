"use client";
import { useEffect, useState } from "react";

interface PrayerTimesData {
  data: any;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("jakarta");
  const [data, setData] = useState<PrayerTimesData | null>(null);
  const prayerTime = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  useEffect(() => {
    fetch(`https://api.aladhan.com/v1/timingsByAddress?address=${term}`)
      .then((res) => res.json())
      .then((res: PrayerTimesData) => setData(res));
  }, [term]);

  return (
    <div className="h-screen flex flex-col bg-[url('./public/assets/bg-masjid1.jpg')] gap-5 text-[#e3e6e3] bg-cover items-center justify-center">
      <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
        <div className="w-full flex justify-between px-[70px]">
          <div>
            {data && (
              <>
                <div>{data.data.date.gregorian.weekday.en}</div>
                <div>{data.data.date.readable}</div>
              </>
            )}
          </div>
          <div>{term}</div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTerm(input);
            setInput("");
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="search by city"
            className="w-[250px] py-2 px-4 rounded-full text-[14px] text-slate-600 focus:shadow-lg outline-none"
          ></input>
          <input type="submit" value=""></input>
        </form>
      </div>
      <div>
        <ul className="flex flex-col rounded-xl py-2 w-[200px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          {data &&
            prayerTime.map((p) => (
              <li
                key={p}
                className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2"
              >
                <div>{p}</div>
                <div className="font-bold">{data.data.timings[p]}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
