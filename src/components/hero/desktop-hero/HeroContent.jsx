"use client";

import Image from "next/image";
import { useState } from "react";

import MainCoursesModal from "@/components/main-course-modal/MainCoursesModal";

export default function HeroContent() {
  const [showMainCourses, setShowMainCourses] =
    useState(false);

  return (
    <div
      className="
        relative
        z-10
        flex
        min-h-[520px]
        items-center
        px-6
        pb-16
        pt-10
        2xl:min-h-[550px]
        2xl:px-12
        2xl:pb-20
        2xl:pt-12
      "
    >
      <div
        className="
          w-full
          max-w-[450px]
          text-left
          2xl:max-w-[520px]
        "
      >
        {/* EYEBROW */}
        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#164fa5]/10
            bg-white/75
            px-3.5
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-[#164fa5]
            shadow-[0_6px_18px_rgba(22,79,165,0.06)]
            backdrop-blur-md
          "
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-[#00b5e8]/40
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-[#00b5e8]
              "
            />
          </span>

          Kerala PSC Preparation
        </div>

        {/* HEADING */}
        <h1
          className="
            text-[clamp(2.65rem,3.5vw,3.45rem)]
            font-semibold
            leading-[1.01]
            tracking-[-0.052em]
            text-black
            2xl:text-[clamp(3.3rem,3.6vw,4rem)]
          "
        >
          <span className="block">
            Your Dream.
          </span>

          <span className="mt-1 block">
            Our Guidance.
          </span>

          <span
            className="
              mt-1
              block
              bg-gradient-to-r
              from-[#164fa5]
              via-[#017cc0]
              to-[#00b5e8]
              bg-clip-text
              pb-1
              text-transparent
            "
          >
            Your Success!
          </span>
        </h1>

        {/* ACCENT */}
        <div className="mt-6 flex items-center gap-2">
          <span
            className="
              h-[4px]
              w-12
              rounded-full
              bg-gradient-to-r
              from-[#164fa5]
              via-[#017cc0]
              to-[#00b5e8]
            "
          />

          <span
            className="
              h-[4px]
              w-2
              rounded-full
              bg-[#00b5e8]/30
            "
          />
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            max-w-[430px]
            text-[14px]
            leading-7
            text-[#2c2b2b]/95
            2xl:max-w-[450px]
            2xl:text-[15px]
            2xl:leading-8
          "
        >
          Comprehensive preparation for Kerala PSC exams
          with expert guidance, quality content and proven
          strategies.
        </p>

        {/* ACTIONS */}
        <div
          className="
            mt-8
            grid
            w-full
            max-w-[450px]
            grid-cols-2
            gap-3
            2xl:max-w-[470px]
            2xl:gap-4
          "
        >
          {/* MAIN COURSES BUTTON */}
          <button
            type="button"
            onClick={() =>
              setShowMainCourses(true)
            }
            className="
              group
              flex
              h-[56px]
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-[#164fa5]
              via-[#017cc0]
              to-[#164fa5]
              px-4
              text-[12px]
              font-semibold
              text-white
              shadow-[0_14px_30px_rgba(22,79,165,0.22)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_38px_rgba(22,79,165,0.32)]
              active:translate-y-0
              2xl:text-sm
            "
          >
            <span className="whitespace-nowrap">
              Explore Main Courses
            </span>

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

          {/* SECONDARY */}
          <a
            href="#intro"
            className="
              group
              flex
              h-[56px]
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#164fa5]/10
              bg-white/80
              px-4
              text-[12px]
              font-semibold
              text-[#164fa5]
              shadow-[0_8px_22px_rgba(22,79,165,0.08)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#00b5e8]/25
              hover:bg-white
              hover:shadow-[0_14px_30px_rgba(22,79,165,0.13)]
              active:translate-y-0
              2xl:text-sm
            "
          >
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#164fa5]
                pl-[2px]
                text-[10px]
                text-white
                shadow-[0_6px_15px_rgba(22,79,165,0.20)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:bg-[#017cc0]
              "
            >
              ▶
            </span>

            <span className="whitespace-nowrap">
              Watch AI Videos
            </span>
          </a>
        </div>

        {/* TRUST ROW */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-3
          "
        >
          <div className="flex -space-x-1.5">
            <StudentAvatar
              src="/assets/psc-candidate1.png"
              alt="PSC student"
            />

            <StudentAvatar
              src="/assets/psc-candidate2.png"
              alt="PSC student"
            />

            <StudentAvatar
              src="/assets/psc-candidate3.png"
              alt="PSC student"
            />
          </div>

          <span
            className="
              text-[11px]
              font-medium
              text-black/60
            "
          >
            Trusted by thousands of aspirants
          </span>
        </div>
      </div>

      <MainCoursesModal
        open={showMainCourses}
        onClose={() =>
          setShowMainCourses(false)
        }
      />
    </div>
  );
}

function StudentAvatar({
  src,
  alt,
}) {
  return (
    <span
      className="
        relative
        h-6
        w-6
        overflow-hidden
        rounded-full
        border-2
        border-white
        bg-[#00b5e8]
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="24px"
        className="object-cover"
      />
    </span>
  );
}