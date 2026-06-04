import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function AboutNav() {
  // Rest position: 68px below the hero photos; the blue section starts 108px
  // below the photos, so the 67px-tall card overlaps the blue band by 27px.
  return (
    <div className="sticky top-5 md:top-6 z-50 px-4 sm:px-6 md:px-12 mt-[68px] mb-[-27px]">
      <div className="mx-auto w-full max-w-[754px] bg-white border border-[#C6C6C6]/40 shadow-[2px_8px_10px_rgba(0,0,0,0.15)] rounded-[10px] flex items-center px-4 py-3 md:pl-[30px] md:pr-[29px] md:py-[15px] md:h-[67px]">
        <div className="flex items-center justify-center md:justify-between w-full gap-x-4 md:gap-[42px]">
          <div className="flex flex-nowrap items-center justify-center gap-x-3 sm:gap-x-5 md:gap-[52px]">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`${l.label === "Contact Us" ? "md:hidden" : ""} text-black font-light text-[14px] sm:text-[16px] leading-[132%] whitespace-nowrap hover:text-brand-primary transition-colors`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center bg-brand-cta text-white font-light text-[16px] leading-[132%] px-[40px] py-[8px] rounded-[5px] whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
