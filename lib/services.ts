import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Customer Support Excellence",
    description:
      "24/7 omnichannel support that feels local. We specialize in building empathetic, high-resolution teams for ecommerce and tech.",
    icon: "💬",
  },
  {
    title: "Sales & Lead Generation",
    description:
      "Aggressive, results-driven professionals focused on filling your pipeline and driving revenue month over month.",
    icon: "📈",
  },
  {
    title: "Executive Virtual Assistants",
    description:
      "Elite assistants who handle your calendar, email, and operations as if they were sitting in the office next to you.",
    icon: "🎯",
  },
  {
    title: "Back-Office & Operations",
    description:
      "Streamline data entry, bookkeeping, and administrative tasks with precision-focused operational teams.",
    icon: "⚙️",
  },
];
