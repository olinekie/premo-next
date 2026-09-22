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

      let parameters: Record<string, string> = {};

      if (Array.isArray(data.parameters)) {
        parameters = Object.fromEntries(
          (data.parameters as RawParameter[]).map(
            (parameter) => [
              parameter.name,
              parameter.value,
            ]
          )
        );
      } else if (
        data.parameters &&
        typeof data.parameters === "object"
      ) {
        parameters = data.parameters;
      }

      return {
        ...data,

        // ID pobieramy z nazwy pliku
        id: path.basename(file, ".md"),

        parameters,
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