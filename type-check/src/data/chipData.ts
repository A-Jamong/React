// chipsData.ts
export interface ChipData {
  id: number;
  chipName: string;
  status: "default" | "select" | "disabled";
}

export const chipData: ChipData[] = [
  { id: 1, chipName: "chip1", status: "default" },
  { id: 2, chipName: "chip2", status: "select" },
  // { id: 3, chipName: "chip3", status: "disabled" },
];
