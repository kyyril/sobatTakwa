import DoaList from "@/components/DoaList";

export default function Doa() {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-3xl flex justify-center items-center flex-col">
        <h1 className="m-2 text-center font-sans font-extrabold text-4xl">
          Do`a <span className="text-yellow-500">Harian</span>
        </h1>
        <DoaList />
      </section>
    </main>
  );
}
