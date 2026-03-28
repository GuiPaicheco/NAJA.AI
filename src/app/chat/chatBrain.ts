import { campusData } from "@/data/campus";

export function getBotResponse(input: string) {
  const msg = input.toLowerCase();

  if (msg.includes("lab")) {
    return campusData.labs
      .map((l) => `📍 ${l.name}\n${l.location}`)
      .join("\n\n");
  }

  if (msg.includes("prof")) {
    return campusData.professors
      .map((p) => `👨‍🏫 ${p.name} - ${p.area}`)
      .join("\n");
  }

  if (msg.includes("wifi")) return campusData.info.wifi;
  if (msg.includes("horário")) return campusData.info.horarios;

  return "Pergunte sobre laboratórios, professores ou horários.";
}