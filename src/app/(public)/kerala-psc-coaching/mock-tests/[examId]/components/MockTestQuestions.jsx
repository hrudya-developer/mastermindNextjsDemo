"use client";

import {
  useEffect,
  useState,
} from "react";

import MockQuestionCard from "./MockQuestionCard";
import MockQuestionPagination from "./MockQuestionPagination";

const QUESTIONS_PER_PAGE = 5;

export default function MockTestQuestions({
  examId,
  cid = 1,
  uid = 21,
}) {
  const [
    questions,
    setQuestions,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  useEffect(() => {
    let active = true;

    async function loadQuestions() {
      try {
        setLoading(true);
        setError("");
        setCurrentPage(1);

        const response =
          await fetch(
            `/api/mock-tests/questions?cid=${encodeURIComponent(
              cid
            )}&uid=${encodeURIComponent(
              uid
            )}&examid=${encodeURIComponent(
              examId
            )}`,
            {
              cache:
                "no-store",
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Unable to load questions."
          );
        }

        if (!active) {
          return;
        }

        setQuestions(
          Array.isArray(
            result?.data
          )
            ? result.data
            : []
        );
      } catch (error) {
        console.error(
          "Mock questions error:",
          error
        );

        if (active) {
          setError(
            error?.message ||
              "Unable to load questions."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadQuestions();

    return () => {
      active = false;
    };
  }, [
    examId,
    cid,
    uid,
  ]);

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        questions.length /
          QUESTIONS_PER_PAGE
      )
    );

  const startIndex =
    (currentPage - 1) *
    QUESTIONS_PER_PAGE;

  const visibleQuestions =
    questions.slice(
      startIndex,
      startIndex +
        QUESTIONS_PER_PAGE
    );

  if (loading) {
    return (
      <div
        className="
          mt-6
          min-h-[300px]
          animate-pulse
          rounded-[26px]
          bg-white
        "
      />
    );
  }

  if (error) {
    return (
      <div
        className="
          mt-6
          rounded-[24px]
          bg-red-50
          p-10
          text-center
          text-sm
          font-semibold
          text-red-500
        "
      >
        {error}
      </div>
    );
  }

  if (
    questions.length ===
    0
  ) {
    return (
      <div
        className="
          mt-6
          rounded-[24px]
          bg-white
          p-10
          text-center
          text-sm
          font-semibold
          text-slate-500
        "
      >
        No questions available.
      </div>
    );
  }

  return (
    <section
      className="
        mt-6
        rounded-[26px]
        border
        border-[#dce8f7]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(49,84,238,0.05)]
        sm:p-6
      "
    >
      <div
        className="
          mb-5
          flex
          items-end
          justify-between
          gap-4
        "
      >
        <div>
          <p
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.14em]
              text-[#3154ee]
            "
          >
            Practice
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-black
              text-[#172554]
            "
          >
            Mock Test Questions
          </h2>
        </div>

        <span
          className="
            rounded-full
            bg-[#eef3ff]
            px-4
            py-2
            text-[10px]
            font-black
            text-[#3154ee]
          "
        >
          {questions.length} Questions
        </span>
      </div>

      <div className="space-y-4">
        {visibleQuestions.map(
          (
            question,
            index
          ) => (
            <MockQuestionCard
              key={
                question?.id ??
                index
              }
              question={
                question
              }
              number={
                startIndex +
                index +
                1
              }
            />
          )
        )}
      </div>

      <MockQuestionPagination
        currentPage={
          currentPage
        }
        totalPages={
          totalPages
        }
        onChange={
          setCurrentPage
        }
      />
    </section>
  );
}