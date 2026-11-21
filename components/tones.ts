import type { Tone } from "@/lib/content";

// Each project keeps its own colour everywhere it appears.
export const toneBg: Record<Tone, string> = {
  lime: "bg-lime",
  sky: "bg-sky",
  peach: "bg-peach",
  blush: "bg-blush",
};

// Markers down the experience timeline, in the same family.
export const toneDot = ["bg-sky", "bg-blush", "bg-peach"];
