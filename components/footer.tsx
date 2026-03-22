import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#00113a" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span
                className="text-xl font-bold tracking-tight text-white block"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Aeternum
              </span>
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#fed65b" }}>
                Talent Solutions
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Elevating global operations through architectural talent solutions and high-performance offshore teams.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#fed65b" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/why-aeternum", label: "Why Aeternum" },
                { href: "/process", label: "Process" },
                { href: "/faqs", label: "FAQs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#fed65b" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Customer Support",
                "Sales Support",
                "Virtual Assistants",
                "Ecommerce Support",
                "Admin & Back Office",
                "Retention Teams",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#fed65b" }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Aeternum Talent Solutions. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            style={{ backgroundColor: "#fed65b", color: "#00113a" }}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </footer>
  );
}
