"use client";

import {
  useEffect,
  useState,
} from "react";

import MockTestHeader from "./MockTestHeader";
import MockTestInstructions from "./MockTestInstructions";
import MockTestQuestions from "./MockTestQuestions";

import PremiumMockTestModal from "../../components/PremiumMockTestModal";

export default function MockTestDetails({
  examId,
  cid = 1,
  uid = 21,
}) {
  const [
    exam,
    setExam,
  ] = useState(null);

  const [
    instructions,
    setInstructions,
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
    premiumBlocked,
    setPremiumBlocked,
  ] = useState(false);

  useEffect(() => {
    if (!examId) {
      return;
    }

    const controller =
      new AbortController();

    async function loadDetails() {
      try {
        setLoading(true);
        setError("");
        setExam(null);
        setInstructions([]);
        setPremiumBlocked(false);

        const response =
          await fetch(
            `/api/mock-tests/details?cid=${encodeURIComponent(
              cid
            )}&uid=${encodeURIComponent(
              uid
            )}&examid=${encodeURIComponent(
              examId
            )}`,
            {
              cache:
                "no-store",
              signal:
                controller.signal,
            }
          );

        const text =
          await response.text();

        let result = null;

        try {
          result =
            text
              ? JSON.parse(text)
              : null;
        } catch {
          throw new Error(
            "Server returned an invalid response."
          );
        }

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Unable to load mock test details."
          );
        }

        const examItem =
          Array.isArray(
            result?.exam
          )
            ? result.exam[0] ??
              null
            : null;

        const instructionData =
          Array.isArray(
            result?.data
          )
            ? result.data
            : [];

        if (!examItem) {
          throw new Error(
            "Mock test not found."
          );
        }

        const access =
          String(
            examItem?.access ||
              ""
          )
            .toLowerCase()
            .trim();

        setExam(examItem);

        if (
          access === "paid"
        ) {
          setPremiumBlocked(
            true
          );

          return;
        }

        setInstructions(
          instructionData
        );
      } catch (error) {
        if (
          error?.name ===
          "AbortError"
        ) {
          return;
        }

        console.error(
          "Mock test details error:",
          error
        );

        setError(
          error?.message ||
            "Unable to load mock test details."
        );
      } finally {
        if (
          !controller.signal
            .aborted
        ) {
          setLoading(false);
        }
      }
    }

    loadDetails();

    return () => {
      controller.abort();
    };
  }, [
    examId,
    cid,
    uid,
  ]);

  if (loading) {
    return (
      <div
        className="
          min-h-[420px]
          animate-pulse
          rounded-[28px]
          bg-white
        "
      />
    );
  }

  if (error) {
    return (
      <div
        className="
          rounded-[24px]
          border
          border-red-100
          bg-red-50
          px-6
          py-12
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

  if (!exam) {
    return null;
  }

  if (premiumBlocked) {
    return (
      <>
        <div
          className="
            min-h-[320px]
            rounded-[26px]
            border
            border-[#dce8f7]
            bg-white
          "
        />

        <PremiumMockTestModal
          open
          test={exam}
          onClose={() => {
            window.location.href =
              "/kerala-psc-coaching/mock-tests";
          }}
        />
      </>
    );
  }

  return (
    <>
      <MockTestHeader
        exam={exam}
      />

      <MockTestInstructions
        instructions={
          instructions
        }
      />

      <MockTestQuestions
        examId={examId}
        cid={cid}
        uid={uid}
      />
    </>
  );
}