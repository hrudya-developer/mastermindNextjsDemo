"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowRight,
  CirclePause,
  FileQuestion,
  GraduationCap,
  LockKeyhole,
  Play,
  Trophy,
} from "lucide-react";

import PremiumMockTestModal from "./PremiumMockTestModal";

export default function MockTestCard({
  test,
}) {
  const [
    premiumModalOpen,
    setPremiumModalOpen,
  ] = useState(false);

  const examId =
    test?.id;

  const examName =
    test?.exam_name ||
    "Kerala PSC Mock Test";

  const access =
    String(
      test?.access || ""
    )
      .toLowerCase()
      .trim();

  const examStatus =
    String(
      test?.exam_status || ""
    )
      .toLowerCase()
      .trim();

  const isPremium =
    access === "paid";

  const isFree =
    access === "free";

  const isPaused =
    examStatus === "pause";

  return (
    <>
      <article
        className="
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          border-[#dce8f7]
          bg-white
          p-5
          shadow-[0_12px_35px_rgba(49,84,238,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#cdd9f7]
          hover:shadow-[0_20px_45px_rgba(49,84,238,0.12)]
        "
      >
        {/* DECORATION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-[#3154ee]/5
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
            h-36
            w-36
            rounded-full
            bg-[#a83279]/5
            blur-3xl
          "
        />

        {/* TOP */}
        <div
          className="
            relative
            z-10
            flex
            items-start
            justify-between
            gap-3
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-[15px]
              bg-gradient-to-br
              from-[#164fa5]
              via-[#3154ee]
              to-[#7a2d73]
              text-white
              shadow-[0_10px_25px_rgba(49,84,238,0.20)]
            "
          >
            <GraduationCap
              size={21}
            />
          </div>

          {/* ACCESS BADGE */}

          {isPremium ? (
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-amber-200
                bg-gradient-to-r
                from-[#fff9e8]
                to-[#fff1c7]
                px-3
                py-1.5
                text-[9px]
                font-black
                uppercase
                tracking-[0.08em]
                text-[#a65f00]
                shadow-[0_4px_12px_rgba(245,158,11,0.08)]
              "
            >
              <LockKeyhole
                size={11}
              />

              Premium
            </span>
          ) : isFree ? (
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-emerald-200
                bg-gradient-to-r
                from-[#f0fdf4]
                to-[#dcfce7]
                px-3
                py-1.5
                text-[9px]
                font-black
                uppercase
                tracking-[0.08em]
                text-emerald-700
                shadow-[0_4px_12px_rgba(16,185,129,0.06)]
              "
            >
              <Play
                size={10}
              />

              Free
            </span>
          ) : (
            <span
              className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-3
                py-1.5
                text-[9px]
                font-black
                uppercase
                text-slate-500
              "
            >
              Test
            </span>
          )}
        </div>

        {/* COURSE TAGS */}
        <div
          className="
            relative
            z-10
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {test?.course && (
            <span
              className="
                rounded-full
                bg-[#eef3ff]
                px-3
                py-1.5
                text-[9px]
                font-bold
                text-[#3154ee]
              "
            >
              {test.course}
            </span>
          )}

          {test?.subcourse && (
            <span
              className="
                rounded-full
                bg-[#f8effa]
                px-3
                py-1.5
                text-[9px]
                font-bold
                text-[#7a2d73]
              "
            >
              {test.subcourse}
            </span>
          )}
        </div>

        {/* TITLE */}
        <h3
          className="
            relative
            z-10
            mt-4
            line-clamp-2
            min-h-[48px]
            text-[16px]
            font-black
            leading-6
            text-[#172554]
          "
        >
          {examName}
        </h3>

        {/* DETAILS */}
        <div
          className="
            relative
            z-10
            mt-5
            grid
            grid-cols-2
            gap-2.5
          "
        >
          <Stat
            icon={
              FileQuestion
            }
            value={
              test?.total_questions ??
              0
            }
            label="Questions"
          />

          <Stat
            icon={Trophy}
            value={
              test?.total_mark ??
              0
            }
            label="Marks"
          />
        </div>

        {/* PAUSED */}
        {isPaused &&
          !isPremium && (
            <div
              className="
                relative
                z-10
                mt-4
                flex
                items-center
                gap-2
                rounded-[13px]
                border
                border-amber-200
                bg-[#fff9e8]
                px-3
                py-2.5
                text-[10px]
                font-bold
                text-amber-700
              "
            >
              <CirclePause
                size={14}
              />

              You have a paused attempt
            </div>
          )}

        {/* ACTION */}
        <div
          className="
            relative
            z-10
            mt-auto
            pt-5
          "
        >
          {isPremium ? (
            <button
              type="button"
              onClick={() =>
                setPremiumModalOpen(
                  true
                )
              }
              className="
                group/button
                flex
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-[14px]
                border
                border-[#f4c76a]
                bg-gradient-to-r
                from-[#fff9e8]
                via-[#fff3cd]
                to-[#ffe7aa]
                px-4
                py-3
                text-[11px]
                font-black
                text-[#9a5a00]
                shadow-[0_8px_20px_rgba(245,158,11,0.10)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#f59e0b]
                hover:shadow-[0_12px_28px_rgba(245,158,11,0.18)]
              "
            >
              <LockKeyhole
                size={14}
                className="
                  text-[#d97706]
                "
              />

              Unlock Premium Test

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              />
            </button>
          ) : (
            <Link
              href={`/kerala-psc-coaching/mock-tests/${examId}`}
              className="
                group/button
                flex
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-[14px]
                border
                border-emerald-200
                bg-gradient-to-r
                from-[#f0fdf4]
                via-[#dcfce7]
                to-[#d1fae5]
                px-4
                py-3
                text-[11px]
                font-black
                text-emerald-700
                shadow-[0_8px_20px_rgba(16,185,129,0.08)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-emerald-300
                hover:shadow-[0_12px_28px_rgba(16,185,129,0.16)]
              "
            >
              <Play
                size={14}
                className="
                  text-emerald-600
                "
              />

              {isPaused
                ? "Continue Free Test"
                : "Start Free Test"}

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              />
            </Link>
          )}
        </div>
      </article>

      <PremiumMockTestModal
        open={
          premiumModalOpen
        }
        test={test}
        onClose={() =>
          setPremiumModalOpen(
            false
          )
        }
      />
    </>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2.5
        rounded-[14px]
        border
        border-[#e6ebf7]
        bg-[#f8faff]
        p-3
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          bg-white
          text-[#3154ee]
          shadow-[0_4px_12px_rgba(49,84,238,0.06)]
        "
      >
        <Icon size={14} />
      </div>

      <div>
        <p
          className="
            text-[12px]
            font-black
            text-[#172554]
          "
        >
          {value}
        </p>

        <p
          className="
            mt-0.5
            text-[8px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-slate-400
          "
        >
          {label}
        </p>
      </div>
    </div>
  );
}