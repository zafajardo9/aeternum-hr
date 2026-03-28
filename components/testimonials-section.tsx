"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      style={{ backgroundColor: "#faf8ff" }}
      className="py-24 lg:py-32 overflow-hidden"
    >
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
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#00113a",
                letterSpacing: "-0.02em",
              }}
            >
              Trusted by High-Growth Agencies.
            </h2>
            <p className="text-base text-[#44464f] leading-relaxed mb-10">
              See how Aeternum is transforming operations for modern
              enterprises and niche consultancies globally.
            </p>
            <div className="flex gap-3">
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white"
                style={{
                  border: "1px solid rgba(0,17,58,0.15)",
                  color: "#00113a",
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white"
                style={{
                  border: "1px solid rgba(0,17,58,0.15)",
                  color: "#00113a",
                }}
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
                    <Star
                      key={s}
                      size={16}
                      fill="#fed65b"
                      style={{ color: "#fed65b" }}
                    />
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
                    <p
                      className="font-bold text-sm text-[#00113a]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs text-[#44464f] uppercase tracking-widest">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
