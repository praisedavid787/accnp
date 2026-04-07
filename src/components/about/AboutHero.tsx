import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";

export default function AboutHero() {
  return (
    <div>
      {/* Top logo */}
      <div className="px-4 sm:px-6 md:px-12 pt-5 sm:pt-6">
        <Logo />
      </div>

      {/* Hero content */}
      <section className="px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 pb-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Left */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary leading-tight mb-3 sm:mb-4">
              Confidence Through<br />Accuracy
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Accurate Number Partners was founded on a simple belief:
              financial accuracy builds confidence.
            </p>
          </div>

          {/* Right: Two photos */}
          <div className="flex gap-3 sm:gap-4 md:justify-end">
            <div className="flex-1 md:flex-none md:w-44 lg:w-48 h-44 sm:h-52 md:h-56 rounded-xl overflow-hidden">
              <Image src="/assets/about-photo-1.png" alt="Team member" width={192} height={224} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 md:flex-none md:w-44 lg:w-48 h-44 sm:h-52 md:h-56 rounded-xl overflow-hidden mt-6 sm:mt-8">
              <Image src="/assets/about-photo-2.png" alt="Team members" width={192} height={224} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating nav card */}
      <div className="px-4 sm:px-6 md:px-12 py-4 sm:py-5">
        <div className="bg-white shadow-lg rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-6 max-w-2xl mx-auto">
          {["Home", "About Us", "Services", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : item === "About Us" ? "/about" : "#"}
              className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-brand-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
