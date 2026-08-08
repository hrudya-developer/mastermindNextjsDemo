import Link from "next/link";

export default function DropdownMenu({ id, label, links, isOpen, onToggle, onClose }) {
  return (
    <li className="relative">
      <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={onToggle} className="flex items-center gap-1 rounded-sm transition-colors hover:text-[rgb(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]">
        {label}
        <span aria-hidden="true" className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <ul id={id} className="absolute left-0 top-full mt-3 min-w-48 overflow-hidden rounded-md border border-gray-100 bg-white py-2 shadow-lg">
          {links.map((item) => (
            <li key={`${item.label}-${item.href}`}>
              <Link href={item.href} onClick={onClose} className="block whitespace-nowrap px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-[rgb(var(--primary))] hover:text-white focus:bg-[rgb(var(--primary))] focus:text-white focus:outline-none">{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}