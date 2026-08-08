import Image from "next/image";
import Link from "next/link";

export default function Logo({ scrolled, onClick }) {
  return (
    <Link href="/" aria-label="Go to homepage" onClick={onClick} className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))] focus-visible:ring-offset-2">
      <Image src="/assets/logo-256.png" alt="MasterMind Academy" width={140} height={100} priority sizes="(max-width: 640px) 64px, 128px" className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-11" : "h-16 lg:h-20"}`} />
    </Link>
  );
}