"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const pathForward = [
  {
    step: "01",
    title: "Initial Strategy",
    desc: "Deep dive into your organizational culture and technical vision to define ideal talent profiles.",
  },
  {
    step: "02",
    title: "Curated Search",
    desc: "Identifying pre-screened, pre-trained talent from our exclusive Aeternum network.",
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "Seamless transition management ensuring your new team contributes from day one.",
  },
];

const stats = [
  { value: "98%", label: "Placement Rate" },
  { value: "15+", label: "Specializations" },
  { value: "2–4 wk", label: "Avg. Time to Deploy" },
  { value: "40%", label: "Lower Attrition" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    businessType: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                "radial-gradient(circle at 60% 40%, #fed65b 0%, transparent 55%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                Contact Us
              </p>
              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                Secure the{" "}
                <span style={{ color: "#fed65b" }}>Golden Thread</span>{" "}
                of Talent.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Bespoke consultancy for elite talent acquisition. Choose your
                preferred method of engagement and let&apos;s start building your team.
              </p>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ backgroundColor: "#faf8ff" }} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Inquiry Form */}
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Direct Inquiry
                </p>
                <h2
                  className="text-3xl font-extrabold mb-2"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "#00113a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Submit Your Requirements
                </h2>
                <p className="text-sm text-[#44464f] mb-8">
                  Tell us about your business and the talent you need. We&apos;ll get
                  back to you within 24 hours.
                </p>

                {submitted ? (
                  <div
                    className="p-10 rounded-2xl text-center"
                    style={{
                      backgroundColor: "#ffffff",
                      boxShadow: "0 0 60px rgba(26,27,32,0.06)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "rgba(254,214,91,0.15)" }}
                    >
                      <CheckCircle size={32} style={{ color: "#fed65b" }} />
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        color: "#00113a",
                      }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-sm text-[#44464f]">
                      Your inquiry has been received. A member of our team will be
                      in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div
                      className="p-8 rounded-2xl space-y-5"
                      style={{
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 60px rgba(26,27,32,0.06)",
                      }}
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            className="block text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-2"
                            htmlFor="name"
                          >
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{
                              backgroundColor: "#f4f3f9",
                              color: "#1a1b20",
                              border: "1px solid transparent",
                            }}
                            onFocus={(e) =>
                              (e.currentTarget.style.border =
                                "1px solid #fed65b")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.border =
                                "1px solid transparent")
                            }
                          />
                        </div>
                        <div>
                          <label
                            className="block text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-2"
                            htmlFor="email"
                          >
                            Work Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{
                              backgroundColor: "#f4f3f9",
                              color: "#1a1b20",
                              border: "1px solid transparent",
                            }}
                            onFocus={(e) =>
                              (e.currentTarget.style.border =
                                "1px solid #fed65b")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.border =
                                "1px solid transparent")
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-2"
                          htmlFor="company"
                        >
                          Company Name *
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: "#f4f3f9",
                            color: "#1a1b20",
                            border: "1px solid transparent",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.border = "1px solid #fed65b")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.border =
                              "1px solid transparent")
                          }
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            className="block text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-2"
                            htmlFor="businessType"
                          >
                            Business Type
                          </label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={form.businessType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                            style={{
                              backgroundColor: "#f4f3f9",
                              color: form.businessType ? "#1a1b20" : "#44464f",
                              border: "1px solid transparent",
                            }}
                          >
                            <option value="">Select type</option>
                            <option>Ecommerce</option>
                            <option>SaaS / Tech</option>
                            <option>Coaching / Consulting</option>
                            <option>Agency</option>
                            <option>Service Business</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label
                            className="block text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-2"
                            htmlFor="role"
                          >
                            Role / Team Needed
                          </label>
                          <input
                            id="role"
                            name="role"
                            type="text"
                            value={form.role}
                            onChange={handleChange}
                            placeholder="e.g. Customer Support"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{
                              backgroundColor: "#f4f3f9",
                              color: "#1a1b20",
                              border: "1px solid transparent",
                            }}
                            onFocus={(e) =>
                              (e.currentTarget.style.border =
                                "1px solid #fed65b")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.border =
                                "1px solid transparent")
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider text-[#44464f] mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your needs..."
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                          style={{
                            backgroundColor: "#f4f3f9",
                            color: "#1a1b20",
                            border: "1px solid transparent",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.border = "1px solid #fed65b")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.border =
                              "1px solid transparent")
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                        style={{ backgroundColor: "#00113a", color: "#ffffff" }}
                      >
                        Submit Inquiry <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Info Column */}
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Book a Consultation
                </p>
                <h2
                  className="text-3xl font-extrabold mb-2"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "#00113a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Speak With Our Team
                </h2>
                <p className="text-sm text-[#44464f] mb-8">
                  Prefer to talk? Book a free 30-minute strategy call directly with
                  one of our talent consultants.
                </p>

                {/* Calendar Placeholder */}
                <div
                  className="p-10 rounded-2xl mb-8 text-center"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.06)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "#00113a" }}
                  >
                    <Phone size={28} style={{ color: "#fed65b" }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#00113a",
                    }}
                  >
                    Book a Free 30-Min Call
                  </h3>
                  <p className="text-sm text-[#44464f] mb-6">
                    Select a time that works for you and connect with a principal
                    consultant to discuss your talent needs.
                  </p>
                  <a
                    href="mailto:hello@aeternum.com"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                    style={{ backgroundColor: "#fed65b", color: "#00113a" }}
                  >
                    Schedule a Call <ArrowRight size={18} />
                  </a>
                </div>

                {/* Contact Details */}
                <div
                  className="p-8 rounded-2xl space-y-5"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.06)",
                  }}
                >
                  <h3
                    className="font-bold text-[#00113a] mb-4"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Global Reach, Bespoke Precision
                  </h3>
                  {[
                    {
                      icon: <Mail size={18} />,
                      label: "Email",
                      value: "hello@aeternum.com",
                      href: "mailto:hello@aeternum.com",
                    },
                    {
                      icon: <MapPin size={18} />,
                      label: "Global Hubs",
                      value: "London · New York · Singapore",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "#f4f3f9",
                          color: "#00113a",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-[#44464f] mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-[#00113a] hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[#1a1b20]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ backgroundColor: "#f4f3f9" }} className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 rounded-2xl text-center"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.04)",
                  }}
                >
                  <div
                    className="text-4xl font-extrabold mb-2"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#00113a",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#44464f]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Path Forward */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                What Happens Next
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                The Path Forward
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pathForward.map((item) => (
                <div
                  key={item.step}
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    className="text-4xl font-extrabold mb-4"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#fed65b",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
