import SurahList from "@/components/SurahList";

import { UrlSurah } from "@/lib/constans";

async function getSurah(): Promise<typeSurahList[] | null> {
  const url = new URL(`${UrlSurah}`);
  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch Surah: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Surah:", error);
    return null;
  }
}

export default async function Surah() {
  const dataSurah: typeSurahList[] | null = await getSurah();
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-3xl flex justify-center items-center flex-col">
        <h1 className="m-2 text-center font-sans font-extrabold text-4xl">
          Baca <span className="text-yellow-500">Al-Qur`an</span>
        </h1>
        <div>
          {dataSurah ? (
            <SurahList dataSurah={dataSurah} />
          ) : (
            <p>Failed to load Doa.</p>
          )}
        </div>
      </section>
    </main>
  );
}
