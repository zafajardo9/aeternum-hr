import { TrendingUp, Shield, CheckCircle, Users, Clock, Award } from "lucide-react";
import { ReactNode } from "react";

export interface Reason {
  icon: string;
  title: string;
  desc: string;
}

export interface Industry {
  label: string;
  icon: string;
}

export const reasons: Reason[] = [
  {
    icon: "TrendingUp",
    title: "Pre-Trained Filipino Professionals",
    desc: "Every hire undergoes a rigorous 4-week boot camp before reaching you — covering technical skills, communication standards, and business etiquette for western markets.",
  },
  {
    icon: "Shield",
    title: "Rigorously Screened Candidates",
    desc: "Our multi-tier vetting process accepts only the top 3% of applicants. Only those who demonstrate exceptional aptitude, cultural alignment, and long-term potential advance.",
  },
  {
    icon: "CheckCircle",
    title: "Low Attrition Model",
    desc: "We build careers, not contracts. Our retention rates are 40% higher than the industry average because we invest deeply in our talent's professional growth.",
  },
  {
    icon: "Users",
    title: "Revenue-Conscious Teams",
    desc: "Our professionals are trained to understand your business goals — not just their tasks. They proactively contribute to outcomes that move your revenue needle.",
  },
  {
    icon: "Clock",
    title: "Less Supervision Needed",
    desc: "Aeternum talent is self-directed and accountability-driven. They communicate proactively, hit their KPIs, and require far less management overhead than typical hires.",
  },
  {
    icon: "Award",
    title: "Faster Business Scaling",
    desc: "With structured recruitment, pre-trained talent, and ongoing support from our team, you can grow your operations in weeks — not months.",
  },
];

export const industries: Industry[] = [
  { label: "Ecommerce", icon: "🛒" },
  { label: "SaaS", icon: "💻" },
  { label: "Coaching Businesses", icon: "🎓" },
  { label: "Agencies", icon: "🏢" },
  { label: "Service Businesses", icon: "🤝" },
  { label: "Online Education", icon: "📚" },
  { label: "Subscription Brands", icon: "🔄" },
  { label: "Fintech", icon: "💳" },
];

export const roles: string[] = [
  "Customer Support Representative",
  "Sales Representative",
  "Virtual Assistant",
  "Admin Assistant",
  "Operations Support",
  "Retention Specialist",
  "Appointment Setter",
  "Chat & Email Support",
];
