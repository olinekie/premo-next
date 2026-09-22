import { getMachines } from "@/lib/machines";
import MachineCard from "./machine-card";

export default function MachineGrid() {
  const machines = getMachines();

  return (
    <div className="machine-grid">
      {machines.map((machine) => (
        <MachineCard
          key={machine.id}
          machine={machine}
        />
      ))}
    </div>
  );
}