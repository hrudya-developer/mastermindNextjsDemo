import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

import CompetitiveExamPackCard from "./CompetitiveExamPackCard";

import {
  competitiveExamPacks,
} from "./competitiveExamPacksData";

export default function CompetitiveExamPacks() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-[24px]
        border
        border-[#e3edf7]
        bg-gradient-to-br
        from-white
        via-[#fbfdff]
        to-[#f5f9ff]
        px-4
        py-5
        shadow-[0_10px_30px_rgba(15,58,110,0.05)]

        sm:px-5
        sm:py-6

        lg:px-6 my-5
      "
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#00b5e8]/[0.05]
          blur-[90px]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
            flex
            items-end
            justify-between
            gap-4
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-black
                tracking-[-0.035em]
                text-[#0b216c]

                sm:text-[28px]
              "
            >
              Competitive Exam Packs
            </h2>

            <div
              className="
                mt-2
                h-[3px]
                w-10
                rounded-full
                bg-[#f13873]
              "
            />
          </div>

          <Link
            href="/kerala-psc-coaching/recommended-courses"
            className="
              group
              hidden
              items-center
              gap-2
              text-[11px]
              font-bold
              text-[#075ee7]
              transition-colors
              hover:text-[#164fa5]

              sm:inline-flex
            "
          >
            View All

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Cards */}
        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4

            lg:grid-cols-2
          "
        >
          {competitiveExamPacks.map(
            (item) => (
              <CompetitiveExamPackCard
                key={item.id}
                item={item}
              />
            )
          )}
        </div>

        {/* Mobile View All */}
        <div
          className="
            mt-4
            flex
            justify-center

            sm:hidden
          "
        >
          <Link
            href="/kerala-psc-coaching/recommended-courses"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#1976ed]
              bg-white
              px-5
              py-2.5
              text-[11px]
              font-bold
              text-[#164fa5]
            "
          >
            View All

            <ArrowRight
              className="h-4 w-4"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}