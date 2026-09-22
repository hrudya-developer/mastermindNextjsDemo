import Link from "next/link";

import {
  ArrowLeft,
  BookOpenCheck,
  GraduationCap,
} from "lucide-react";

export default function ExamDetailsHero({
  exam,
  levelSlug,
}) {
  if (!exam) {
    return null;
  }

  const title =
    exam?.exam ||
    exam?.exam_name ||
    exam?.name ||
    "Kerala PSC Exam";

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[28px]
        bg-gradient-to-r
        from-[#071f55]
        via-[#075fc8]
        to-[#7c3aed]
        px-5
        py-8
        text-white
        shadow-[0_20px_50px_rgba(7,95,200,0.18)]
        sm:px-7
        lg:px-10
        lg:py-10
      "
    >
      {/* GRID */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-80
          w-80
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        {levelSlug && (
          <Link
            href={`/kerala-psc-coaching/${levelSlug}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/10
              px-4
              py-2
              text-[11px]
              font-bold
              backdrop-blur-md
              transition
              hover:bg-white/15
            "
          >
            <ArrowLeft size={14} />

            Back to Exams
          </Link>
        )}

        <div
          className="
            mt-7
            flex
            items-start
            gap-4
          "
        >
          <span
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-[18px]
              border
              border-white/15
              bg-white/10
            "
          >
            <GraduationCap size={27} />
          </span>

          <div>
            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-cyan-200
              "
            >
              <BookOpenCheck size={13} />

              Kerala PSC Exam
            </div>

            <h1
              className="
                mt-2
                text-2xl
                font-black
                sm:text-3xl
                lg:text-[38px]
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-3
                max-w-[800px]
                text-[12px]
                leading-6
                text-white/75
                sm:text-[13px]
              "
            >
              Explore video classes, mock tests,
              previous questions, SCERT exams and
              topic-wise practice resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}