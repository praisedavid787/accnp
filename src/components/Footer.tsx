import Link from "next/link";
import Image from "next/image";

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/logo.svg"
        alt="Accurate Numbers Partners"
        width={160}
        height={48}
        className="h-10 w-auto"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-primary pt-[227px] pb-10 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-end gap-8 md:gap-[143px]">
        {/* Brand */}
        <div className="flex flex-col">
          <FooterLogo />
          <p className="text-white text-[14px] font-light leading-[132%] mt-[24px] mb-[25px] max-w-[296px]">
            Precise financial management and strategic insight that supports growth.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center self-start bg-[#01417A] text-white text-[14px] font-light leading-[132%] px-[40px] py-[8px] rounded-[5px] hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-white text-[16px] font-semibold leading-[132%] mb-[8px]">Quick Links</h4>
          <ul>
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/#services" },
              { label: "Frequently Asked Questions", href: "/#faq" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-white text-[14px] font-light leading-[218%] hover:opacity-80 transition-opacity">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-display text-white text-[16px] font-semibold leading-[132%] mb-[8px]">Follow Us</h4>
          <ul>
            {[
              { label: "LinkedIn", icon: "/assets/linkedin.svg", href: "https://www.linkedin.com/company/accurate-numbers-partner/" },
              { label: "Instagram", icon: "/assets/instagram.svg", href: "https://www.instagram.com/accuratenumberspartners?igsh=MTQ5ZDVpcmUzemZ6Nw%3D%3D&utm_source=qr" },
              { label: "Twitter", icon: "/assets/twitter.svg", href: "#" },
            ].map(({ label, icon, href }) => (
              <li key={label}>
                <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-[14px] font-light leading-[218%] hover:opacity-80 transition-opacity">
                  <img src={icon} alt={label} width={16} height={16} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
