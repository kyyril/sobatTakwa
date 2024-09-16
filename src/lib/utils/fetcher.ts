export const UrlJadwalSholat = process.env.NEXT_PUBLIC_JADWAL_SHOLAT;
export const UrlDoa = process.env.NEXT_PUBLIC_DOA;
export const UrlSurah = process.env.NEXT_PUBLIC_SURAH;

//fetching Surah
export async function getSurah(): Promise<typeSurahList[] | null> {
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

//fetching Doa
export async function getDoa(): Promise<Doa[] | null> {
  const url = new URL(`${UrlDoa}`);
  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch Doa: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Doa:", error);
    return null;
  }
}
