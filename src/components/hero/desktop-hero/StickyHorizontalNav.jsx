"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  LogIn,
  Menu,
  X,
} from "lucide-react";

import {
  leftMenu,
} from "./data";

export default function StickyHorizontalNav() {
  const pathname = usePathname();

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const [
    learningHubOpen,
    setLearningHubOpen,
  ] = useState(false);

  /* =====================================================
      CLOSE MENUS AFTER ROUTE CHANGE
  ===================================================== */
  useEffect(() => {
    setMobileMenuOpen(false);
    setLearningHubOpen(false);
  }, [pathname]);

  /* =====================================================
      LOCK BODY ON MOBILE
  ===================================================== */
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =====================================================
      ACTIVE LINK
  ===================================================== */
  const isActiveLink = (href) => {
    if (!href) {
      return false;
    }

    if (href.startsWith("#")) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const isLearningHubActive = (item) =>
    item.children?.some((child) =>
      isActiveLink(child.href)
    );

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}
      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[9999]
          hidden
          px-5
          lg:block
          xl:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[82px]
            w-full
            max-w-[1540px]
            items-center
            rounded-[24px]
            border
            border-white/80
            bg-white/95
            px-5
            shadow-[0_14px_45px_rgba(22,79,165,0.10)]
            backdrop-blur-2xl
            xl:px-7
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="MasterMind Home"
            className="
              flex
              min-w-[230px]
              shrink-0
              items-center
              xl:min-w-[250px]
            "
          >
            <Image
              src="/assets/logo-256.png"
              alt="MasterMind PSC Learning Hub"
              width={240}
              height={80}
              priority
              className="
                h-[68px]
                w-auto
                object-contain
                xl:h-[76px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav
            className="
              flex
              min-w-0
              flex-1
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-1
              "
            >
              {leftMenu.map((item) => {
                const hasChildren =
                  Array.isArray(item.children);

                const active = hasChildren
                  ? isLearningHubActive(item)
                  : isActiveLink(item.href);

                /* =============================================
                    LEARNING HUB DROPDOWN
                ============================================= */
                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="group/dropdown relative"
                    >
                      <button
                        type="button"
                        className={`
                          group
                          flex
                          min-w-[92px]
                          flex-col
                          items-center
                          justify-center
                          gap-1
                          rounded-[16px]
                          px-3
                          py-2
                          transition-all
                          duration-300
                          xl:min-w-[105px]

                          ${
                            active
                              ? `
                                  bg-gradient-to-br
                                  from-[#edf8ff]
                                  to-[#cfefff]
                                  text-[#164fa5]
                                  shadow-[0_8px_20px_rgba(1,124,192,0.10)]
                                `
                              : `
                                  text-[#07194f]
                                  hover:bg-[#f2f8ff]
                                  hover:text-[#017cc0]
                                `
                          }
                        `}
                      >
                        <span
                          className="
                            flex
                            h-7
                            items-center
                            justify-center
                            gap-1
                            text-[18px]
                          "
                        >
                          {item.icon}

                          <ChevronDown
                            className="
                              h-3
                              w-3
                              transition-transform
                              duration-300
                              group-hover/dropdown:rotate-180
                            "
                          />
                        </span>

                        <span
                          className="
                            whitespace-nowrap
                            text-[11px]
                            font-semibold
                            xl:text-[12px]
                          "
                        >
                          {item.label}
                        </span>
                      </button>

                      {/* DROPDOWN */}
                      <div
                        className="
                          invisible
                          absolute
                          left-1/2
                          top-[calc(100%+8px)]
                          w-[620px]
                          -translate-x-1/2
                          translate-y-2
                          opacity-0
                          transition-all
                          duration-200
                          group-hover/dropdown:visible
                          group-hover/dropdown:translate-y-0
                          group-hover/dropdown:opacity-100
                        "
                      >
                        {/* Invisible bridge prevents dropdown closing */}
                        <div
                          className="
                            absolute
                            -top-3
                            left-0
                            h-4
                            w-full
                          "
                        />

                        <div
                          className="
                            relative
                            overflow-hidden
                            rounded-[22px]
                            border
                            border-[#dceafa]
                            bg-white
                            p-3
                            shadow-[0_24px_60px_rgba(8,31,92,0.16)]
                          "
                        >
                          {/* Header */}
                          <div
                            className="
                              mb-2
                              flex
                              items-center
                              gap-3
                              rounded-[15px]
                              bg-gradient-to-r
                              from-[#edf8ff]
                              to-[#f5f0ff]
                              px-4
                              py-3
                            "
                          >
                            <div
                              className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#075ee7]
                                text-white
                              "
                            >
                              <GraduationCap
                                size={20}
                              />
                            </div>

                            <div>
                              <p
                                className="
                                  text-sm
                                  font-black
                                  text-[#082b7a]
                                "
                              >
                                Learning Hub
                              </p>

                              <p
                                className="
                                  text-[11px]
                                  text-[#7085a8]
                                "
                              >
                                Everything you need
                                for smarter PSC
                                preparation.
                              </p>
                            </div>
                          </div>

                          {/* LINKS */}
                          <div
                            className="
                              grid
                              grid-cols-2
                              gap-1
                            "
                          >
                            {item.children.map(
                              (child) => {
                                const childActive =
                                  isActiveLink(
                                    child.href
                                  );

                                return (
                                  <Link
                                    key={
                                      child.title
                                    }
                                    href={
                                      child.href
                                    }
                                    className={`
                                      group/item
                                      flex
                                      items-center
                                      gap-3
                                      rounded-[14px]
                                      px-3
                                      py-3
                                      transition-all
                                      duration-200

                                      ${
                                        childActive
                                          ? `
                                              bg-[#edf7ff]
                                            `
                                          : `
                                              hover:bg-[#f4f9ff]
                                            `
                                      }
                                    `}
                                  >
                                    <span
                                      className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#edf6ff]
                                        text-lg
                                      "
                                    >
                                      {
                                        child.icon
                                      }
                                    </span>

                                    <div
                                      className="
                                        min-w-0
                                        flex-1
                                      "
                                    >
                                      <p
                                        className="
                                          text-[12px]
                                          font-bold
                                          text-[#102f68]
                                        "
                                      >
                                        {
                                          child.title
                                        }
                                      </p>

                                      <p
                                        className="
                                          mt-0.5
                                          truncate
                                          text-[10px]
                                          text-[#7b8daa]
                                        "
                                      >
                                        {
                                          child.subtitle
                                        }
                                      </p>
                                    </div>

                                    <ChevronRight
                                      className="
                                        h-3.5
                                        w-3.5
                                        shrink-0
                                        text-[#9badc5]
                                        transition-all
                                        group-hover/item:translate-x-0.5
                                        group-hover/item:text-[#087ee9]
                                      "
                                    />
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                /* =============================================
                    NORMAL MENU ITEM
                ============================================= */
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group
                      flex
                      min-w-[72px]
                      flex-col
                      items-center
                      justify-center
                      gap-1.5
                      rounded-[16px]
                      px-2
                      py-2
                      transition-all
                      duration-300
                      xl:min-w-[84px]
                      xl:px-3

                      ${
                        active
                          ? `
                              bg-gradient-to-br
                              from-[#edf8ff]
                              to-[#cfefff]
                              text-[#164fa5]
                              shadow-[0_8px_20px_rgba(1,124,192,0.10)]
                            `
                          : `
                              text-[#07194f]
                              hover:bg-[#f2f8ff]
                              hover:text-[#017cc0]
                            `
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        text-[19px]

                        ${
                          active
                            ? "text-[#017cc0]"
                            : `
                                text-[#081f5c]
                                group-hover:text-[#017cc0]
                              `
                        }
                      `}
                    >
                      {item.icon}
                    </span>

                    <span
                      className="
                        whitespace-nowrap
                        text-[11px]
                        font-semibold
                        xl:text-[12px]
                      "
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* =================================================
              LOGIN
          ================================================= */}
          <div
            className="
              ml-3
              flex
              min-w-[150px]
              shrink-0
              justify-end
            "
          >
            <Link
              href="/login"
              className="
                group
                flex
                min-h-[52px]
                min-w-[135px]
                items-center
                justify-center
                gap-2
                rounded-[17px]
                bg-gradient-to-r
                from-[#1878f2]
                via-[#0965df]
                to-[#034cc4]
                px-5
                text-[14px]
                font-semibold
                text-white
                shadow-[0_12px_28px_rgba(3,76,196,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_16px_35px_rgba(3,76,196,0.28)]
              "
            >
              <LogIn
                size={18}
                strokeWidth={2}
              />

              Login
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE + TABLET NAVBAR
      ===================================================== */}
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[9999]
          border-b
          border-[#164fa5]/10
          bg-white/95
          shadow-[0_8px_28px_rgba(8,31,92,0.08)]
          backdrop-blur-2xl
          lg:hidden
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[68px]
            items-center
            justify-between
            px-4
            sm:h-[74px]
            sm:px-6
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="MasterMind Home"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            <Image
              src="/assets/logo-256.png"
              alt="MasterMind"
              width={140}
              height={52}
              priority
              className="
                h-[48px]
                w-auto
                object-contain
                sm:h-[52px]
              "
            />
          </Link>

          {/* HAMBURGER */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                (previous) => !previous
              )
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-[13px]
              border
              border-[#164fa5]/10
              bg-[#edf7ff]
              text-[#0755b9]
              shadow-[0_5px_15px_rgba(22,79,165,0.08)]
              transition-all
              active:scale-95
            "
          >
            {mobileMenuOpen ? (
              <X
                size={23}
                strokeWidth={2.3}
              />
            ) : (
              <Menu
                size={24}
                strokeWidth={2.3}
              />
            )}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}
        <div
          className={`
            absolute
            left-0
            right-0
            top-full
            overflow-hidden
            border-t
            border-[#164fa5]/5
            bg-white/98
            shadow-[0_20px_40px_rgba(8,31,92,0.12)]
            backdrop-blur-2xl
            transition-all
            duration-300
            ease-out

            ${
              mobileMenuOpen
                ? `
                    visible
                    max-h-[calc(100vh-68px)]
                    translate-y-0
                    opacity-100
                  `
                : `
                    invisible
                    max-h-0
                    -translate-y-2
                    opacity-0
                  `
            }
          `}
        >
          <nav
            className="
              max-h-[calc(100vh-68px)]
              overflow-y-auto
              px-4
              pb-5
              pt-3
              sm:px-6
            "
          >
            <div className="flex flex-col gap-1">
              {leftMenu.map((item) => {
                const hasChildren =
                  Array.isArray(item.children);

                const active = hasChildren
                  ? isLearningHubActive(item)
                  : isActiveLink(item.href);

                /* ===========================================
                    MOBILE LEARNING HUB
                =========================================== */
                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="
                        overflow-hidden
                        rounded-xl
                      "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setLearningHubOpen(
                            (previous) =>
                              !previous
                          )
                        }
                        className={`
                          flex
                          min-h-[54px]
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3
                          text-left
                          text-[14px]
                          font-semibold
                          transition-all

                          ${
                            active ||
                            learningHubOpen
                              ? `
                                  bg-[#edf7ff]
                                  text-[#0755b9]
                                `
                              : `
                                  text-[#1f3158]
                                  hover:bg-[#f4f9ff]
                                `
                          }
                        `}
                      >
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-[10px]
                            bg-[#dff1ff]
                            text-lg
                          "
                        >
                          {item.icon}
                        </span>

                        <span className="flex-1">
                          {item.label}
                        </span>

                        <ChevronDown
                          className={`
                            h-4
                            w-4
                            transition-transform
                            duration-300

                            ${
                              learningHubOpen
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {/* MOBILE SUBMENU */}
                      <div
                        className={`
                          grid
                          transition-all
                          duration-300

                          ${
                            learningHubOpen
                              ? `
                                  grid-rows-[1fr]
                                  opacity-100
                                `
                              : `
                                  grid-rows-[0fr]
                                  opacity-0
                                `
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="
                              ml-5
                              mt-1
                              space-y-1
                              border-l-2
                              border-[#dcecff]
                              pb-2
                              pl-3
                            "
                          >
                            {item.children.map(
                              (child) => (
                                <Link
                                  key={
                                    child.title
                                  }
                                  href={
                                    child.href
                                  }
                                  onClick={() =>
                                    setMobileMenuOpen(
                                      false
                                    )
                                  }
                                  className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-3
                                    py-2.5
                                    transition-colors
                                    hover:bg-[#f2f8ff]
                                  "
                                >
                                  <span
                                    className="
                                      flex
                                      h-8
                                      w-8
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      bg-[#edf6ff]
                                      text-base
                                    "
                                  >
                                    {
                                      child.icon
                                    }
                                  </span>

                                  <div
                                    className="
                                      min-w-0
                                      flex-1
                                    "
                                  >
                                    <p
                                      className="
                                        text-[13px]
                                        font-semibold
                                        text-[#17386f]
                                      "
                                    >
                                      {
                                        child.title
                                      }
                                    </p>

                                    <p
                                      className="
                                        truncate
                                        text-[10px]
                                        text-[#8495ae]
                                      "
                                    >
                                      {
                                        child.subtitle
                                      }
                                    </p>
                                  </div>

                                  <ChevronRight
                                    className="
                                      h-3.5
                                      w-3.5
                                      text-[#9aabc2]
                                    "
                                  />
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                /* ===========================================
                    NORMAL MOBILE LINK
                =========================================== */
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={`
                      flex
                      min-h-[54px]
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      text-[14px]
                      font-semibold
                      transition-all

                      ${
                        active
                          ? `
                              bg-[#edf7ff]
                              text-[#0755b9]
                            `
                          : `
                              text-[#1f3158]
                              hover:bg-[#f4f9ff]
                            `
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-[10px]

                        ${
                          active
                            ? `
                                bg-[#d9efff]
                                text-[#017cc0]
                              `
                            : `
                                bg-[#f1f7ff]
                                text-[#164fa5]
                              `
                        }
                      `}
                    >
                      {item.icon}
                    </span>

                    <span>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* MOBILE LOGIN */}
            <Link
              href="/login"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                mt-4
                flex
                min-h-[52px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-[#1878f2]
                to-[#034cc4]
                px-5
                text-[14px]
                font-semibold
                text-white
                shadow-[0_10px_24px_rgba(3,76,196,0.18)]
              "
            >
              <LogIn size={18} />
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={() =>
          setMobileMenuOpen(false)
        }
        className={`
          fixed
          inset-0
          z-[9997]
          bg-[#06194b]/20
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? `
                  visible
                  opacity-100
                  pointer-events-auto
                `
              : `
                  invisible
                  opacity-0
                  pointer-events-none
                `
          }
        `}
      />
    </>
  );
}