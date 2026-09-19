import Link from "next/link";

import {
  ArrowRight,
  FileCheck2,
  Sparkles,
} from "lucide-react";

function createSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function StatementTypeCard({
  item,
}) {
  if (!item?.id) {
    return null;
  }

  const title =
    item?.subject ||
    "PSC Topic";

  const slug =
    createSlug(title);

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        min-h-[320px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_10px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-200
        hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)]
      "
    >
      {/* SOFT PINK GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-pink-100/45
          blur-3xl
        "
      />

      {/* SOFT BLUE GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-14
          -right-14
          h-36
          w-36
          rounded-full
          bg-blue-100/45
          blur-3xl
        "
      />

      {/* SUBTLE TOP-RIGHT DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-24
          w-24
          rounded-bl-[70px]
          bg-gradient-to-bl
          from-pink-50
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          {/* ICON */}
          <div
            className="
              flex
              h-13
              w-13
              items-center
              justify-center
              rounded-[16px]
              border
              border-pink-100
              bg-gradient-to-br
              from-pink-100
              via-fuchsia-50
              to-blue-100
              text-pink-600
              shadow-[0_6px_16px_rgba(236,72,153,0.08)]
              transition-all
              duration-300
              group-hover:scale-105
            "
          >
            <FileCheck2
              size={22}
            />
          </div>

          {/* BADGE */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-pink-100
              bg-pink-50
              px-3
              py-1.5
              text-[9px]
              font-black
              uppercase
              tracking-[0.1em]
              text-pink-600
            "
          >
            <Sparkles
              size={11}
            />

            Statement Type
          </span>
        </div>

        {/* LABEL */}
        <p
          className="
            mt-6
            text-[9px]
            font-black
            uppercase
            tracking-[0.15em]
            text-blue-600
          "
        >
          Kerala PSC Practice
        </p>

        {/* TITLE */}
        <h3
          className="
            mt-2
            text-[18px]
            font-black
            leading-7
            text-[#071f55]
          "
        >
          {title}
        </h3>

        {/* MALAYALAM */}
        {item?.subject_mal ? (
          <p
            className="
              mt-2
              text-[13px]
              leading-6
              text-slate-500
            "
          >
            {item.subject_mal}
          </p>
        ) : null}

        {/* DIVIDER */}
        <div
          className="
            mt-5
            h-px
            bg-gradient-to-r
            from-pink-100
            via-slate-100
            to-blue-100
          "
        />

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            text-[12px]
            leading-6
            text-slate-500
          "
        >
          Practice statement-based
          questions from this topic
          and improve your exam
          accuracy.
        </p>

        {/* LINK */}
        <Link
          href={
            `/kerala-psc-coaching/statement-type-exams/${slug}`
          }
          className="
            mt-auto
            pt-6
          "
        >
          <span
            className="
              inline-flex
              w-full
              items-center
              justify-between
              rounded-[14px]
              border
              border-blue-100
              bg-gradient-to-r
              from-pink-50
              via-violet-50
              to-blue-50
              px-5
              py-2
              text-[11px]
              font-bold
              text-[#075fc8]
              shadow-[0_6px_18px_rgba(37,99,235,0.05)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-blue-200
              hover:bg-gradient-to-r
              hover:from-pink-100
              hover:via-violet-100
              hover:to-blue-100
            "
          >
            <span>
              View Statement Exams
            </span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#075fc8]
                shadow-sm
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowRight
                size={14}
              />
            </span>
          </span>
        </Link>
      </div>
    </article>
  );
}