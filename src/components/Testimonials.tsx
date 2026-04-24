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

const n = testimonials.length;

function NavButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex-shrink-0">
      <img
        src="/assets/carousel-nav.svg"
        alt={direction}
        width={22}
        height={22}
        style={direction === "next" ? { transform: "scaleX(-1)" } : undefined}
      />
    </button>
  );
}

function TestimonialCard({ quote, name, company }: { quote: string; name: string; company: string }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#565656] text-[16px] font-light leading-[132%]">{quote}</p>
      <div>
        <p className="font-display text-[16px] font-semibold leading-[132%] text-[#00213D]">{name}</p>
        <p className="font-display text-[16px] font-semibold leading-[132%] text-[#00213D]">{company}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const prev = () => { setDir("prev"); setActive((a) => (a - 1 + n) % n); };
  const next = () => { setDir("next"); setActive((a) => (a + 1) % n); };

  const animClass = dir === "next" ? "animate-slide-in-right" : "animate-slide-in-left";
  const visible = [active % n, (active + 1) % n, (active + 2) % n];

  return (
    <section className="pt-[100px] pb-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-[36px] font-semibold leading-[132%] text-brand-primary text-center mb-10">
          Client Testimonials
        </h2>

        {/* Desktop */}
        <div className="hidden md:flex items-center">
          <NavButton direction="prev" onClick={prev} />
          <div key={active} className={`flex-1 grid grid-cols-3 mx-[35px] gap-[32px] ${animClass}`}>
            {visible.map((i) => (
              <TestimonialCard key={i} {...testimonials[i]} />
            ))}
          </div>
          <NavButton direction="next" onClick={next} />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-[35px]">
          <NavButton direction="prev" onClick={prev} />
          <div key={active} className={`flex-1 ${animClass}`}>
            <TestimonialCard {...testimonials[active]} />
          </div>
          <NavButton direction="next" onClick={next} />
        </div>
      </div>
    </section>
  );
}
