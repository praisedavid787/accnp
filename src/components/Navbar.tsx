"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-brand-header fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 h-16 sm:h-20 md:h-[92px] flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-[16px] font-light text-black hover:text-brand-primary transition-colors">Services</Link>
          <Link href="/about" className="text-[16px] font-light text-black hover:text-brand-primary transition-colors">About Us</Link>
          <Link href="#contact" className="bg-brand-cta text-white text-[16px] font-light px-[40px] py-2.5 rounded-md hover:opacity-90 transition-opacity">
            Book a Consultation
          </Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg px-4 py-4 flex flex-col gap-3 md:hidden z-50">
          <Link href="/" className="text-[16px] font-light text-black py-1" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" className="text-[16px] font-light text-black py-1" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="#contact" className="bg-brand-primary text-white text-[16px] font-light px-[40px] py-2.5 rounded-md text-center" onClick={() => setOpen(false)}>
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
