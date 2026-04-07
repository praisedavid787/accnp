import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/assets/logo-white.svg"
        alt="Accurate Numbers Partners"
        width={160}
        height={48}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
}
