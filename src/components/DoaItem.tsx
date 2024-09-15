import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define props for DoaItem to include typing for each part of the doa
interface DoaItemProps {
  id: number;
  doa: string;
  ayat: string;
  latin: string;
  artinya: string;
}

export default function DoaItem({
  id,
  doa,
  ayat,
  latin,
  artinya,
}: DoaItemProps) {
  return (
    <Card>
      <CardHeader>
        {/* Display the doa title and ayat */}
        <CardTitle>{`${id}. ${doa}`}</CardTitle>
        <CardDescription>{ayat}</CardDescription>
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
