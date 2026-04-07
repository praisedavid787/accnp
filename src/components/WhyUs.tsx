import Image from "next/image";

const reasons = [
  "Reliable and precise financial reporting",
  "Personalized service aligned with goals",
  "Proactive tax planning and compliance",
  "Deep understanding of Nigerian landscape",
];

export default function WhyUs() {
  return (
    <section className="bg-brand-primary pt-[360px] sm:pt-[380px] md:pt-[399px] pb-[88px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-white text-[30px] sm:text-[33px] md:text-[36px] font-semibold text-center mb-8 sm:mb-10">
          Why Businesses Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[48px] max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center">
              <Image src="/assets/send.svg" alt="" width={20} height={20} className="flex-shrink-0 mr-[9px]" />
              <span className="text-[#D4EBFF] text-sm sm:text-base md:text-[18px] font-light">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
