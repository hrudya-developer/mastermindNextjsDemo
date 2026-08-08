import Link from "next/link";
import { courseLinks, exploreLinks, studentLinks } from "./navigationData";

function MobileSection({ title, links, onClose }) {
  return (
    <li>
      <details>
        <summary className="cursor-pointer list-none rounded-md px-3 py-2 hover:bg-gray-100">{title} <span aria-hidden="true">▾</span></summary>

        <ul className="ml-4 border-l border-gray-200 pl-3">
          {links.map((item) => (
            <li key={`${item.label}-${item.href}`}>
              <Link href={item.href} onClick={onClose} className="block rounded-md px-3 py-2 hover:bg-gray-100">{item.label}</Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default function MobileNavbar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-gray-200 bg-white px-6 py-4 shadow-lg md:hidden">
      <ul className="space-y-1 text-sm font-medium text-gray-800">
        <li>
          <Link href="/" onClick={onClose} className="block rounded-md px-3 py-2 hover:bg-gray-100">Home</Link>
        </li>

        <li>
          <Link href="/#about" onClick={onClose} className="block rounded-md px-3 py-2 hover:bg-gray-100">About</Link>
        </li>

        <MobileSection title="Courses" links={courseLinks} onClose={onClose} />

        <MobileSection title="Student Zone" links={studentLinks} onClose={onClose} />

        <MobileSection title="Explore" links={exploreLinks} onClose={onClose} />

        <li>
          <Link href="/#contactForm" onClick={onClose} className="block rounded-md px-3 py-2 hover:bg-gray-100">Contact</Link>
        </li>

        <li className="pt-2">
          <Link href="/sendOtpLogin" onClick={onClose} className="flex w-full items-center justify-center rounded-md bg-[rgb(5,23,106)] px-4 py-3 font-semibold text-white hover:bg-[rgb(var(--primary))]">Login</Link>
        </li>
      </ul>
    </nav>
  );
}