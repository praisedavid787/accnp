"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Strategic insights that help you grow with confidence. Strategic insights that help you grow with confidence.",
    name: "Managing Director",
    company: "Procter & Gamble",
  },
  {
    quote:
      "Strategic insights that help you grow with confidence. Strategic insights that help you grow with confidence.",
    name: "CFO",
    company: "Techy Hub",
  },
  {
    quote:
      "Strategic insights that help you grow with confidence. Strategic insights that help you grow with confidence.",
    name: "Head of Finance",
    company: "Kara Kata",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl font-bold text-brand-primary text-center mb-10">
          Client Testimonials
        </h2>

        {/* Desktop: all three */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-4">
              <p className="text-[#565656] text-sm leading-relaxed">{t.quote}</p>
              <div>
                <p className="text-sm font-bold text-[#00213D]">{t.name}</p>
                <p className="text-xs text-[#00213D]">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="flex flex-col gap-4 mb-6">
            <p className="text-[#565656] text-sm leading-relaxed">{testimonials[active].quote}</p>
            <div>
              <p className="text-sm font-bold text-[#00213D]">{testimonials[active].name}</p>
              <p className="text-xs text-[#00213D]">{testimonials[active].company}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-brand-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop carousel dots */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-brand-primary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
