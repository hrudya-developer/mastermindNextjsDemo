import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  Crown,
  FileQuestion,
  LockKeyhole,
  Trophy,
} from "lucide-react";

export default function MockTestCard({
  test,
  uid = 0,
  cid = 1,
}) {
  if (!test?.id) {
    return null;
  }

  const examId = test.id;

  const examName =
    test?.exam_name || "";

  const totalQuestions =
    test?.total_questions;

  const totalMark =
    test?.total_mark;

  const course =
    test?.course;

  const subcourse =
    test?.subcourse;

  const access = String(
    test?.access || ""
  )
    .toLowerCase()
    .trim();

  const premium =
    access === "paid";

  return (
    <article
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          premium
            ? `
                border-amber-200
                bg-gradient-to-br
                from-amber-50
                via-white
                to-orange-50
                shadow-[0_12px_35px_rgba(245,158,11,0.08)]
                hover:shadow-[0_22px_45px_rgba(245,158,11,0.14)]
              `
            : `
                border-emerald-200
                bg-gradient-to-br
                from-emerald-50
                via-white
                to-green-50
                shadow-[0_12px_35px_rgba(16,185,129,0.08)]
                hover:shadow-[0_22px_45px_rgba(16,185,129,0.14)]
              `
        }
      `}
    >
      {/* DECORATIVE GLOW */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          blur-3xl

          ${
            premium
              ? "bg-amber-200/40"
              : "bg-emerald-200/40"
          }
        `}
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
        {/* ICON */}

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[13px]

            ${
              premium
                ? `
                    bg-gradient-to-br
                    from-amber-100
                    to-orange-100
                    text-amber-700
                  `
                : `
                    bg-gradient-to-br
                    from-emerald-100
                    to-green-100
                    text-emerald-700
                  `
            }
          `}
        >
          {premium ? (
            <Crown size={20} />
          ) : (
            <BookOpen size={20} />
          )}
        </div>

        {/* ACCESS BADGE */}

        <span
          className={`
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            px-3
            py-1.5
            text-[9px]
            font-black
            uppercase
            tracking-[0.05em]

            ${
              premium
                ? `
                    border-amber-200
                    bg-amber-100
                    text-amber-700
                  `
                : `
                    border-emerald-200
                    bg-emerald-100
                    text-emerald-700
                  `
            }
          `}
        >
          {premium ? (
            <Crown size={11} />
          ) : null}

          {premium
            ? "Premium"
            : "Free"}
        </span>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mt-5
        "
      >
        {course ? (
          <p
            className={`
              text-[9px]
              font-black
              uppercase
              tracking-[0.1em]

              ${
                premium
                  ? "text-amber-700"
                  : "text-emerald-700"
              }
            `}
          >
            {course}
          </p>
        ) : null}

        <h3
          className="
            mt-2
            line-clamp-2
            text-[17px]
            font-extrabold
            leading-6
            text-[#0b1f44]
          "
        >
          {examName}
        </h3>

        {subcourse ? (
          <p
            className="
              mt-2
              line-clamp-1
              text-[11px]
              font-medium
              text-slate-500
            "
          >
            {subcourse}
          </p>
        ) : null}
      </div>

      {/* INFORMATION */}

      <div
        className="
          relative
          z-10
          mt-5
          grid
          grid-cols-2
          gap-3
        "
      >
        <InfoBox
          icon={FileQuestion}
          label="Questions"
          value={totalQuestions}
          premium={premium}
        />

        <InfoBox
          icon={Trophy}
          label="Marks"
          value={totalMark}
          premium={premium}
        />
      </div>

      {/* BUTTON */}

      <div
        className="
          relative
          z-10
          mt-auto
          pt-5
        "
      >
        <Link
  href={{
    pathname:
      `/kerala-psc-coaching/mock-tests/${examId}`,

    query: {
      uid: String(uid),
      cid: String(cid),
      title: examName,
    },
  }}
  className={`
    inline-flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-[13px]
    border
    px-5
    py-3.5
    text-[11px]
    font-extrabold
    transition-all
    duration-300
    hover:-translate-y-0.5

    ${
      premium
        ? `
            border-amber-200
            bg-gradient-to-r
            from-amber-100
            via-orange-50
            to-amber-100
            text-amber-700
            shadow-[0_8px_20px_rgba(245,158,11,0.10)]
            hover:border-amber-300
            hover:from-amber-200
            hover:via-orange-100
            hover:to-amber-200
            hover:shadow-[0_12px_25px_rgba(245,158,11,0.16)]
          `
        : `
            border-emerald-200
            bg-gradient-to-r
            from-emerald-100
            via-green-50
            to-teal-100
            text-emerald-700
            shadow-[0_8px_20px_rgba(16,185,129,0.10)]
            hover:border-emerald-300
            hover:from-emerald-200
            hover:via-green-100
            hover:to-teal-200
            hover:shadow-[0_12px_25px_rgba(16,185,129,0.16)]
          `
    }
  `}
>
  {premium ? (
    <LockKeyhole size={14} />
  ) : (
    <ArrowRight size={14} />
  )}

  View Mock Test
</Link>
      </div>
    </article>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  icon: Icon,
  label,
  value,
  premium,
}) {
  return (
    <div
      className={`
        rounded-[14px]
        border
        px-3
        py-3

        ${
          premium
            ? `
                border-amber-100
                bg-amber-50/80
              `
            : `
                border-emerald-100
                bg-emerald-50/80
              `
        }
      `}
    >
      <div
        className={`
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-[8px]

          ${
            premium
              ? `
                  bg-amber-100
                  text-amber-700
                `
              : `
                  bg-emerald-100
                  text-emerald-700
                `
          }
        `}
      >
        <Icon size={14} />
      </div>

      <p
        className="
          mt-2
          text-[14px]
          font-extrabold
          text-[#0b1f44]
        "
      >
        {value ?? "-"}
      </p>

      <p
        className="
          mt-0.5
          text-[8px]
          font-bold
          uppercase
          tracking-[0.06em]
          text-slate-400
        "
      >
        {label}
      </p>
    </div>
  );
}