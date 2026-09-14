"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Brain,
  LoaderCircle,
} from "lucide-react";

import CurrentAffairsQuizCard from "./CurrentAffairsQuizCard";
import QuizEmpty from "./QuizEmpty";

export default function CurrentAffairsQuizList({
  cid = 60,
  uid = 21,
  selectedMonth,
}) {
  const [quizzes, setQuizzes] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let active = true;

    async function loadQuizzes() {
      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            `/api/current-affairs-quiz/list?cid=${encodeURIComponent(
              cid
            )}&uid=${encodeURIComponent(
              uid
            )}`,
            {
              cache: "no-store",
            }
          );

        const result =
          await response.json();

        console.log(
          "QUIZ API RESULT:",
          result
        );

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Unable to load quizzes."
          );
        }

        if (!active) return;

        setQuizzes(
          Array.isArray(
            result?.data
          )
            ? result.data
            : []
        );
      } catch (error) {
        console.error(
          "Quiz list error:",
          error
        );

        if (active) {
          setError(
            "Unable to load current affairs quizzes."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadQuizzes();

    return () => {
      active = false;
    };
  }, [cid, uid]);

  return (
    <section
      className="
        mt-5
        rounded-[26px]
        border
        border-[#dce8f7]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(11,33,108,0.05)]
        sm:p-6
      "
    >
      <div
        className="
          mb-6
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-[14px]
            bg-gradient-to-br
            from-[#087bea]
            to-[#164fa5]
            text-white
          "
        >
          <Brain size={19} />
        </div>

        <div>
          <h2
            className="
              text-xl
              font-black
              text-[#102c5c]
            "
          >
            {selectedMonth?.month}{" "}
            {selectedMonth?.year} Quizzes
          </h2>

          <p
            className="
              mt-0.5
              text-[11px]
              text-slate-500
            "
          >
            Choose a quiz and start
            practicing.
          </p>
        </div>
      </div>

      {loading && (
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {Array.from({
            length: 6,
          }).map((_, index) => (
            <div
              key={index}
              className="
                min-h-[200px]
                animate-pulse
                rounded-[22px]
                bg-slate-100
              "
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <div
          className="
            rounded-[20px]
            border
            border-red-100
            bg-red-50
            px-5
            py-10
            text-center
            text-sm
            font-semibold
            text-red-500
          "
        >
          {error}
        </div>
      )}

      {!loading &&
        !error &&
        (quizzes.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {quizzes.map(
              (quiz) => (
                <CurrentAffairsQuizCard
                  key={quiz?.id}
                  quiz={quiz}
                />
              )
            )}
          </div>
        ) : (
          <QuizEmpty />
        ))}
    </section>
  );
}