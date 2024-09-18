import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SurahItem({
  query,
  number,
  name,
  translation,
  numberOfAyahs,
  revelation,
}: typeSurahList) {
  const highlightQuery = (text: string, query: string) => {
    if (!query) return text; // Jika query kosong, kembalikan teks asli
    const regex = new RegExp(`(${query})`, "gi"); // Membuat regex untuk pencarian yang case-insensitive
    const parts = text.split(regex); // Pisahkan teks berdasarkan query
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-400 rounded-l-md rounded-t-md">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <Link href={`/quran/${number}`}>
      <Card className="m-1 transition transform hover:bg-secondary active:bg-primary hover:scale-95 hover:secondary duration-300 ease-in-out">
        <div className="flex text-sm justify-between ">
          <span className="flex items-start left-0 top-0 w-auto justify-start bg-yellow-400 px-2 rounded-t-md rounded-r-md">
            {number}
          </span>
          <span className="flex justify-end mx-3">taf</span>
        </div>
        <CardHeader className="py-0">
          <CardDescription className="flex px-3 font-serif justify-start font-bold text-3xl text-primary">
            {highlightQuery(name, query)}
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0 font-serif mx-3 text-yellow-400">
          <p>{translation}</p>
        </CardContent>
        <CardFooter className="py-1 flex justify-between text-muted-foreground text-sm">
          <p className="mx-3">{numberOfAyahs} ayat</p>
          <p>{revelation}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
