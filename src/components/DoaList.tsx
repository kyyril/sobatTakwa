import Link from "next/link";
import DoaItem from "./DoaItem";

export default function DoaList() {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <div>{<DoaItem />}</div>
      <div>{<DoaItem />}</div>
      <div>{<DoaItem />}</div>
    </div>
  );
}
