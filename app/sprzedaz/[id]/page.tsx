import { notFound } from "next/navigation";
import { getMachineById } from "@/lib/machines";
import MachineGallery from "@/components/sprzedaz/machine-gallery";
import Link from "next/link";

type MachinePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MachinePage({
  params,
}: MachinePageProps) {
  const { id } = await params;

  const machine = getMachineById(id);

  if (!machine) {
    notFound();
  }

  return (
    <main className="machine-page">

      <div className="machine-page-container">

        <Link
          href="/sprzedaz"
          className="back-to-sales"
        >
          ← Wróć do sprzedaży
        </Link>

        <div className="machine-page-grid">

          {/* GALERIA */}

          <div className="machine-page-gallery">
            <MachineGallery
              images={machine.images}
              name={machine.name}
            />
          </div>

          {/* INFORMACJE */}

          <div className="machine-page-info">

            <h1>{machine.name}</h1>

            <p className="machine-page-price">
              {machine.price.toLocaleString("pl-PL")} zł netto
            </p>

            <p className="machine-page-location">
              {machine.location}
            </p>

            <div className="machine-description">
              <h2>Opis</h2>

              <p>{machine.description}</p>
            </div>

            <Link
              href="/kontakt"
              className="machine-contact-button"
            >
              Skontaktuj się
            </Link>

          </div>

        </div>

        {/* PARAMETRY */}

        <section className="machine-parameters">

          <h2>Parametry techniczne</h2>

          <div className="parameters-table">

            {Object.entries(machine.parameters).map(
              ([name, value]) => (
                <div
                  className="parameter-row"
                  key={name}
                >
                  <span>{name}</span>
                  <strong>{value}</strong>
                </div>
              )
            )}

          </div>

        </section>

      </div>

    </main>
  );
}