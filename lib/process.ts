export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We map your operational needs and define the ideal talent profile for your business.",
  },
  {
    step: "02",
    title: "Talent Sourcing",
    description: "Our recruiters hand-pick candidates from our vetted, pre-trained talent pool.",
  },
  {
    step: "03",
    title: "Final Interviews",
    description: "You meet the top contenders and select the best fit for your culture.",
  },
  {
    step: "04",
    title: "Integration",
    description: "Seamless onboarding with our ongoing support and performance management.",
  },
];
