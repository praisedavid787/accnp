import Image from "next/image";

export default function AboutHero() {
  return (
    // pt clears the fixed Navbar (h-16/20/[92px]) plus the hero's own offset
    <section className="px-4 sm:px-6 md:px-12 pt-[104px] sm:pt-[136px] md:pt-[172px] pb-16 md:pb-[108px] max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-10">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-[40px] sm:text-[46px] md:text-[52px] font-extrabold text-brand-primary leading-[100%] mb-4 sm:mb-6">
            Confidence Through<br />Accuracy
          </h1>
          <p className="text-black font-light text-[18px] leading-[132%] max-w-[535px]">
            Accurate Number Partners was founded on a simple belief:
            financial accuracy builds confidence.
          </p>
        </div>

        {/* Right: Two photos */}
        <div className="flex gap-8 md:justify-end flex-shrink-0">
          <div className="flex-1 md:flex-none aspect-[187/367] md:w-[clamp(140px,17vw,187px)] lg:w-[187px] rounded-2xl overflow-hidden">
            <Image src="/assets/about-photo-1.png" alt="Team member" width={187} height={367} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 md:flex-none aspect-[187/367] md:w-[clamp(140px,17vw,187px)] lg:w-[187px] rounded-2xl overflow-hidden">
            <Image src="/assets/about-photo-2.png" alt="Team members" width={187} height={367} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
