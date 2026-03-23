import Image from "next/image";
import Link from "next/link";
import {
  mainNavLinks,
  footerServiceLinks,
  footerLegalLinks,
} from "@/lib/nav-links";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#00113a" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/ATS-logo-white.png"
                alt="Aeternum Talent Solutions"
                width={160}
                height={48}
                className="h-auto"
                priority
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Elevating global operations through architectural talent solutions
              and high-performance offshore teams.
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
              {mainNavLinks.map((link) => (
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
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
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

          {/* Legal */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#fed65b" }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLegalLinks.map((link) => (
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
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Aeternum Talent Solutions. All rights
            reserved.
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
