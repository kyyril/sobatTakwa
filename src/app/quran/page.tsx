import SurahList from "@/components/Surah/SurahList";
import { getSurah } from "@/lib/utils/fetcher";

export default async function Surah() {
  const dataSurah: typeSurahList[] | null = await getSurah();
  return (
    <main className="w-full flex flex-col items-center min-h-screen mt-5 px-2 mx-auto">
      <section className="w-full max-w-7xl flex justify-center items-center flex-col">
        <h1 className="text-center font-sans font-extrabold mt-1 text-3xl md:text-4xl mx-auto max-w-3xl mb-6">
          Baca <span className="text-yellow-400">Al-Qur`an</span>
        </h1>
        <div className="w-full">
          {dataSurah ? (
            <SurahList dataSurah={dataSurah} />
          ) : (
            <p>Failed to load</p>
          )}
        </div>
      </section>
    </main>
  );
}
