import Link from "next/link";

import {
  ArrowRight,
  FileQuestion,
  Trophy,
} from "lucide-react";

import PremiumStatementExamButton from "./PremiumStatementExamButton";

function createSlug(
  value = ""
) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

export default function StatementExamCard({
  exam,
  topicName,
  statementTypeSlug,
}) {
  if (!exam?.id) {
    return null;
  }

  const examName =
    exam?.exam_name ||
    "Statement Type Exam";

  const examSlug =
    createSlug(
      examName
    );

  const isPaid =
    String(
      exam?.access ||
        ""
    ).toLowerCase() ===
    "paid";

  return (
    <article
      className={`
        group
        flex
        h-full
        flex-col
        rounded-[24px]
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          isPaid
            ? `
              border-amber-200
              bg-amber-50/50
              shadow-[0_10px_30px_rgba(245,158,11,0.04)]
            `
            : `
              border-green-200
              bg-green-50/50
              shadow-[0_10px_30px_rgba(34,197,94,0.04)]
            `
        }
      `}
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
        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-[14px]
            border

            ${
              isPaid
                ? `
                  border-amber-200
                  bg-amber-100
                  text-amber-600
                `
                : `
                  border-green-200
                  bg-green-100
                  text-green-600
                `
            }
          `}
        >
          <FileQuestion
            size={20}
          />
        </div>

        <span
          className={`
            rounded-full
            border
            px-3
            py-1.5
            text-[9px]
            font-black
            uppercase

            ${
              isPaid
                ? `
                  border-amber-200
                  bg-amber-50
                  text-amber-600
                `
                : `
                  border-green-200
                  bg-green-50
                  text-green-600
                `
            }
          `}
        >
          {isPaid
            ? "Premium"
            : "Free"}
        </span>
      </div>

      {/* SUBJECT */}

      <p
        className={`
          mt-5
          text-[9px]
          font-black
          uppercase
          tracking-[0.14em]

          ${
            isPaid
              ? "text-amber-600"
              : "text-green-600"
          }
        `}
      >
        {exam?.subject ||
          topicName}
      </p>

      {/* NAME */}

      <h3
        className="
          mt-2
          text-[17px]
          font-black
          leading-6
          text-[#071f55]
        "
      >
        {examName}
      </h3>

      {/* STATS */}

      <div
        className="
          mt-5
          grid
          grid-cols-2
          gap-3
        "
      >
        <div
          className={`
            rounded-[14px]
            border
            bg-white/80
            p-3

            ${
              isPaid
                ? "border-amber-100"
                : "border-green-100"
            }
          `}
        >
          <FileQuestion
            size={15}
            className={
              isPaid
                ? "text-amber-500"
                : "text-green-500"
            }
          />

          <p
            className="
              mt-2
              text-[10px]
              text-slate-500
            "
          >
            Questions
          </p>

          <p
            className="
              text-sm
              font-black
              text-[#071f55]
            "
          >
            {exam?.total_questions ??
              0}
          </p>
        </div>

        <div
          className={`
            rounded-[14px]
            border
            bg-white/80
            p-3

            ${
              isPaid
                ? "border-amber-100"
                : "border-green-100"
            }
          `}
        >
          <Trophy
            size={15}
            className={
              isPaid
                ? "text-amber-500"
                : "text-green-500"
            }
          />

          <p
            className="
              mt-2
              text-[10px]
              text-slate-500
            "
          >
            Marks
          </p>

          <p
            className="
              text-sm
              font-black
              text-[#071f55]
            "
          >
            {exam?.total_mark ??
              0}
          </p>
        </div>
      </div>

      {/* ACTION */}

      {isPaid ? (
        <PremiumStatementExamButton />
      ) : (
        <Link
          href={
            `/kerala-psc-coaching/statement-type-exams/${statementTypeSlug}/${examSlug}`
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
              border-green-200
              bg-green-50
              px-5
              py-3.5
              text-[11px]
              font-bold
              text-green-700
              shadow-[0_6px_18px_rgba(34,197,94,0.05)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-green-100
            "
          >
            <span>
              View Exam
            </span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-green-700
              "
            >
              <ArrowRight
                size={14}
              />
            </span>
          </span>
        </Link>
      )}
    </article>
  );
}