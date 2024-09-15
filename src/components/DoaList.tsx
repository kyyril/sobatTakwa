import DoaItem from "./DoaItem";
// Define props for DoaList to include typing for dataDoa
interface DoaListProps {
  dataDoa: Doa[];
}

export default function DoaList({ dataDoa }: DoaListProps) {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      {dataDoa.map((doa) => (
        <div key={doa.id}>
          {/* Pass the relevant data to DoaItem */}
          <DoaItem
            id={doa.id}
            doa={doa.doa}
            ayat={doa.ayat}
            latin={doa.latin}
            artinya={doa.artinya}
          />
        </div>
      ))}
    </div>
  );
}
