import Link from "next/link";

import {
  ArrowLeft,
  Clock3,
  FileQuestion,
  Trophy,
} from "lucide-react";

export default function MockTestHeader({
  exam,
}) {
  const access =
    String(
      exam?.access || ""
    )
      .toLowerCase()
      .trim();

  const premium =
    access === "paid";

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[28px]
        bg-gradient-to-r
        from-[#251442]
        via-[#5b216d]
        to-[#3154ee]
        p-6
        text-white
        shadow-[0_20px_50px_rgba(49,84,238,0.16)]
        sm:p-8 mt-20
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div className="relative z-10">
        <Link
          href="/kerala-psc-coaching/mock-tests"
          className="
            inline-flex
            cursor-pointer
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-white/10
            px-4
            py-2
            text-[10px]
            font-bold
          "
        >
          <ArrowLeft
            size={14}
          />

          Back to Mock Tests
        </Link>

        <div
          className="
            mt-7
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              <span
                className="
                  rounded-full
                  bg-white/10
                  px-3
                  py-1.5
                  text-[9px]
                  font-black
                  uppercase
                "
              >
                Kerala PSC
              </span>

              <span
                className={`
                  rounded-full
                  px-3
                  py-1.5
                  text-[9px]
                  font-black
                  uppercase

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
                {premium
                  ? "Premium"
                  : "Free"}
              </span>
            </div>

            <h1
              className="
                mt-4
                max-w-3xl
                text-2xl
                font-black
                leading-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              {exam?.exam_name}
            </h1>
          </div>

          <div
            className="
              grid
              grid-cols-3
              gap-2
            "
          >
            <Info
              icon={
                FileQuestion
              }
              value={
                exam?.total_questions
              }
              label="Questions"
            />

            <Info
              icon={Trophy}
              value={
                exam?.total_mark
              }
              label="Marks"
            />

            <Info
              icon={Clock3}
              value={`${exam?.total_minutes} min`}
              label="Duration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div
      className="
        min-w-[105px]
        rounded-[16px]
        border
        border-white/15
        bg-white/10
        px-4
        py-3
      "
    >
      <Icon
        size={14}
        className="
          text-[#ffd166]
        "
      />

      <p
        className="
          mt-2
          text-[15px]
          font-black
        "
      >
        {value}
      </p>

      <p
        className="
          text-[8px]
          font-bold
          uppercase
          text-blue-100
        "
      >
        {label}
      </p>
    </div>
  );
}