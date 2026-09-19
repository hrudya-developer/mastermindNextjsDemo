// src/components/hero/desktop-hero/RightSidebar.jsx

"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { exploreItems } from "./data";
import SidebarItem from "./SidebarItem";

import MainCoursesModal from "@/components/main-course-modal/MainCoursesModal";

import StudyMaterialsLauncher from "@/app/(public)/kerala-psc-coaching/study-materials/components/StudyMaterialsLauncher";

const INITIAL_VISIBLE_ITEMS = 5;

export default function RightSidebar() {
  const [
    selectedItem,
    setSelectedItem,
  ] = useState(null);

  const [
    expanded,
    setExpanded,
  ] = useState(false);

  const visibleItems =
    expanded
      ? exploreItems
      : exploreItems.slice(
          0,
          INITIAL_VISIBLE_ITEMS
        );

  const hasMore =
    exploreItems.length >
    INITIAL_VISIBLE_ITEMS;

  return (
    <>
      <aside
        className="
          relative
          hidden
          h-full
          min-h-0
          overflow-hidden
          rounded-[26px]
          border
          border-[#dce7f4]
          bg-gradient-to-b
          from-[#fbfdff]
          via-white
          to-[#f8fbff]
          shadow-[0_18px_45px_rgba(22,79,165,0.08)]
          lg:flex
          lg:flex-col
        "
      >
        {/* =========================================
            SOFT BACKGROUND GLOW
        ========================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-44
            w-44
            rounded-full
            bg-sky-200/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-16
            h-44
            w-44
            rounded-full
            bg-violet-200/15
            blur-3xl
          "
        />

        {/* =========================================
            PREMIUM HEADER
        ========================================= */}

        <div
          className="
            relative
            z-10
            shrink-0
            overflow-hidden
            border-b
            border-[#dce7f4]
            bg-gradient-to-br
            from-[#f8fbff]
            via-[#edf6ff]
            to-[#f5f0ff]
            px-4
            py-3
            shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
          "
        >
          {/* HEADER GRID */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(to_right,#164fa5_1px,transparent_1px),linear-gradient(to_bottom,#164fa5_1px,transparent_1px)]
              [background-size:20px_20px]
            "
          />

          {/* GLOW */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-24
              w-24
              rounded-full
              bg-violet-300/25
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-12
              left-8
              h-20
              w-20
              rounded-full
              bg-cyan-300/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
              gap-3
            "
          >
            <div className="min-w-0">
              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#cfe5f8]
                  bg-white/75
                  px-2
                  py-0.5
                  shadow-sm
                  backdrop-blur-md
                "
              >
                <Sparkles
                  size={9}
                  className="
                    text-[#017dc0]
                  "
                />

                <span
                  className="
                    text-[7px]
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-[#017dc0]
                  "
                >
                  Quick Access
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-1.5
                  text-[17px]
                  font-black
                  tracking-[-0.03em]
                  text-[#071f55]
                "
              >
                Learning Hub
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-0.5
                  text-[9px]
                  font-medium
                  leading-4
                  text-slate-500
                "
              >
                Everything you need for preparation
              </p>
            </div>

            {/* HEADER ICON */}

            <div
              className="
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-[14px]
                bg-gradient-to-br
                from-[#00b5e8]
                via-[#017dc0]
                to-[#6d4ce8]
                text-white
                shadow-[0_8px_18px_rgba(1,125,192,0.18)]
              "
            >
              <GraduationCap
                size={20}
                strokeWidth={2}
              />

              <span
                className="
                  absolute
                  -right-0.5
                  -top-0.5
                  h-2.5
                  w-2.5
                  rounded-full
                  border-2
                  border-white
                  bg-emerald-400
                "
              />
            </div>
          </div>
        </div>

        {/* =========================================
            SCROLLABLE CONTENT
        ========================================= */}

        <div
          className={`
            relative
            z-10
            min-h-0
            flex-1
            px-3
            pb-3
            pt-3

            ${
              expanded
                ? `
                  overflow-y-auto
                  overflow-x-hidden

                  [scrollbar-width:thin]
                  [scrollbar-color:#c5e2f5_transparent]

                  [&::-webkit-scrollbar]:w-[3px]
                  [&::-webkit-scrollbar-track]:bg-transparent

                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-[#c5e2f5]

                  hover:[&::-webkit-scrollbar-thumb]:bg-[#84c5ea]
                `
                : "overflow-hidden"
            }
          `}
        >
          {/* =====================================
              RESOURCE CARDS
          ===================================== */}

          <div
            className="
              flex
              flex-col
              gap-2
            "
          >
            {visibleItems.map(
              (item, index) => (
                <SidebarItem
                  key={item.title}
                  {...item}
                  tone={index % 5}
                  position={
                    index + 1
                  }
                  onClick={() =>
                    setSelectedItem(
                      item
                    )
                  }
                />
              )
            )}
          </div>

          {/* =====================================
              EXPLORE MORE
          ===================================== */}

          {hasMore && (
            <button
              type="button"
              onClick={() =>
                setExpanded(
                  (previous) =>
                    !previous
                )
              }
              className="
                group
                mt-2.5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[12px]
                border
                border-[#d8e8f5]
                bg-white/80
                px-4
                py-2
                text-[10px]
                font-bold
                text-[#164fa5]
                shadow-[0_4px_14px_rgba(22,79,165,0.04)]
                transition-all
                duration-300
                hover:border-[#acd3ed]
                hover:bg-[#f8fcff]
                hover:shadow-[0_7px_18px_rgba(22,79,165,0.08)]
              "
            >
              <span>
                {expanded
                  ? "Show Less"
                  : "Explore More"}
              </span>

              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-[#edf7ff]
                  text-[#017dc0]
                "
              >
                {expanded ? (
                  <ChevronUp
                    size={12}
                  />
                ) : (
                  <ChevronDown
                    size={12}
                  />
                )}
              </span>
            </button>
          )}

          {/* =====================================
              STUDY MATERIAL CTA
          ===================================== */}

          <div
            className="
              mt-3
              border-t
              border-[#e5edf5]
              pt-3
            "
          >
            <StudyMaterialsLauncher />
          </div>

          <div className="h-1" />
        </div>
      </aside>

      {/* =========================================
          COURSE MODAL
      ========================================= */}

      <MainCoursesModal
        open={Boolean(
          selectedItem
        )}
        destinationPath={
          selectedItem?.path ??
          ""
        }
        onClose={() =>
          setSelectedItem(null)
        }
      />
    </>
  );
}