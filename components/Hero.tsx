import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="
      h-[700px]
      bg-cover
      bg-center
      relative
    "
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div
        className="
        absolute
        left-12
        top-16
        bg-white/75
        p-10
        max-w-3xl
      "
      >
        <h1
          className="
          text-5xl
          font-bold
          uppercase
          mb-8
        "
        >
          Remonty Kapitalne Obrabiarek
        </h1>

        <p className="text-xl leading-9">
          Jesteśmy ekspertami w dziedzinie obróbki metalu
          i serwisowania maszyn. Oferujemy profesjonalne
          usługi tokarskie, frezarskie, szlifowanie,
          dłutowanie oraz produkcję kół zębatych.
        </p>

        <div className="flex gap-8 mt-10">

        <Link href="/uslugi"
          className="btn-red relative text-white mx-8 my-8 px-6 py-3 hover:bg-red-700 transition">
            Usługi
            </Link>

          <Link href="/sprzedaz"
          className="btn-red relative text-white mx-8 my-8 px-6 py-3 hover:bg-red-700 transition">
            Sprzedaż
            </Link>

          <Link href="/Contact.tsx"
          className="btn-red relative text-white mx-8 my-8 px-6 py-3 hover:bg-red-700 transition">
            Kontakt
            </Link>

        </div>
      </div>
    </section>
  );
}