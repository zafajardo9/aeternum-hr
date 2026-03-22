"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/why-aeternum", label: "Why Aeternum" },
  { href: "/process", label: "Process" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      {/* Floating pill */}
      <div
        className="max-w-6xl mx-auto flex items-center justify-between h-14 px-5 rounded-full"
        style={{
          background: "rgba(0, 17, 58, 0.80)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 17, 58, 0.35)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className="text-lg font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Aeternum
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-widest hidden sm:block"
            style={{ color: "#fed65b" }}
          >
            Talent Solutions
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: isActive ? "#fed65b" : "rgba(255,255,255,0.75)" }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:brightness-110"
            style={{ backgroundColor: "#fed65b", color: "#00113a" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors"
          style={{ color: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown — floating card */}
      {mobileOpen && (
        <div
          className="lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl p-5"
          style={{
            background: "rgba(0, 17, 58, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 8px 32px rgba(0, 17, 58, 0.4)",
          }}
        >
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? "#fed65b" : "rgba(255,255,255,0.80)",
                      backgroundColor: isActive ? "rgba(254,214,91,0.08)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 rounded-full text-sm font-semibold transition-all hover:brightness-110"
            style={{ backgroundColor: "#fed65b", color: "#00113a" }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
