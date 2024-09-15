// Import DoaList and URL constants
import DoaList from "@/components/DoaList";
import { UrlDoa } from "@/lib/constans";

// Fetch the Doa data with proper typing
async function getDoa(): Promise<Doa[] | null> {
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

// Main component
export default async function Doa() {
  // Fetch Doa data with proper type
  const dataDoa: Doa[] | null = await getDoa();

  // Render component, passing dataDoa to DoaList
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-3xl flex justify-center items-center flex-col">
        <h1 className="m-2 text-center font-sans font-extrabold text-4xl">
          Do`a <span className="text-yellow-500">Harian</span>
        </h1>
        <div>
          {dataDoa ? <DoaList dataDoa={dataDoa} /> : <p>Failed to load Doa.</p>}
        </div>
      </section>
    </main>
  );
}
