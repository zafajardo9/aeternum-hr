import { Brain, Network, Zap } from "lucide-react";
import { ReactNode } from "react";

export interface Difference {
  icon: string;
  title: string;
  desc: string;
}

export interface QualityItem {
  title: string;
  desc: string;
}

export const differences: Difference[] = [
  {
    icon: "Brain",
    title: "Cognitive Alignment",
    desc: "We utilize proprietary behavioral assessments to ensure every candidate aligns with your specific organizational DNA, not just the job description.",
  },
  {
    icon: "Network",
    title: "Curated Networks",
    desc: "Access to an exclusive, non-public talent pool of high-performing individuals who aren't active on traditional job boards.",
  },
  {
    icon: "Zap",
    title: "Precision Velocity",
    desc: "Our agile framework reduces time-to-hire by 40% while maintaining a placement accuracy that is industry-leading.",
  },
];

export const quality: QualityItem[] = [
  {
    title: "Multi-Tiered Screening",
    desc: "Rigorous technical, behavioral, and cultural vetting stages that filter out all but the top 3% of applicants.",
  },
  {
    title: "Continuous Upskilling",
    desc: "Our candidates undergo mandated certification updates to ensure they remain at the cutting edge of their niche.",
  },
  {
    title: "Integration Coaching",
    desc: "We provide 90-day post-placement coaching to ensure seamless cultural assimilation and early ROI.",
  },
];
