import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";
import { mobileMenuItems } from "./mobileNavData";

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-40
        transition-all
        duration-300

        ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }
      `}
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        className="
          absolute
          inset-0
          h-full
          w-full
          bg-[#020a2b]/30
          backdrop-blur-[2px]
        "
      />

      <div
        className={`
          absolute
          left-3
          right-3
          top-[112px]
          mx-auto
          w-auto
          max-w-[900px]
          max-h-[calc(100dvh-110px)]
          overflow-y-auto
          rounded-[20px]
          border
          border-slate-200/80
          bg-white/95
          p-3
          shadow-[0_24px_60px_rgba(3,18,62,0.20)]
          backdrop-blur-xl
          transition-all
          duration-300
          ease-out

          sm:left-5
          sm:right-5
          sm:top-[123px]
          sm:p-4

          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }
        `}
      >
        <div className="flex items-center justify-between px-2 pb-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Menu
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              Quick access
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-slate-100
              text-[#0b2a72]
              transition
              hover:bg-blue-50
            "
          >
            ×
          </button>
        </div>

        <div className="mt-1 h-px bg-slate-100" />

        <nav className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {mobileMenuItems.map((item, index) => (
            <MobileMenuItem
              key={item.label}
              item={item}
              active={index === 0}
              onClick={onClose}
            />
          ))}
        </nav>

        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
          <Link
            href="/login"
            onClick={onClose}
            className="
              inline-flex
              min-h-10
              items-center
              justify-center
              rounded-xl
              border
              border-blue-100
              bg-blue-50
              px-4
              text-xs
              font-semibold
              text-[#0b2a72]
              transition
              hover:bg-blue-100
            "
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={onClose}
            className="
              inline-flex
              min-h-10
              items-center
              justify-center
              rounded-xl
              bg-[#0b2a72]
              px-4
              text-xs
              font-semibold
              text-white
              shadow-[0_8px_18px_rgba(11,42,114,0.20)]
              transition
              hover:bg-[#071e59]
            "
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}