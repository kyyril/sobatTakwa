import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SurahItem({
  number,
  name,
  translation,
  numberOfAyahs,
  revelation,
}: typeSurahList) {
  return (
    <Card>
      <div className="flex text-sm font-mono justify-start items-start left-0 top-0 bg-yellow-500 dark:bg-secondary w-auto px-2 rounded-t-md">
        {number}.
      </div>
      <CardHeader className="py-0">
        <CardTitle className="flex justify-end py-1">{revelation}</CardTitle>
        <CardDescription className="flex mt-0 justify-start font-bold p-0">
          {name}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <p>{translation}</p>
      </CardContent>
      <CardFooter className="py-1 flex justify-end">
        <p>{numberOfAyahs} ayat</p>
      </CardFooter>
    </Card>
  );
}
