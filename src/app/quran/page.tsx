import QuranItem from "@/components/QuranItem";
import QuranList from "@/components/QuranList";

export default function Quran() {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-3xl flex justify-center items-center flex-col">
        <h1 className="m-2 text-center font-sans font-extrabold text-4xl">
          Baca <span className="text-yellow-500">Al-Qur`an</span>
        </h1>
        <div>
          <QuranList />
        </div>
      </section>
    </main>
  );
}
