import Link from "next/link";

import {
  ArrowLeft,
} from "lucide-react";

import MockTestQuestions from "../components/MockTestQuestions";

function getNumberParam(
  value,
  fallback
) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return fallback;
  }

  const parsed =
    Number(value);

  return Number.isNaN(
    parsed
  )
    ? fallback
    : parsed;
}

export const metadata = {
  title:
    "Kerala PSC Mock Test Exam | MasterMind Academy",

  robots: {
    index: false,
    follow: false,
  },
};

export default async function MockExamStartPage({
  params,
  searchParams,
}) {
  const {
    examId,
  } = await params;

  const query =
    await searchParams;

  const uid =
    getNumberParam(
      query?.uid,
      0
    );

  const cid =
    getNumberParam(
      query?.cid,
      1
    );

  const title =
    query?.title || "";

  return (
    <main
      className="
        min-h-screen
        bg-[#f5f9ff]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1450px]
          px-4
          py-6
          sm:px-6
          lg:px-8
          lg:py-8
        "
      >
        {/* =========================
            TOP
        ========================= */}

        <div
          className="
            mb-6
            mt-20
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <Link
              href={{
                pathname:
                  `/kerala-psc-coaching/mock-tests/${examId}`,
                query: {
                  uid:
                    String(
                      uid
                    ),
                  cid:
                    String(
                      cid
                    ),
                  title,
                },
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-4
                py-2
                text-[11px]
                font-bold
                text-[#164fa5]
                transition
                hover:border-blue-300
                hover:bg-blue-100
              "
            >
              <ArrowLeft
                size={14}
              />

              Back to Instructions
            </Link>

            <p
              className="
                mt-3
                text-[11px]
                text-slate-500
              "
            >
              Answer the questions
              before the timer
              expires.
            </p>
          </div>
        </div>

        {/* =========================
            EXAM
        ========================= */}

        <MockTestQuestions
          examId={
            examId
          }
          uid={
            uid
          }
          cid={
            cid
          }
          examTitle={
            title
          }
        />
      </div>
    </main>
  );
}