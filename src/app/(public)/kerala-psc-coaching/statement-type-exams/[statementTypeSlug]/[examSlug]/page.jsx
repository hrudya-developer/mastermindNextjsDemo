import Link from "next/link";

import {
  notFound,
  redirect,
} from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  FileQuestion,
  Trophy,
} from "lucide-react";

import {
  getStatementTypeTopics,
  getStatementTypeExamsByTopic,
  getStatementTypeExamDetails,
} from "@/lib/statementTypeExamHelper";

/* =========================================================
   SLUG
========================================================= */

function createSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatSlug(value = "") {
  return String(value)
    .split("-")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}) {
  const {
    examSlug,
  } = await params;

  const name =
    formatSlug(examSlug);

  return {
    title:
      `${name} | MasterMind Academy`,

    description:
      `Practice ${name} Kerala PSC statement type questions.`,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function StatementTypeExamDetailsPage({
  params,
}) {
  const {
    statementTypeSlug,
    examSlug,
  } = await params;

  const uid = 0;
  const cid = 1;
  const type = "tst";

  /* =======================================================
     RESOLVE TOPIC
  ======================================================= */

  const topicsResult =
    await getStatementTypeTopics({
      uid,
      cid,
      type,
    });

  const topics =
    Array.isArray(
      topicsResult?.data
    )
      ? topicsResult.data
      : [];

  const selectedTopic =
    topics.find(
      (item) =>
        createSlug(
          item?.subject
        ) ===
        statementTypeSlug
    );

  if (!selectedTopic) {
    notFound();
  }

  /* =======================================================
     RESOLVE EXAM
  ======================================================= */

  const examsResult =
    await getStatementTypeExamsByTopic({
      uid,
      topicId:
        selectedTopic.id,
      type,
    });

  const exams =
    Array.isArray(
      examsResult?.data
    )
      ? examsResult.data
      : [];

  const selectedExam =
    exams.find(
      (item) =>
        createSlug(
          item?.exam_name
        ) ===
        examSlug
    );

  if (!selectedExam) {
    notFound();
  }

  /* =======================================================
     BLOCK DIRECT PREMIUM ACCESS
  ======================================================= */

  const isPaid =
    String(
      selectedExam?.access ||
        ""
    ).toLowerCase() ===
    "paid";

  if (isPaid) {
    redirect("/login");
  }

  const examId =
    selectedExam.id;

  /* =======================================================
     DETAILS
  ======================================================= */

  const detailsResult =
    await getStatementTypeExamDetails({
      uid,
      cid,
      examId,
      type,
      offset: 0,
    });

  const exam =
    detailsResult?.exam;

  const instructions =
    Array.isArray(
      detailsResult?.instructions
    )
      ? detailsResult.instructions
      : [];

  if (
    !detailsResult?.status ||
    !exam
  ) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-4
          py-8
          sm:px-6
          lg:px-8
        "
      >
        <Link
          href={
            `/kerala-psc-coaching/statement-type-exams/${statementTypeSlug}`
          }
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#075fc8] mt-20
          "
        >
          <ArrowLeft size={16} />

          Back to Exams
        </Link>

        {/* HERO */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-gradient-to-r
            from-[#071f55]
            via-[#075fc8]
            to-[#7c3aed]
            p-6
            text-white
            sm:p-8
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.06]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:34px_34px]
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-blue-100
              "
            >
              Kerala PSC Statement Type
            </p>

            <h1
              className="
                mt-2
                text-2xl
                font-black
                sm:text-3xl
              "
            >
              {exam?.exam_name}
            </h1>

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-3
              "
            >
              <ExamStat
                icon={
                  FileQuestion
                }
                label="Questions"
                value={
                  exam?.total_questions ??
                  0
                }
              />

              <ExamStat
                icon={Trophy}
                label="Marks"
                value={
                  exam?.total_mark ??
                  0
                }
              />

              <ExamStat
                icon={Clock3}
                label="Duration"
                value={`${exam?.total_minutes || 0} Minutes`}
              />
            </div>
          </div>
        </section>

        {/* INSTRUCTIONS */}

        <section
          className="
            mt-6
            rounded-[24px]
            border
            border-slate-200
            bg-white
            p-6
            sm:p-8
          "
        >
          <p
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.14em]
              text-pink-500
            "
          >
            Before You Begin
          </p>

          <h2
            className="
              mt-2
              text-xl
              font-black
              text-[#071f55]
            "
          >
            Exam Instructions
          </h2>

          <div className="mt-6 space-y-4">
            {instructions.map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-[16px]
                    bg-[#f5f9ff]
                    p-4
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
                      rounded-full
                      bg-[#075fc8]
                      text-xs
                      font-black
                      text-white
                    "
                  >
                    {index + 1}
                  </span>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {
                      item?.instructions
                    }
                  </p>
                </div>
              )
            )}
          </div>

          <div
            className="
              mt-8
              flex
              justify-end
            "
          >
            <Link
              href={
                `/kerala-psc-coaching/statement-type-exams/${statementTypeSlug}/${examSlug}/start`
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-[14px]
                bg-gradient-to-r
                from-[#075fc8]
                via-[#6366f1]
                to-[#7c3aed]
                px-7
                py-4
                text-sm
                font-bold
                text-white
              "
            >
              Start Exam

              <ArrowRight
                size={17}
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function ExamStat({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        rounded-[16px]
        border
        border-white/10
        bg-white/10
        p-4
      "
    >
      <Icon size={18} />

      <p
        className="
          mt-2
          text-xs
          text-blue-100
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          text-lg
          font-black
        "
      >
        {value}
      </p>
    </div>
  );
}