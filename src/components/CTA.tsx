import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative z-10 -mb-[103px]" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-brand-header rounded-[10px] pt-10 sm:pt-14 pb-[75px] px-5 sm:px-10 md:px-16 text-center">
          <h2 className="text-[#00213D] text-[36px] font-bold leading-[132%] mb-3">
            Ready to Gain Financial Confidence?
          </h2>
          <p className="text-[#565656] text-[18px] font-normal leading-[132%] mb-6 sm:mb-8 mx-auto max-w-[636px]">
            Book a consultation today and discover how Accurate Number Partners
            can support your financial success.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-cta text-white text-[18px] font-normal leading-[132%] px-[60px] py-[13px] rounded-[5px] hover:opacity-90 transition-opacity"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
