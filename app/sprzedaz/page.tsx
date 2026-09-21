import MachineGrid from "@/components/sprzedaz/machine-grid";

export default function SprzedazPage() {
  return (
    <main>
      <section className="sales-section">

        <div className="sales-header">
          <h1>Sprzedaż maszyn</h1>

          <p>
            Sprawdź dostępne maszyny i urządzenia.
          </p>
        </div>

        <MachineGrid />

      </section>
    </main>
  );
}