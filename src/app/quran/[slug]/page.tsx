import { UrlSurah } from "@/lib/utils/fetcher";
async function fetchDetail(slug: string) {
  try {
    const response = await fetch(`${UrlSurah}/${slug}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch detail: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching detail:", error);
    return null;
  }
}
export default async function detailSurah({
  params,
}: {
  params: { slug: string };
}) {
  const detailSurah = await fetchDetail(params.slug);
  if (!detailSurah) {
    return <p>Error loading details. Please try again later.</p>;
  }
  return (
    <div className="w-full flex justify-center items-start min-h-screen mt-10">
      <div key={detailSurah.number}>
        <h1 className="m-2 text-center font-sans font-extrabold text-4xl">
          {detailSurah.name}
        </h1>
      </div>

      <div></div>
    </div>
  );
}
