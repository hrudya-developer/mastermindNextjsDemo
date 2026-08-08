"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="relative z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className="
            mx-auto
            flex
            min-h-[62px]
            w-full
            max-w-[900px]
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200/80
            bg-white
            px-4
            py-2.5
            shadow-[0_10px_30px_rgba(5,25,70,0.10)]
          "
        >
          <Link href="/" onClick={closeMenu} className="shrink-0">
            <Image
              src="/assets/logo-256.png"
              alt="MasterMind"
              width={100}
              height={60}
              priority
              className="h-auto w-[72px] object-contain sm:w-[82px]"
            />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="
                hidden
                min-h-10
                items-center
                justify-center
                rounded-xl
                bg-[#0b2a72]
                px-5
                text-xs
                font-semibold
                text-white
                shadow-[0_6px_16px_rgba(11,42,114,0.18)]
                transition
                hover:bg-[#071e59]
                min-[400px]:inline-flex
              "
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                text-[#07184f]
                transition
                hover:border-blue-200
                hover:bg-blue-50
              "
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={closeMenu} />
    </>
  );
}

function HamburgerIcon({ open }) {
  return (
    <span className="relative block h-5 w-5">
      <span
        className={`
          absolute left-0 h-[2px] w-5 rounded-full bg-current
          transition-all duration-300
          ${open ? "top-[9px] rotate-45" : "top-[3px]"}
        `}
      />

      <span
        className={`
          absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-current
          transition-all duration-300
          ${open ? "scale-x-0 opacity-0" : ""}
        `}
      />

      <span
        className={`
          absolute left-0 h-[2px] w-5 rounded-full bg-current
          transition-all duration-300
          ${open ? "top-[9px] -rotate-45" : "top-[15px]"}
        `}
      />
    </span>
  );
}