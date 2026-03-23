import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Brain,
  Network,
  Zap,
  CheckCircle,
  Users,
} from "lucide-react";

const differences = [
  {
    icon: <Brain size={28} />,
    title: "Cognitive Alignment",
    desc: "We utilize proprietary behavioral assessments to ensure every candidate aligns with your specific organizational DNA, not just the job description.",
  },
  {
    icon: <Network size={28} />,
    title: "Curated Networks",
    desc: "Access to an exclusive, non-public talent pool of high-performing individuals who aren't active on traditional job boards.",
  },
  {
    icon: <Zap size={28} />,
    title: "Precision Velocity",
    desc: "Our agile framework reduces time-to-hire by 40% while maintaining a placement accuracy that is industry-leading.",
  },
];

const quality = [
  {
    title: "Multi-Tiered Screening",
    desc: "Rigorous technical, behavioral, and cultural vetting stages that filter out 98% of applicants.",
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

const team: { name: string; role: string; profile_image_url: string | null }[] =
  [
    {
      name: "Diana Rose Arcabal",
      role: "Operations Coordinator",
      profile_image_url: "/images/team/diana-arcabal.png",
    },
    {
      name: "Diether Paul Deygabi",
      role: "Social Media & Brand Growth Lead",
      profile_image_url: "/images/team/diether-paul.jpg",
    },
    {
      name: "Mark Joshua Bano",
      role: "Client Relations & Training Manager",
      profile_image_url: "/images/team/mark-joshua.jpg",
    },
    {
      name: "Miguel Gabriel",
      role: "Talent Acquisition & Screening Specialist",
      profile_image_url: "/images/team/miguel-gabriel.jpg",
    },
  ];

export default function AboutPage() {
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
                "radial-gradient(circle at 30% 60%, #fed65b 0%, transparent 55%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#fed65b" }}
              >
                About Us
              </p>
              <h1
                className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "-0.02em",
                }}
              >
                The Architects of{" "}
                <span style={{ color: "#fed65b" }}>Enduring Teams.</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                Aeternum Talent Solutions isn&apos;t just a recruitment firm; we
                are the strategic partners who build the human infrastructure
                for tomorrow&apos;s market leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section
          style={{ backgroundColor: "#faf8ff" }}
          className="py-24 lg:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#735c00" }}
                >
                  Our Story
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "#00113a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Built on Legacy.
                </h2>
                <div className="space-y-5 text-base text-[#44464f] leading-relaxed">
                  <p>
                    Born from a desire to move beyond the transactional nature
                    of the staffing industry, Aeternum was founded on the
                    principle of &ldquo;Architectural Recruitment.&rdquo; We
                    believe that a team is not just a collection of skills, but
                    a carefully engineered structure.
                  </p>
                  <p>
                    Since our inception, we have served as the silent force
                    behind high-growth businesses, delivering talent that
                    doesn&apos;t just fill a seat, but evolves the organization
                    — driving sustainable, long-term success.
                  </p>
                  <p>
                    We specialize in building stable, high-performing remote
                    teams with pre-trained Filipino professionals who are ready
                    to contribute from day one.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {/* Mission */}
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(0,17,58,0.06)" }}
                  >
                    <span className="text-lg">🎯</span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#00113a",
                    }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed">
                    To bridge the gap between human potential and organizational
                    ambition by curating elite talent ecosystems that drive
                    sustainable, long-term success.
                  </p>
                </div>

                {/* Vision */}
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(0,17,58,0.06)" }}
                  >
                    <span className="text-lg">🔭</span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#00113a",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed">
                    To redefine the standard of excellence in human capital
                    management, becoming the global benchmark for talent
                    architecture and remote team performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Aeternum Difference */}
        <section
          style={{ backgroundColor: "#f4f3f9" }}
          className="py-24 lg:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                What Sets Us Apart
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-manrope)",
                  color: "#00113a",
                  letterSpacing: "-0.02em",
                }}
              >
                The Aeternum Difference
              </h2>
              <p className="text-base text-[#44464f] max-w-xl mx-auto">
                We go beyond traditional staffing with proprietary systems
                designed for precision, speed, and long-term success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differences.map((item) => (
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
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#00113a",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#44464f] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uncompromising Quality */}
        <section className="gradient-hero py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#fed65b" }}
                >
                  Our Standard
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Uncompromising Quality
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  Every talent asset that reaches you has passed through a
                  multi-layer validation process designed to ensure performance,
                  cultural fit, and long-term retention.
                </p>
              </div>

              <div className="space-y-5">
                {quality.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 p-6 rounded-2xl"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <CheckCircle
                      size={22}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#fed65b" }}
                    />
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

        {/* Our People */}
        <section
          style={{ backgroundColor: "#faf8ff" }}
          className="py-24 lg:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#735c00" }}
              >
                Our Leadership
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-manrope)",
                  color: "#00113a",
                  letterSpacing: "-0.02em",
                }}
              >
                Our People
              </h2>
              <p className="text-base text-[#44464f] max-w-xl mx-auto">
                The masters behind the craft. Our consultants bring decades of
                specialized expertise to your search.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="p-8 rounded-2xl text-center"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 60px rgba(26,27,32,0.05)",
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden shrink-0 relative"
                    style={{ backgroundColor: "#00113a" }}
                  >
                    {member.profile_image_url ? (
                      <Image
                        src={member.profile_image_url}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={32} style={{ color: "#fed65b" }} />
                      </div>
                    )}
                  </div>
                  <h3
                    className="font-bold text-[#00113a] mb-1"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#44464f]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ backgroundColor: "#f4f3f9" }}
          className="py-24 lg:py-32"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#735c00" }}
            >
              Partner With Us
            </p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#00113a",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Architect Your Legacy?
            </h2>
            <p className="text-base text-[#44464f] leading-relaxed mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build an elite team that propels
              your organization toward its highest ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                style={{ backgroundColor: "#00113a", color: "#ffffff" }}
              >
                Book a Free Call <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all"
                style={{
                  border: "1px solid rgba(0,17,58,0.2)",
                  color: "#00113a",
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
