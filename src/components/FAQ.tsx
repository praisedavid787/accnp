"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Who do you serve?",
    a: "We serve entrepreneurs, small and medium-sized businesses, and individuals who value professionalism, integrity, and forward-thinking partnership.",
  },
  {
    q: "Can you handle both business and personal taxes?",
    a: "Yes, we handle both business and personal tax preparation, filing, and strategic tax planning.",
  },
  {
    q: "Is my financial information secure?",
    a: "Absolutely. We operate with strict confidentiality and adhere to the highest standards of data privacy and security.",
  },
  {
    q: "Can you help my startup set up financial systems from scratch?",
    a: "Yes. We specialise in helping startups establish solid financial foundations, from bookkeeping systems to compliance frameworks.",
  },
  {
    q: "Do you offer consultations?",
    a: "Yes. Book a discovery call and we'll discuss your specific needs and how we can best support your financial goals.",
  },
  {
    q: "How do I know which service I need?",
    a: "During your consultation, we'll assess your situation and recommend the most suitable services for your business or personal needs.",
  },
  {
    q: "Do you offer ongoing monthly services?",
    a: "Yes, we offer flexible ongoing monthly engagements tailored to your business requirements.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#FFFFFF4D] py-3 sm:py-4">
      <button
        className="w-full flex items-center justify-between gap-3 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white text-xs sm:text-sm font-medium">{q}</span>
        <span className="text-white flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-blue-400 flex items-center justify-center text-xs">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="mt-2 sm:mt-3 text-blue-100 text-xs sm:text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const left = faqs.slice(0, 4);
  const right = faqs.slice(4);

  return (
    <section className="bg-brand-primary py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-8 sm:mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
          <div>{left.map((f) => <FAQItem key={f.q} {...f} />)}</div>
          <div>{right.map((f) => <FAQItem key={f.q} {...f} />)}</div>
        </div>
      </div>
    </section>
  );
}
