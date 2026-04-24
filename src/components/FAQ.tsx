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

function FAQItem({ q, a, last, first }: { q: string; a: string; last?: boolean; first?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${last ? "" : "border-b-[1.5px] border-[#FFFFFF4D]"} ${first ? "pt-0 pb-3 sm:pb-4" : "py-3 sm:py-4"} max-w-[406px]`}>
      <button
        className="w-full flex items-center justify-between gap-3 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white text-[16px] font-normal leading-[132%]">{q}</span>
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-[5px] border border-white/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/toggle-icon.svg"
            alt=""
            width={8}
            height={5}
            className="block transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </span>
      </button>
      <div className={`faq-body${open ? " open" : ""}`}>
        <div>
          <p className="pt-2 pb-1 text-[#D4EBFF] text-[16px] font-light leading-[132%]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const left = faqs.slice(0, 4);
  const right = faqs.slice(4);

  return (
    <section className="bg-brand-primary pt-[119px] pb-[119px]" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-white text-[36px] font-semibold leading-[132%] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div>{left.map((f, i) => <FAQItem key={f.q} {...f} first={i === 0} last={i === left.length - 1} />)}</div>
          <div className="flex flex-col items-end">{right.map((f, i) => <FAQItem key={f.q} {...f} first={i === 0} last={i === right.length - 1} />)}</div>
        </div>
      </div>
    </section>
  );
}
