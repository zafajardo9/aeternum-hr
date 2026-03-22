import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle, ArrowRight, Star, TrendingUp, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
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

const process = [
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

const testimonials = [
  {
    quote:
      "Aeternum provided us with an operations manager who literally saved us 20 hours a week within the first month. The training quality is unlike anything we've seen from other PH agencies.",
    name: "Marcus Chen",
    title: "CEO, Flux Digital",
  },
  {
    quote:
      "The talent caliber is exceptional. They aren't just workers; they are thinkers who suggest improvements to our workflows. Highly recommend for scaling teams.",
    name: "Sarah Jenkins",
    title: "COO, Zenith Consulting",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="">
        {/* Hero */}
        <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 70% 50%, #fed65b 0%, transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ backgroundColor: "rgba(254,214,91,0.15)", border: "1px solid rgba(254,214,91,0.3)" }}>
                <Star size={14} style={{ color: "#fed65b" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#fed65b" }}>
                  Where Talent Meets Excellence
                </span>
              </div>

              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
                style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
              >
                Build Your Elite{" "}
                <span style={{ color: "#fed65b" }}>Remote Team</span>{" "}
                Today.
              </h1>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                Connect with high-performance Filipino professionals — pre-trained, rigorously vetted, and ready to integrate seamlessly into your business from day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                  style={{ backgroundColor: "#fed65b", color: "#00113a" }}
                >
                  Book a Free Call
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Top 1% Talent", sub: "Vetted for precision" },
                  { label: "Performance Ready", sub: "Pre-trained experts" },
                  { label: "40% Lower Attrition", sub: "vs. industry average" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <div className="text-sm font-semibold text-white">{stat.label}</div>
                    <div className="text-xs text-white/50">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Why Aeternum
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-manrope)", color: "#00113a", letterSpacing: "-0.02em" }}
                >
                  Elite Filipino Talent, Specialized for Growth.
                </h2>
                <p className="text-base text-[#44464f] leading-relaxed mb-10">
                  We don&apos;t just find employees; we build high-capacity infrastructure. Our talent pool is meticulously selected and pre-trained to integrate seamlessly into your established workflows.
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Pre-Trained Professionals",
                      desc: "Ready to contribute from Day 1 with industry-specific training.",
                    },
                    {
                      title: "Cultural Alignment",
                      desc: "Focused on western business etiquette and exceptional communication.",
                    },
                    {
                      title: "Low Attrition Model",
                      desc: "We invest in our people so they invest in your business long-term.",
                    },
                    {
                      title: "Rigorously Screened",
                      desc: "Only the top 3% of applicants ever reach your interview stage.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <CheckCircle
                        size={20}
                        className="mt-0.5 shrink-0"
                        style={{ color: "#fed65b" }}
                      />
                      <div>
                        <div className="font-semibold text-[#1a1b20] text-sm">{item.title}</div>
                        <div className="text-sm text-[#44464f]">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <TrendingUp size={28} />, label: "Revenue-Conscious Teams", value: "40%" , sub: "higher retention rate" },
                  { icon: <Shield size={28} />, label: "Quality Assurance", value: "3-Tier", sub: "vetting process" },
                  { icon: <CheckCircle size={28} />, label: "Placement Accuracy", value: "Top 3%", sub: "of candidates placed" },
                  { icon: <Clock size={28} />, label: "Speed to Hire", value: "Fast", sub: "structured pipeline" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "#ffffff", boxShadow: "0 0 60px rgba(26,27,32,0.06)" }}
                  >
                    <div className="mb-3" style={{ color: "#00113a" }}>{card.icon}</div>
                    <div
                      className="text-2xl font-extrabold mb-1"
                      style={{ fontFamily: "var(--font-manrope)", color: "#00113a" }}
                    >
                      {card.value}
                    </div>
                    <div className="text-xs font-semibold text-[#1a1b20] mb-0.5">{card.label}</div>
                    <div className="text-xs text-[#44464f]">{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ backgroundColor: "#f4f3f9" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                What We Do
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{ fontFamily: "var(--font-manrope)", color: "#00113a", letterSpacing: "-0.02em" }}
              >
                Specialized Solutions
              </h2>
              <p className="text-base text-[#44464f] max-w-xl mx-auto">
                Tailored talent acquisition across key functional departments to scale your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl group transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.05)",
                  }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-manrope)", color: "#00113a" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: "#735c00" }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#00113a", color: "#ffffff" }}
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Beyond the Standard */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#fed65b" }}
                >
                  The Aeternum Difference
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
                >
                  Beyond the Standard Agency Model.
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  Typical outsourcing is a revolving door of talent. Aeternum is built on the philosophy of &ldquo;Architectural Longevity.&rdquo; We focus on high retention and deep integration &mdash; not just placement.
                </p>
              </div>
              <div className="grid gap-6">
                {[
                  {
                    icon: <TrendingUp size={24} />,
                    title: "Ultra-Low Attrition",
                    desc: "We invest in our people so they invest in your business. Our retention rates are 40% higher than the industry average.",
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Quality Assurance First",
                    desc: "Our 3-tier vetting process ensures that only the top 3% of applicants ever reach your interview stage.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-8 rounded-2xl flex gap-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(254,214,91,0.15)", color: "#fed65b" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                How It Works
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{ fontFamily: "var(--font-manrope)", color: "#00113a", letterSpacing: "-0.02em" }}
              >
                The Path to Excellence
              </h2>
              <p className="text-base text-[#44464f] max-w-xl mx-auto">
                A streamlined process to scale your team without the friction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, i) => (
                <div key={item.step} className="relative">
                  {i < process.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-full w-full h-px -translate-x-1/2 z-0"
                      style={{ backgroundColor: "rgba(0,17,58,0.12)" }}
                    />
                  )}
                  <div
                    className="p-8 rounded-2xl relative z-10"
                    style={{ backgroundColor: "#ffffff", boxShadow: "0 0 60px rgba(26,27,32,0.05)" }}
                  >
                    <div
                      className="text-3xl font-extrabold mb-4"
                      style={{ fontFamily: "var(--font-manrope)", color: "#fed65b" }}
                    >
                      {item.step}
                    </div>
                    <h3
                      className="font-bold mb-2 text-[#00113a]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#44464f] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Left — heading + nav */}
              <div className="lg:w-1/3 shrink-0">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Client Stories
                </p>
                <h2
                  className="text-4xl font-extrabold mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-manrope)", color: "#00113a", letterSpacing: "-0.02em" }}
                >
                  Trusted by High-Growth Agencies.
                </h2>
                <p className="text-base text-[#44464f] leading-relaxed mb-10">
                  See how Aeternum is transforming operations for modern enterprises and niche consultancies globally.
                </p>
                <div className="flex gap-3">
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white"
                    style={{ border: "1px solid rgba(0,17,58,0.15)", color: "#00113a" }}
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white"
                    style={{ border: "1px solid rgba(0,17,58,0.15)", color: "#00113a" }}
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Right — staggered cards */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className="p-8 rounded-2xl space-y-6"
                    style={{
                      backgroundColor: "#ffffff",
                      boxShadow: "0 4px 24px rgba(26,27,32,0.08)",
                      transform: i === 1 ? "translateY(2rem)" : "translateY(0)",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={16} fill="#fed65b" style={{ color: "#fed65b" }} />
                      ))}
                    </div>
                    {/* Quote */}
                    <blockquote className="text-sm text-[#1a1b20] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full shrink-0"
                        style={{ backgroundColor: "#e8e6f0" }}
                      />
                      <div>
                        <p className="font-bold text-sm text-[#00113a]" style={{ fontFamily: "var(--font-manrope)" }}>
                          {t.name}
                        </p>
                        <p className="text-xs text-[#44464f] uppercase tracking-widest">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#fed65b" }}
            >
              Get Started
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-manrope)", letterSpacing: "-0.02em" }}
            >
              Ready to Build Your Elite Team?
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join dozens of industry leaders who have scaled their operations with Aeternum&apos;s premium talent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                style={{ backgroundColor: "#fed65b", color: "#00113a" }}
              >
                Book a Free Call <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base text-white transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
