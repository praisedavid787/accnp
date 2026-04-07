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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <FooterLogo />
          <p className="text-blue-200 text-xs leading-relaxed max-w-xs">
            Precise financial management and strategic insight that supports growth.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#01417A] text-white text-xs font-medium px-4 py-2.5 rounded-[5px] w-fit hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Services", "Frequently Asked Questions"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-blue-200 text-xs hover:text-white transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "Twitter", href: "#" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="flex items-center gap-2 text-blue-200 text-xs hover:text-white transition-colors">
                  <span className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-[9px] font-bold text-white">
                    {label[0]}
                  </span>
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
