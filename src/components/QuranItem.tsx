import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define props for DoaItem to include typing for each part of the doa

export default function QuranItem() {
  return (
    <Card>
      <CardHeader>
        {/* Display the doa title and ayat */}
        <CardTitle>judul</CardTitle>
        <CardDescription>arabbbbbbb</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Display the Latin text */}
        <p>latinnn</p>
      </CardContent>
      <CardFooter>
        {/* Display the meaning or translation */}
        <p>Artinya</p>
      </CardFooter>
    </Card>
  );
}
