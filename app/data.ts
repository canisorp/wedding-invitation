import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export const items: {
  type: "gathering" | "curch" | "dinner" | "cake" | "leave";
  title: string;
  time: string;
}[] = [
  {
    type: "gathering",
    title: "Okupljanje",
    time: "12:00",
  },
  {
    type: "curch",
    title: "Vjenčanje",
    time: "12:00",
  },
  {
    type: "dinner",
    title: "Večera",
    time: "12:00",
  },
  {
    type: "cake",
    title: "Torta",
    time: "12:00",
  },
  {
    type: "leave",
    title: "Odlazak (?)",
    time: "undefined",
  },
];
