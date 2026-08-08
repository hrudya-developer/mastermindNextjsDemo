"use client";

import { useEffect, useRef, useState } from "react";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";

export default function Navbar() {
  const navbarRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  /* --------------------------------
     SCROLL EFFECT
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------
     OUTSIDE CLICK + ESCAPE
  -------------------------------- */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* --------------------------------
     DROPDOWN
  -------------------------------- */
  const toggleDropdown = (name) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  /* --------------------------------
     CLOSE NAVIGATION
  -------------------------------- */
  const closeNavigation = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      ref={navbarRef}
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full shadow-sm
        transition-all
        duration-300
        ${
          scrolled
            ? "border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,35,100,0.08)] backdrop-blur-xl"
            : "border-slate-100/80 bg-white"
        }
      `}
    >
      <nav
        aria-label="Primary navigation"
        className={`
          mx-auto
          flex
          w-full
          max-w-9xl
          items-center
          justify-between
          px-5
          transition-all
          duration-300
          sm:px-6
          md:px-10
          lg:px-16
          xl:px-20
          ${
            scrolled
              ? "min-h-[68px]"
              : "min-h-[76px]"
          }
        `}
      >
        {/* Logo */}
        <Logo
          scrolled={scrolled}
          onClick={closeNavigation}
        />

        {/* Desktop Navigation */}
        <DesktopNavbar
          activeDropdown={activeDropdown}
          onToggleDropdown={toggleDropdown}
          onClose={closeNavigation}
        />

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          className="
            relative
            flex
            h-10
            w-10
            flex-col
            items-center
            justify-center
            gap-1.5
            rounded-xl
            bg-slate-100
            transition
            duration-300
            hover:bg-slate-200
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#3154ee]
            md:hidden
          "
        >
          {/* line 1 */}
          <span
            className={`
              block
              h-0.5
              w-5
              rounded-full
              bg-slate-900
              transition-all
              duration-300
              ${
                mobileOpen
                  ? "translate-y-2 rotate-45"
                  : ""
              }
            `}
          />

          {/* line 2 */}
          <span
            className={`
              block
              h-0.5
              w-5
              rounded-full
              bg-slate-900
              transition-all
              duration-300
              ${
                mobileOpen
                  ? "opacity-0"
                  : ""
              }
            `}
          />

          {/* line 3 */}
          <span
            className={`
              block
              h-0.5
              w-5
              rounded-full
              bg-slate-900
              transition-all
              duration-300
              ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavbar
        isOpen={mobileOpen}
        onClose={closeNavigation}
      />
    </header>
  );
}