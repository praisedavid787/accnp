export default function MissionVision() {
  return (
    <section className="pt-16 md:pt-[83px] pb-20 md:pb-[135px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-4 sm:gap-6">
        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8">
            <div className="w-12 h-12 bg-[#D4EBFF] rounded-[7px] flex items-center justify-center mb-3 sm:mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/mission-icon.svg" alt="" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-brand-primary text-[32px] leading-[132%] font-semibold mb-2 sm:mb-3">Our Mission</h3>
            <p className="text-[#565656] font-light text-[16px] leading-[132%]">
              To empower businesses and individuals with accurate financial information, strategic insight, and dependable
              partnership that drives sustainable growth.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8">
            <div className="w-12 h-12 bg-[#D4EBFF] rounded-[7px] flex items-center justify-center mb-3 sm:mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/vision-icon.svg" alt="" width={31} height={22} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-brand-primary text-[32px] leading-[132%] font-semibold mb-2 sm:mb-3">Our Vision</h3>
            <p className="text-[#565656] font-light text-[16px] leading-[132%]">
              To become a trusted leader in accounting and financial consulting across Nigeria and beyond—known for precision,
              integrity, and measurable impact.
            </p>
          </div>
        </div>

        {/* Values card */}
        <div className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8">
          <div className="w-12 h-12 bg-[#D4EBFF] rounded-[7px] flex items-center justify-center mb-3 sm:mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/mission-icon.svg" alt="" width={32} height={32} className="w-8 h-8 object-contain" />
          </div>
          <h3 className="text-brand-primary text-[32px] leading-[132%] font-semibold mb-4 sm:mb-6">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { name: "Accuracy", desc: "Precision is non-negotiable. Every number matters." },
              { name: "Integrity", desc: "We operate with transparency and strict confidentiality." },
              { name: "Partnership", desc: "Not just a service provider, but a strategic ally." },
              { name: "Growth", desc: "Focus on long-term value creation, not short-term fixes." },
            ].map(({ name, desc }) => (
              <div key={name}>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 flex-shrink-0 text-[#00213D]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7232 0.815099C18.6613 0.502396 19.5538 1.39488 19.2411 2.33299L14.1845 17.5028C13.8561 18.488 12.5163 18.6192 12.0029 17.7165L8.9078 12.2733C8.64089 11.8039 8.25223 11.4153 7.78283 11.1484L2.33973 8.05327C1.437 7.53995 1.56824 6.20009 2.55342 5.8717L17.7232 0.815099Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10.7856 9.27051L8.78564 11.2705" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-display text-[#00213D] text-[20px] leading-[132%] font-semibold">{name}</span>
                </div>
                <p className="text-[#565656] font-light text-[16px] leading-[132%] pl-5 sm:pl-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
