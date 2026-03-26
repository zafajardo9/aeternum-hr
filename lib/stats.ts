export const stats = [
  { value: "98%", label: "Placement Rate" },
  { value: "15+", label: "Specializations" },
  { value: "1-2 wk", label: "Avg. Time to Deploy" },
  { value: "40%", label: "Lower Attrition" },
] as const;

export type Stat = (typeof stats)[number];
