import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define props for DoaItem to include typing for each part of the doa

export default function DoaItem({ id, doa, ayat, latin, artinya }: Doa) {
  return (
    <Card>
      <CardHeader>
        {/* Display the doa title and ayat */}
        <CardTitle>{`${id}. ${doa}`}</CardTitle>
        <CardDescription className="font-serif">{ayat}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Display the Latin text */}
        <p>{latin}</p>
      </CardContent>
      <CardFooter>
        {/* Display the meaning or translation */}
        <p>Artinya: {artinya}</p>
      </CardFooter>
    </Card>
  );
}
