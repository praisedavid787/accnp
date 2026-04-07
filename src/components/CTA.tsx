import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative z-10 -mb-[103px]" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-brand-header rounded-[10px] py-10 sm:py-14 px-5 sm:px-10 md:px-16 text-center">
          <h2 className="text-[#00213D] text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Ready to Gain Financial Confidence?
          </h2>
          <p className="text-[#565656] text-sm mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
            Book a consultation today and discover how Accurate Number Partners
            can support your financial success.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-brand-cta text-white font-semibold text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
