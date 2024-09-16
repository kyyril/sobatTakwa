"use client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { UrlJadwalSholat } from "@/lib/utils/fetcher";
import { OptionCities } from "@/lib/optionCities";
import Select from "react-select"; // Import react-select

const Home = () => {
  const [term, setTerm] = useState("Padang");
  const [data, setData] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const prayerTimes = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  // Gunakan efek untuk fetch data berdasarkan term
  useEffect(() => {
    setLoading(true);
    fetch(`${UrlJadwalSholat}${term}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data); // Data sudah di dalam res.data
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [term]);

  if (loading) return <Loading />;

  // Format option yang diterima oleh react-select
  const cityOptions = OptionCities.map((city) => ({
    value: city.label,
    label: city.label,
  }));

  return (
    <div className="h-screen flex flex-col bg-[url('./public/assets/bg-masjid1.jpg')] gap-5 text-[#e3e6e3] bg-cover items-center justify-center">
      <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
        <div className="w-full flex justify-between px-[70px]">
          <div>
            {data && (
              <>
                <div>{data.date.gregorian.weekday.en}</div>
                <div>{data.date.readable}</div>
              </>
            )}
          </div>
          <div>{term}</div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Menggunakan react-select untuk dropdown */}
          <Select
            className="w-[200px] py-2 px-4 rounded-full text-[14px] text-slate-500 focus:shadow-lg outline-none"
            options={cityOptions} // Masukkan daftar kota
            value={cityOptions.find((city) => city.value === term)} // Nilai yang terpilih
            onChange={(selectedOption) =>
              setTerm(selectedOption?.value || "Padang")
            } // Mengubah nilai saat opsi dipilih
            placeholder="Select city" // Placeholder saat belum ada yang dipilih
          />
        </form>
      </div>
      <div>
        <ul className="flex flex-col rounded-xl py-2 w-[200px] bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          {data &&
            prayerTimes.map((p) => (
              <li
                key={p}
                className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2"
              >
                <div>{p}</div>
                <div className="font-bold">{data.timings[p]}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
