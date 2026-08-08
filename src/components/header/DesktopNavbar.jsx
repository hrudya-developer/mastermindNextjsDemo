import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { courseLinks, exploreLinks, studentLinks } from "./navigationData";

export default function DesktopNavbar({ activeDropdown, onToggleDropdown, onClose }) {
  return (
    <ul className="hidden items-center gap-5 text-sm font-normal text-darkGray md:flex lg:text-base">
      <li>
        <Link href="/" onClick={onClose} className="rounded-sm transition-colors hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]">Home</Link>
      </li>

      <li>
        <Link href="/#about" onClick={onClose} className="rounded-sm transition-colors hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]">About</Link>
      </li>

      <DropdownMenu id="courses-menu" label="Courses" links={courseLinks} isOpen={activeDropdown === "courses"} onToggle={() => onToggleDropdown("courses")} onClose={onClose} />

      <DropdownMenu id="student-menu" label="Student Zone" links={studentLinks} isOpen={activeDropdown === "student"} onToggle={() => onToggleDropdown("student")} onClose={onClose} />

      <DropdownMenu id="explore-menu" label="Explore" links={exploreLinks} isOpen={activeDropdown === "explore"} onToggle={() => onToggleDropdown("explore")} onClose={onClose} />

      <li>
        <Link href="/#contactForm" onClick={onClose} className="rounded-sm transition-colors hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]">Contact</Link>
      </li>

      <li>
        <Link href="/sendOtpLogin" onClick={onClose} className="inline-flex items-center justify-center rounded-md bg-[rgb(5,23,106)] px-4 py-2 font-semibold text-white transition-colors hover:bg-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))] focus-visible:ring-offset-2">Login</Link>
      </li>
    </ul>
  );
}