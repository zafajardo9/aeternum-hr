"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What kind of businesses do you work with?",
        a: "We work with online businesses of all sizes — from solo founders to scaling ecommerce brands, SaaS companies, coaching businesses, agencies, and service-based businesses. If you need a reliable, pre-trained remote team, Aeternum is built for you.",
      },
      {
        q: "What roles can you provide?",
        a: "We specialize in customer support representatives, sales representatives, virtual assistants, admin assistants, operations support, retention specialists, appointment setters, and chat/email support staff. We can also support custom roles based on your specific needs.",
      },
      {
        q: "Why hire Filipino professionals?",
        a: "Filipino professionals are known for their strong English communication skills, service-oriented mindset, high reliability, cultural adaptability, and strong work ethic. They're experienced with western business tools, time zones, and communication styles — making them ideal for seamless remote integration.",
      },
    ],
  },
  {
    category: "Talent & Quality",
    items: [
      {
        q: "Are your professionals pre-trained?",
        a: "Yes. Every Aeternum candidate undergoes a mandatory intensive training program before reaching your interview stage. This includes technical skills relevant to their role, soft skills, communication standards for western markets, and tool-specific onboarding.",
      },
      {
        q: "How do you maintain low attrition?",
        a: "We build careers, not just placements. Aeternum invests in continuous upskilling, career path development, and active retention management for all placed professionals. Our retention rates are 40% higher than the industry average because our talent stays engaged and motivated.",
      },
      {
        q: "What is your vetting process?",
        a: "Our 3-tier vetting process includes: (1) Technical assessment for role-specific skills, (2) Behavioral and personality evaluation to assess work ethic and cultural fit, and (3) Final cultural alignment review. Only the top 2–3% of applicants pass all three stages.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    items: [
      {
        q: "How long does the hiring process take?",
        a: "Our streamlined process typically delivers vetted, deployment-ready candidates within 2–4 weeks from the initial discovery call. Complex or senior roles may take slightly longer to ensure the right fit.",
      },
      {
        q: "How do I get started?",
        a: "Simply book a free 30-minute discovery call with our team. We'll discuss your business needs, define the ideal talent profile, and outline the next steps. There's no obligation — just a conversation about how we can help you scale.",
      },
      {
        q: "What happens after placement?",
        a: "We don't disappear after placement. Aeternum provides ongoing performance support including regular QA check-ins, retention management, and escalation support. We're your long-term talent partner, not a one-time vendor.",
      },
    ],
  },
  {
    category: "Operations & Support",
    items: [
      {
        q: "Do you provide coverage for different time zones?",
        a: "Yes. Our Filipino professionals are experienced working across US, UK, Australian, and European time zones, including night shifts and split schedules. We match candidates to your operational requirements.",
      },
      {
        q: "Do you provide ongoing support after placement?",
        a: "Absolutely. We maintain active performance partnerships with all our clients. This includes regular performance reviews, quality assurance monitoring, and proactive retention management to ensure your team continues performing at the highest level.",
      },
      {
        q: "What happens if a talent match isn't perfect?",
        a: "We offer a replacement guarantee. If a placed professional doesn't meet your expectations within the agreed evaluation period, we will source and onboard a replacement at no additional cost. Your satisfaction and operational continuity are our priority.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 0 60px rgba(26,27,32,0.04)",
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-8 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className="font-bold text-[#00113a] text-base"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          className="shrink-0 transition-transform duration-200"
          style={{
            color: "#735c00",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div className="px-8 pb-8">
          <p className="text-sm text-[#44464f] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
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
                "radial-gradient(circle at 70% 30%, #fed65b 0%, transparent 55%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                Frequently Asked Questions
              </p>
              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                Everything You{" "}
                <span style={{ color: "#fed65b" }}>Need to Know.</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Answers to the most common questions about how Aeternum works,
                our talent quality, and how we help businesses scale their remote
                teams.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {faqs.map((category) => (
              <div key={category.category} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#735c00" }}
                  >
                    {category.category}
                  </p>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: "rgba(0,17,58,0.08)" }}
                  />
                </div>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* Still have questions? */}
            <div
              className="p-10 rounded-2xl text-center"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 0 60px rgba(26,27,32,0.06)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-manrope)", color: "#00113a" }}
              >
                Still have questions?
              </h3>
              <p className="text-sm text-[#44464f] mb-6">
                Our team is happy to answer any questions not covered here.
                Book a free call and let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                style={{ backgroundColor: "#00113a", color: "#ffffff" }}
              >
                Book a Free Call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
