import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle, MessageSquare, TrendingUp, ShoppingBag, Calendar } from "lucide-react";

const services = [
  {
    icon: <MessageSquare size={32} />,
    title: "Remote Customer Support",
    subtitle: "24/7 World-Class Experiences",
    description:
      "Deliver exceptional customer experiences around the clock. Our agents are trained in empathetic communication, technical troubleshooting, and high-volume ticket management.",
    features: ["98% CSAT Targets", "Multi-channel: Voice, Chat, Email", "Technical & general support", "Escalation management"],
    who: "Ecommerce brands, SaaS companies, subscription businesses",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Sales Support Teams",
    subtitle: "Fuel Your Revenue Pipeline",
    description:
      "Aggressive, results-driven professionals focused on filling your pipeline and driving revenue. From lead qualification to CRM management and outreach coordination.",
    features: ["Lead Prospecting & Qualification", "Appointment Setting", "CRM Management", "Pipeline Reporting"],
    who: "Coaches, agencies, B2B companies, growth-stage startups",
  },
  {
    icon: <Calendar size={32} />,
    title: "Executive Virtual Assistants",
    subtitle: "Reclaim Your Time",
    description:
      "Elite assistants who handle complex scheduling, travel logistics, email filtering, and project coordination with surgical precision — as if they were in the office next to you.",
    features: ["40+ hours saved weekly", "Zero-inbox strategy", "Calendar & travel management", "Project coordination"],
    who: "Founders, executives, busy entrepreneurs, consultants",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Ecommerce Support Staff",
    subtitle: "Marketplace Optimization",
    description:
      "Inventory management, order processing, marketplace optimization, and customer returns handling for Amazon, Shopify, and multi-channel ecommerce operations.",
    features: ["Order processing & fulfillment", "Amazon & Shopify management", "Returns & disputes", "Inventory tracking"],
    who: "Ecommerce store owners, Amazon sellers, DTC brands",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Administrative Support",
    subtitle: "Operational Precision",
    description:
      "Streamline your back-office with dedicated admin professionals handling data entry, document management, reporting, and operational support tasks.",
    features: ["Data entry & management", "Document preparation", "Reporting & analytics", "Process documentation"],
    who: "Service businesses, agencies, healthcare, financial services",
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Retention & Customer Experience",
    subtitle: "Reduce Churn. Drive Loyalty.",
    description:
      "Specialized teams focused on customer retention, win-back campaigns, satisfaction monitoring, and building the loyalty programs that keep clients coming back.",
    features: ["Churn reduction strategies", "Win-back campaigns", "NPS monitoring", "Loyalty program support"],
    who: "SaaS, subscription brands, membership businesses",
  },
];

const faqs = [
  {
    q: "How quickly can talent be deployed?",
    a: "Our streamlined process typically delivers vetted, deployment-ready candidates within 2–4 weeks from the initial discovery call, depending on role complexity and availability.",
  },
  {
    q: "Do you offer coverage for different time zones?",
    a: "Yes. Our Filipino professionals are experienced working across US, UK, Australian, and European time zones — including night shifts and split schedules.",
  },
  {
    q: "What happens if a talent match isn't perfect?",
    a: "We offer a replacement guarantee. If a placed professional doesn't meet your expectations within the agreed evaluation period, we will source and onboard a replacement at no additional cost.",
  },
  {
    q: "Are your professionals pre-trained?",
    a: "Every candidate undergoes a mandatory intensive boot camp on modern software stacks, communication standards, and soft skills before they ever reach your desk.",
  },
];

export default function ServicesPage() {
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
                "radial-gradient(circle at 80% 30%, #fed65b 0%, transparent 55%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                Our Services
              </p>
              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                Precision Talent for{" "}
                <span style={{ color: "#fed65b" }}>Global Growth.</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Beyond staffing. We provide pre-trained, high-performance
                professionals tailored to the specific demands of your industry,
                ensuring seamless operational continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Service Verticals */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                What We Offer
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-manrope)",
                  color: "#00113a",
                  letterSpacing: "-0.02em",
                }}
              >
                Service Verticals
              </h2>
              <p className="text-base text-[#44464f] max-w-xl mx-auto">
                Specialized operational support designed to scale with your
                business complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
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
                    {service.icon}
                  </div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#735c00" }}
                  >
                    {service.subtitle}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-manrope)", color: "#00113a" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle
                          size={16}
                          className="shrink-0"
                          style={{ color: "#fed65b" }}
                        />
                        <span className="text-sm text-[#1a1b20]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="p-4 rounded-xl mb-6"
                    style={{ backgroundColor: "#f4f3f9" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-1">
                      Best for
                    </p>
                    <p className="text-sm text-[#1a1b20]">{service.who}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: "#735c00" }}
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Aeternum Standard */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#fed65b" }}
                >
                  Our Commitment
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  The Aeternum Standard
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  We don&apos;t just find people; we build professionals. Our rigorous
                  vetting and continuous training ensure every talent asset is ready
                  for day-one contribution.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Pre-Trained Talent",
                    desc: "Every candidate undergoes a mandatory 4-week intensive boot camp on modern software stacks and soft skills before they reach your desk.",
                    stat: "4 Weeks",
                    statLabel: "intensive onboarding",
                  },
                  {
                    title: "Vetting Excellence",
                    desc: "Only the top 2% of applicants pass our technical and cultural assessment frameworks. We prioritize long-term stability.",
                    stat: "Top 2%",
                    statLabel: "of applicants placed",
                  },
                  {
                    title: "100% Integration Success",
                    desc: "Integration success rate for our Enterprise clients. We stay involved until your team is fully operational.",
                    stat: "100%",
                    statLabel: "enterprise integration",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-5 p-6 rounded-2xl"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div
                      className="shrink-0 text-center px-4 py-3 rounded-xl"
                      style={{ backgroundColor: "rgba(254,214,91,0.15)" }}
                    >
                      <div
                        className="text-xl font-extrabold"
                        style={{ fontFamily: "var(--font-manrope)", color: "#fed65b" }}
                      >
                        {item.stat}
                      </div>
                      <div className="text-xs text-white/50 whitespace-nowrap">
                        {item.statLabel}
                      </div>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-white mb-1"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "#f4f3f9" }} className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                Questions
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-manrope)",
                  color: "#00113a",
                  letterSpacing: "-0.02em",
                }}
              >
                Service FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.04)",
                  }}
                >
                  <h3
                    className="font-bold text-[#00113a] mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed">{faq.a}</p>
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
              Get Started
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-manrope)",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Elevate Your Operations?
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Connect with a talent strategist to design a custom support
              architecture for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#fed65b", color: "#00113a" }}
            >
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
