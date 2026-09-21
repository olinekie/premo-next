export default function Testimonials() {
  const opinions = [
    {
      rating: 5,
      text: "Firma skupiająca fachowy zespół specjalistów z dziedziny obróbki metali profesjonalne podejście do klienta, remonty kapitalne obrabiarek oraz sprzedaż maszyn do obróbki metali polecam",
      author: "Mariusz Duda",
      date: "3 lata temu"
    },
    {
      rating: 5,
      text: "Profesjonalna pomoc. Fachowcy w każdym calu",
      author: "Jarosław Pióro",
      date: "rok temu"
    },
    {
      rating: 5,
      text: "Bardzo miły właściciel zna się na robocie, korzystałem z usługi naprawy suportu jestem zadowolony robota zrobiona bardzo precyzyjnie z dbałością o szczegóły wszystko pasowało bez problemu. Serdecznie polecam",
      author: "Janek Nysztor",
      date: "3 lata temu"
    }
  ];

  return (
    <section
  id="opinie"
  className="bg-[#d8d8d8] py-20"
>
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="section-title text-center mb-12">
      Opinie naszych klientów
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {opinions.map((opinion, index) => (
        <div
          key={index}
          className="bg-white p-8 shadow-md"
        >

          {/* GWIAZDKI */}
          <div className="text-yellow-500 text-xl mb-4">
            {"★".repeat(opinion.rating)}
          </div>

          {/* TREŚĆ OPINII */}
          <p className="text-gray-700 leading-relaxed mb-6">
            „{opinion.text}”
          </p>

          {/* AUTOR */}
          <div className="border-t pt-4">
            <p className="font-semibold">
              {opinion.author}
            </p>

            <p className="text-sm text-gray-500">
              {opinion.date}
            </p>
          </div>

        </div>
      ))}

    </div>

    {/* GOOGLE MAPS */}
    <div className="text-center mt-12">

      <a
        href="https://maps.app.goo.gl/kjZF5Xfe4ooFp7oM6"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-red inline-block"
      >
        Zobacz wszystkie opinie
      </a>

    </div>

  </div>
</section>
  );
}