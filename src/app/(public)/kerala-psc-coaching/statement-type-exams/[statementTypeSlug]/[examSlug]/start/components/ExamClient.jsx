"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import ExamHero from "./ExamHero";
import ExamProgress from "./ExamProgress";
import ExamQuestions from "./ExamQuestions";
import ExamPagination from "./ExamPagination";
import ExamControls from "./ExamControls";
import LoginRequiredModal from "./LoginRequiredModal";

import {
  QUESTIONS_PER_PAGE,
} from "../utils/examUtils";

export default function ExamClient({
  exam,
  questions = [],
  imagePath = "",
  statementTypeSlug,
  examSlug,
}) {
  const router =
    useRouter();

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    answers,
    setAnswers,
  ] = useState({});

  const [
    modalState,
    setModalState,
  ] = useState({
    open: false,
    action: "",
  });

  /* =======================================================
     DURATION
  ======================================================= */

  const durationMinutes =
    Number(
      exam?.total_minutes
    ) || 0;

  const durationSeconds =
    Math.max(
      0,
      Math.floor(
        durationMinutes *
          60
      )
    );

  /* =======================================================
     TIMER
  ======================================================= */

  const [
    endTime,
    setEndTime,
  ] = useState(null);

  const [
    timeLeft,
    setTimeLeft,
  ] = useState(
    durationSeconds
  );

  useEffect(() => {
    if (
      durationSeconds <= 0
    ) {
      setTimeLeft(0);
      setEndTime(null);

      return;
    }

    const deadline =
      Date.now() +
      durationSeconds *
        1000;

    setEndTime(
      deadline
    );

    setTimeLeft(
      durationSeconds
    );
  }, [
    exam?.id,
    durationSeconds,
  ]);

  useEffect(() => {
    if (!endTime) {
      return;
    }

    function updateTimer() {
      const remaining =
        Math.max(
          0,
          Math.ceil(
            (endTime -
              Date.now()) /
              1000
          )
        );

      setTimeLeft(
        remaining
      );
    }

    updateTimer();

    const timer =
      window.setInterval(
        updateTimer,
        250
      );

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [endTime]);

  /* =======================================================
     PAGINATION
  ======================================================= */

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        questions.length /
          QUESTIONS_PER_PAGE
      )
    );

  const currentQuestions =
    useMemo(() => {
      const start =
        (currentPage -
          1) *
        QUESTIONS_PER_PAGE;

      return questions.slice(
        start,
        start +
          QUESTIONS_PER_PAGE
      );
    }, [
      questions,
      currentPage,
    ]);

  const answeredCount =
    Object.keys(
      answers
    ).length;

  const isTimeOver =
    durationSeconds > 0 &&
    timeLeft <= 0;

  /* =======================================================
     ANSWER
  ======================================================= */

  function handleAnswer(
    questionId,
    answer
  ) {
    if (isTimeOver) {
      return;
    }

    setAnswers(
      (previous) => ({
        ...previous,

        [questionId]:
          answer,
      })
    );
  }

  /* =======================================================
     PAGE
  ======================================================= */

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handlePage(
    page
  ) {
    setCurrentPage(
      Math.min(
        Math.max(
          page,
          1
        ),
        totalPages
      )
    );

    scrollTop();
  }

  /* =======================================================
     CONTROLS
  ======================================================= */

  function openLoginModal(
    action
  ) {
    setModalState({
      open: true,
      action,
    });
  }

  function closeModal() {
    setModalState({
      open: false,
      action: "",
    });
  }

  function handleLogin() {
    router.push(
      "/login"
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#f5f9ff]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1300px]
            px-4
            py-8
            sm:px-6
            lg:px-8
          "
        >
          <ExamHero
            exam={exam}
            questionsCount={
              questions.length
            }
            timeLeft={
              timeLeft
            }
            durationMinutes={
              durationMinutes
            }
            statementTypeSlug={
              statementTypeSlug
            }
            examSlug={
              examSlug
            }
          />

          <ExamProgress
            answeredCount={
              answeredCount
            }
            totalQuestions={
              questions.length
            }
            currentPage={
              currentPage
            }
            totalPages={
              totalPages
            }
          />

          {isTimeOver ? (
            <div
              className="
                mt-5
                rounded-[16px]
                border
                border-red-200
                bg-red-50
                p-4
              "
            >
              <p className="font-black text-red-700">
                Time is over
              </p>

              <p className="mt-1 text-sm text-red-600">
                You can no longer
                change your answers.
              </p>
            </div>
          ) : null}

          <ExamQuestions
            questions={
              currentQuestions
            }
            currentPage={
              currentPage
            }
            answers={
              answers
            }
            onAnswer={
              handleAnswer
            }
            disabled={
              isTimeOver
            }
            imagePath={
              imagePath
            }
          />

          <ExamPagination
            currentPage={
              currentPage
            }
            totalPages={
              totalPages
            }
            onPageChange={
              handlePage
            }
          />

          <ExamControls
            onPause={() =>
              openLoginModal(
                "pause"
              )
            }
            onFinish={() =>
              openLoginModal(
                "finish"
              )
            }
          />
        </div>
      </main>

      <LoginRequiredModal
        open={
          modalState.open
        }
        action={
          modalState.action
        }
        onClose={
          closeModal
        }
        onLogin={
          handleLogin
        }
      />
    </>
  );
}