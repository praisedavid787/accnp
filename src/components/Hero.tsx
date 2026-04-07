import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 md:px-12 pt-[120px] sm:pt-[160px] md:pt-[202px] max-w-6xl mx-auto w-full relative z-10 -mb-[290px]">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-[20px]">
        {/* Left: Headline */}
        <div className="flex-[1.5] mt-6">
          <h1 className="text-[52px] font-extrabold text-brand-primary leading-[100%]">
            Financial Clarity.<br />Trusted Partnership.
          </h1>
        </div>

        {/* Right: Avatars + Description */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center">
            <div className="w-[47px] h-[56px] rounded-lg overflow-hidden mr-4 flex-shrink-0">
              <Image src="/assets/tiny-1.png" alt="Team member" width={47} height={56} className="w-full h-full object-cover" priority />
            </div>
            <div className="w-[47px] h-[56px] rounded-lg overflow-hidden mr-[10px] flex-shrink-0">
              <Image src="/assets/tiny-2.png" alt="Team member" width={47} height={56} className="w-full h-full object-cover" priority />
            </div>
            <div className="w-[47px] h-[47px] rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/tiny-3.png" alt="Team member" width={47} height={47} className="w-full h-full object-cover" priority />
            </div>
          </div>
          <p className="text-black text-[18px] font-light leading-[132%]">
            We help businesses and individuals gain clarity,
            ensure compliance, and make smarter financial decisions.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="mt-6 sm:mt-8 w-full h-[488px] rounded-[20px] border-[3px] border-[#D4EBFF66] overflow-hidden relative">
        <Image src="/assets/hero.png" alt="Team photo" fill className="object-cover" priority />
      </div>
    </section>
  );
}
