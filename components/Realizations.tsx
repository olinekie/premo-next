import Image from "next/image";

export default function Realizations() {
  return (
    <section
      id="realizacje"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="section-title text-center">
          Realizacje
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <Image
            src="/before.jpg"
            alt=""
            width={600}
            height={400}
          />

          <Image
            src="/after.jpg"
            alt=""
            width={600}
            height={400}
          />

        </div>

        <div className="grid md:grid-cols-2 mt-12">

          <div className="space-y-3 text-2xl">

            <p>⚙ 15+ lat doświadczenia</p>

            <p>
              ⚙ Setki wyremontowanych obrabiarek
            </p>

            <p>
              ⚙ Klienci z całej Polski
            </p>

            <p>
              ⚙ Gwarancja na wykonane prace
            </p>

          </div>

          <div className="flex justify-center items-center">
           <a href="https://www.facebook.com/profile.php?id=61569875885300"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red">Zobacz więcej realizacji
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}