import Image from "next/image";
import Link from "next/link";
import { Machine } from "@/data/machines";

type MachineCardProps = {
  machine: Machine;
};

export default function MachineCard({
  machine,
}: MachineCardProps) {
  return (
    <Link
      href={`/sprzedaz/${machine.id}`}
      className="machine-card-link"
    >
      <article className="contact-card machine-card">
        <div className="machine-card-image">
          <Image
            src={machine.image}
            alt={machine.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="machine-card-content">
          <h2>{machine.name}</h2>

          <p className="machine-card-price">
            {machine.price.toLocaleString("pl-PL")} zł netto
          </p>

          <p className="machine-card-location">
            {machine.location}
          </p>

          <p className="machine-card-description">
            {machine.description}
          </p>

          <span className="machine-card-more">
            Zobacz szczegóły →
          </span>
        </div>
      </article>
    </Link>
  );
}