import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Machine } from "@/data/machines";

const machinesDirectory = path.join(
  process.cwd(),
  "content/machines"
);

type RawParameter = {
  name: string;
  value: string;
};

type RawAdditionalParameter = {
  name: string;
  value: string;
};

/*
 * Nazwy techniczne używane wewnątrz pliku Markdown
 * → nazwy wyświetlane użytkownikowi na stronie.
 */
const parameterLabels: Record<string, string> = {
  turning_length:
    "Maksymalna długość toczenia w kłach",

  turning_diameter_bed:
    "Maksymalna średnica toczenia nad łożem",

  turning_diameter_support:
    "Maksymalna średnica toczenia nad suportem",

  spindle_bore:
    "Przelot wrzeciona",

  main_motor_power:
    "Moc silnika głównego",

  weight:
    "Ciężar maszyny",
};

export function getMachines(): Machine[] {
  const files = fs.readdirSync(machinesDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(
        machinesDirectory,
        file
      );

      const fileContent = fs.readFileSync(
        filePath,
        "utf8"
      );

      const { data } = matter(fileContent);

      /*
       * ==========================================
       * PARAMETRY TECHNICZNE
       * ==========================================
       */

      let parameters: Record<string, string> = {};

      /*
       * Obsługa starego formatu:
       *
       * parameters:
       *   - name: "Przelot wrzeciona"
       *     value: "52 mm"
       */
      if (Array.isArray(data.parameters)) {
        parameters = Object.fromEntries(
          (data.parameters as RawParameter[])
            .filter(
              (parameter) =>
                parameter.name?.trim() &&
                parameter.value?.trim()
            )
            .map((parameter) => [
              parameter.name,
              parameter.value,
            ])
        );
      }

      /*
       * Obsługa nowego formatu:
       *
       * parameters:
       *   turning_length: "1000 mm"
       *   spindle_bore: "52 mm"
       */
      else if (
        data.parameters &&
        typeof data.parameters === "object"
      ) {
        parameters = Object.fromEntries(
          Object.entries(data.parameters)
            .filter(
              ([, value]) =>
                value !== null &&
                value !== undefined &&
                String(value).trim() !== ""
            )
            .map(([name, value]) => [
              parameterLabels[name] ?? name,
              String(value),
            ])
        );
      }

      /*
       * ==========================================
       * DODATKOWE PARAMETRY
       * ==========================================
       */

      const additionalParameters =
        Array.isArray(data.additional_parameters)
          ? (
              data.additional_parameters as RawAdditionalParameter[]
            ).filter(
              (parameter) =>
                parameter.name?.trim() &&
                parameter.value?.trim()
            )
          : [];

      /*
       * ==========================================
       * DODATKOWE ZALETY
       * ==========================================
       */

      const advantages = Array.isArray(data.advantages)
        ? data.advantages
            .map((item: unknown) => {
              /*
               * Decap może zapisać zaletę jako:
               *
               * - advantage: "Gotowa do pracy"
               */

              if (
                typeof item === "object" &&
                item !== null &&
                "advantage" in item
              ) {
                return String(
                  (item as { advantage: unknown })
                    .advantage
                );
              }

              /*
               * Obsługa również zwykłego:
               *
               * - "Gotowa do pracy"
               */

              return String(item);
            })
            .filter(
              (item) => item.trim() !== ""
            )
        : [];

      return {
        ...data,

        // ID pochodzi z nazwy pliku
        id: path.basename(file, ".md"),

        parameters,

        additionalParameters,

        advantages,
      } as Machine;
    });
}

export function getMachineById(
  id: string
): Machine | undefined {
  const machines = getMachines();

  return machines.find(
    (machine) => machine.id === id
  );
}