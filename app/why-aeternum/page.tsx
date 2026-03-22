import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Clock, Star, Award } from "lucide-react";

const reasons = [
  {
    icon: <TrendingUp size={28} />,
    title: "Pre-Trained Filipino Professionals",
    desc: "Every hire undergoes a rigorous 4-week boot camp before reaching you — covering technical skills, communication standards, and business etiquette for western markets.",
  },
  {
    icon: <Shield size={28} />,
    title: "Rigorously Screened Candidates",
    desc: "Our multi-tier vetting process filters out 98% of applicants. Only those who demonstrate exceptional aptitude, cultural alignment, and long-term potential advance.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Low Attrition Model",
    desc: "We build careers, not contracts. Our retention rates are 40% higher than the industry average because we invest deeply in our talent's professional growth.",
  },
  {
    icon: <Users size={28} />,
    title: "Revenue-Conscious Teams",
    desc: "Our professionals are trained to understand your business goals — not just their tasks. They proactively contribute to outcomes that move your revenue needle.",
  },
  {
    icon: <Clock size={28} />,
    title: "Less Supervision Needed",
    desc: "Aeternum talent is self-directed and accountability-driven. They communicate proactively, hit their KPIs, and require far less management overhead than typical hires.",
  },
  {
    icon: <Award size={28} />,
    title: "Faster Business Scaling",
    desc: "With structured recruitment, pre-trained talent, and ongoing support from our team, you can grow your operations in weeks — not months.",
  },
];

const industries = [
  { label: "Ecommerce", icon: "🛒" },
  { label: "SaaS", icon: "💻" },
  { label: "Coaching Businesses", icon: "🎓" },
  { label: "Agencies", icon: "🏢" },
  { label: "Service Businesses", icon: "🤝" },
  { label: "Online Education", icon: "📚" },
  { label: "Subscription Brands", icon: "🔄" },
  { label: "Fintech", icon: "💳" },
];

const roles = [
  "Customer Support Representative",
  "Sales Representative",
  "Virtual Assistant",
  "Admin Assistant",
  "Operations Support",
  "Retention Specialist",
  "Appointment Setter",
  "Chat & Email Support",
];

export default function WhyAeternumPage() {
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
                "radial-gradient(circle at 50% 70%, #fed65b 0%, transparent 55%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                Why Choose Us
              </p>
              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                Why{" "}
                <span style={{ color: "#fed65b" }}>Aeternum</span>{" "}
                is Different.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Most staffing agencies place people and walk away. Aeternum builds
                human infrastructure — systems of talent that drive sustainable
                business growth with minimal friction.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Reasons */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                The Difference
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-manrope)",
                  color: "#00113a",
                  letterSpacing: "-0.02em",
                }}
              >
                Built for Long-Term Success
              </h2>
              <p className="text-base text-[#44464f] max-w-xl mx-auto">
                Six structural advantages that separate Aeternum from every other
                remote staffing agency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="p-10 rounded-2xl"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.05)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "#00113a", color: "#fed65b" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-manrope)", color: "#00113a" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Filipino Talent */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#fed65b" }}
                >
                  Filipino Talent Advantage
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Why Filipino Professionals?
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  The Philippines produces world-class remote professionals with a
                  unique combination of skills, values, and work ethic that makes
                  them ideal for global business operations.
                </p>
                <ul className="space-y-4">
                  {[
                    "Strong English communication skills — verbal and written",
                    "Service-oriented mindset and high accountability",
                    "Reliability, adaptability, and cultural flexibility",
                    "Cost-efficient without sacrificing quality",
                    "Experienced with western business tools and workflows",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Star
                        size={16}
                        className="shrink-0 mt-0.5"
                        fill="#fed65b"
                        style={{ color: "#fed65b" }}
                      />
                      <span className="text-sm text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5">
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <h3
                    className="font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Why Businesses Struggle With Remote Hiring
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "High turnover and inconsistent results",
                      "Poor screening and inadequate onboarding",
                      "Too much supervision required",
                      "Low accountability and unclear KPIs",
                      "Misaligned cultural expectations",
                    ].map((issue) => (
                      <li key={issue} className="flex items-center gap-3 text-sm text-white/60">
                        <span style={{ color: "#fed65b" }}>✕</span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <h3
                    className="font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    What Makes Our Teams Day-One Ready
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Structured screening & skills validation",
                      "Sales & customer experience training",
                      "Soft skills & communication coaching",
                      "Tool-specific technical onboarding",
                      "Ongoing performance support from Aeternum",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                        <CheckCircle size={14} style={{ color: "#fed65b" }} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries & Roles */}
        <section style={{ backgroundColor: "#f4f3f9" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Industries We Serve
                </p>
                <h2
                  className="text-3xl font-extrabold mb-8"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "#00113a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Industries We Support
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((ind) => (
                    <div
                      key={ind.label}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <span className="text-2xl">{ind.icon}</span>
                      <span className="text-sm font-medium text-[#1a1b20]">
                        {ind.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Roles We Place
                </p>
                <h2
                  className="text-3xl font-extrabold mb-8"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "#00113a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Roles We Support
                </h2>
                <div className="grid gap-3">
                  {roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <CheckCircle size={16} style={{ color: "#fed65b" }} className="shrink-0" />
                      <span className="text-sm font-medium text-[#1a1b20]">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              Ready to Scale?
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-manrope)",
                letterSpacing: "-0.02em",
              }}
            >
              Scale With Aeternum.
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Build stable, high-performing remote teams that grow with your
              business — not against it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#fed65b", color: "#00113a" }}
            >
              Build Your Team <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
