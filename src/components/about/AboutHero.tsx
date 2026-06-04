import Image from "next/image";
import Logo from "../Logo";

export default function AboutHero() {
  return (
    <div>
      {/* Top logo */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-12 h-16 sm:h-20 md:h-[92px] flex items-center">
        <Logo />
      </div>

      {/* Hero content */}
      <section className="px-4 sm:px-6 md:px-12 pt-10 sm:pt-14 md:pt-20 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
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
            <div className="flex-1 md:flex-none md:w-[187px] aspect-[187/367] md:aspect-auto md:h-[367px] rounded-2xl overflow-hidden">
              <Image src="/assets/about-photo-1.png" alt="Team member" width={187} height={367} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 md:flex-none md:w-[187px] aspect-[187/367] md:aspect-auto md:h-[367px] rounded-2xl overflow-hidden">
              <Image src="/assets/about-photo-2.png" alt="Team members" width={187} height={367} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
