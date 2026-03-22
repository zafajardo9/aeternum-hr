import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    subtitle: "Understanding Your Business",
    desc: "We begin with a comprehensive discovery session to map your operational needs, culture, and growth goals. This defines the ideal talent profile — not just a job description, but a full picture of who will thrive in your environment.",
    deliverables: [
      "Business needs assessment",
      "Ideal candidate profile",
      "Role scope & KPI framework",
      "Timeline and budget alignment",
    ],
  },
  {
    step: "02",
    title: "Role & Business Needs Assessment",
    subtitle: "Defining the Blueprint",
    desc: "Our talent architects translate your discovery insights into a precise recruitment brief. We identify non-negotiables, nice-to-haves, and the behavioral markers that predict long-term success in your specific environment.",
    deliverables: [
      "Detailed job specification",
      "Skill & competency matrix",
      "Cultural alignment criteria",
      "Compensation benchmarking",
    ],
  },
  {
    step: "03",
    title: "Candidate Sourcing & Screening",
    subtitle: "Finding the Right People",
    desc: "Leveraging our exclusive pre-trained talent pool, we hand-select candidates who meet your brief. Every candidate passes our 3-tier vetting process — technical assessment, behavioral evaluation, and cultural alignment review.",
    deliverables: [
      "3-tier vetting completed",
      "Top 3% shortlist prepared",
      "Candidate profiles & assessments",
      "Reference verification",
    ],
  },
  {
    step: "04",
    title: "Skills Validation & Training",
    subtitle: "Preparing for Excellence",
    desc: "Before reaching your interview stage, every candidate undergoes role-specific skills validation and targeted upskilling. This ensures they are not just qualified — but performance-ready from day one.",
    deliverables: [
      "Technical skills validation",
      "Soft skills & communication review",
      "Tool-specific training",
      "Day-1 readiness confirmation",
    ],
  },
  {
    step: "05",
    title: "Team Deployment",
    subtitle: "Seamless Integration",
    desc: "We manage the full onboarding process to ensure a friction-free start. From contract setup to system access, communication protocols, and your internal workflows — we handle the complexity so you don't have to.",
    deliverables: [
      "Structured onboarding plan",
      "Systems & tools setup",
      "Communication protocols",
      "30-day integration support",
    ],
  },
  {
    step: "06",
    title: "Ongoing Performance Support",
    subtitle: "Built-In Accountability",
    desc: "Our engagement doesn't end at placement. We maintain active performance partnerships — providing QA reviews, retention support, and escalation management to ensure your team continues to deliver at the highest level.",
    deliverables: [
      "Regular performance check-ins",
      "Quality assurance reviews",
      "Retention & career development",
      "Replacement guarantee if needed",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navigation />
      <main className="">
        {/* Hero */}
        <section className="gradient-hero py-32 lg:py-40 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 40% 60%, #fed65b 0%, transparent 55%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                Our Process
              </p>
              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                From Discovery{" "}
                <span style={{ color: "#fed65b" }}>to Excellence.</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                A streamlined, transparent 6-step process that eliminates the
                friction of remote hiring and delivers performance-ready teams —
                every time.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {steps.map((item, i) => (
                <div
                  key={item.step}
                  className="grid lg:grid-cols-3 gap-8 p-10 rounded-2xl"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#ffffff" : "#f4f3f9",
                    boxShadow: "0 0 60px rgba(26,27,32,0.04)",
                  }}
                >
                  {/* Step number + title */}
                  <div>
                    <div
                      className="text-5xl font-extrabold mb-3"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        color: "#fed65b",
                      }}
                    >
                      {item.step}
                    </div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#735c00" }}
                    >
                      {item.subtitle}
                    </p>
                    <h2
                      className="text-2xl font-extrabold"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        color: "#00113a",
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-1">
                    <p className="text-sm text-[#44464f] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#44464f] mb-4">
                      What You Get
                    </p>
                    <ul className="space-y-2">
                      {item.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3">
                          <CheckCircle
                            size={16}
                            className="shrink-0"
                            style={{ color: "#fed65b" }}
                          />
                          <span className="text-sm text-[#1a1b20]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#fed65b" }}
            >
              Start Today
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-manrope)",
                letterSpacing: "-0.02em",
              }}
            >
              Begin Your Discovery Call.
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Step one is simple — let&apos;s talk. Book a free 30-minute call and
              start building your elite remote team today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#fed65b", color: "#00113a" }}
            >
              Book a Free Call <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
