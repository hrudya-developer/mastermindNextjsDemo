"use client";

import { useState } from "react";

import CurrentAffairsQuizMonths from "./CurrentAffairsQuizMonths";
import CurrentAffairsQuizList from "./CurrentAffairsQuizList";

export default function CurrentAffairsQuizContent() {
  const [selectedMonth, setSelectedMonth] =
    useState(null);

  // First view: month/year cards
  if (!selectedMonth) {
    return (
      <CurrentAffairsQuizMonths
        cid={1}
        uid={21}
        onSelect={setSelectedMonth}
      />
    );
  }

  // Second view: quiz list
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setSelectedMonth(null)
        }
        className="
          mt-6
          inline-flex
          items-center
          rounded-full
          border
          border-[#dce8f7]
          bg-white
          px-4
          py-2.5
          text-xs
          font-bold
          text-[#164fa5]
          transition
          hover:border-[#164fa5]
        "
      >
        ← Back to Months
      </button>

      <CurrentAffairsQuizList
        cid={selectedMonth?.cid}
        uid={21}
        month={
          selectedMonth?.month
        }
        year={
          selectedMonth?.year
        }
      />
    </div>
  );
}