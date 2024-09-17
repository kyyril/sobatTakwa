import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define props for DoaItem to include typing for each part of the doa

export default function DoaItem({ id, doa, ayat, latin, artinya, query }: Doa) {
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
    <Card>
      <CardHeader className="font-serif">
        <CardTitle>
          {id}. {highlightQuery(doa, query)}
        </CardTitle>
        <CardDescription className="flex text-primary font-serif text-4xl justify-end ">
          {ayat}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-yellow-400">{latin}</CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Artinya: {artinya}
      </CardFooter>
    </Card>
  );
}
