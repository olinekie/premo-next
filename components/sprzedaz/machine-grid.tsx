import { machines } from "@/data/machines";
import MachineCard from "./machine-card";

export default function MachineGrid() {
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