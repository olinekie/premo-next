import Image from "next/image";
import Link from "next/link";
export default function Offer() {
  return (
    <section
  id="oferta"
  className="bg-[#f1f1f1] py-16 px-6"
>
  <div className="max-w-[1600px] mx-auto">

    <h2 className="section-title">
      Oferta
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-center mt-16">

      {/* LISTA */}
      <ul className="space-y-3 text-lg text-left">
        <li>• Toczenie</li>
        <li>• Frezowanie</li>
        <li>• Szlifowanie</li>
        <li>• Dłutowanie</li>
        <li>• Produkcja kół zębatych</li>
        <li>• Remonty kapitalne obrabiarek</li>
        <li>• Sprzedaż maszyn używanych</li>
      </ul>

      {/* ZDJĘCIA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

        <Image
          src="/tokarka1.jpg"
          alt="Tokarka po remoncie"
          width={500}
          height={650}
          className="w-full h-auto object-cover border-8 border-white shadow-xl rotate-3 transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-50"
        />

        <Image
          src="/tokarka1.jpg"
          alt="Tokarka po remoncie"
          width={500}
          height={650}
          className="w-full h-auto object-cover border-8 border-white shadow-xl -rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-50"
        />

        <Image
          src="/tokarka1.jpg"
          alt="Tokarka po remoncie"
          width={500}
          height={650}
          className="w-full h-auto object-cover border-8 border-white shadow-xl rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-50"
        />

      </div>
    </div>

    {/* PRZYCISKI */}
    <div className="flex justify-center gap-6 mt-16">

      <Link
        href=""
        className="btn-red text-white px-6 py-3 hover:bg-red-700 transition"
      >
        Usługi
      </Link>

      <Link
        href="/sprzedaz"
        className="btn-red text-white px-6 py-3 hover:bg-red-700 transition"
      >
        Sprzedaż
      </Link>

    </div>

  </div>
</section>
  );
}