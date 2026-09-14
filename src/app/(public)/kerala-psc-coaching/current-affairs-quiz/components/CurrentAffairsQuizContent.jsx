"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import CurrentAffairsQuizMonths from "./CurrentAffairsQuizMonths";
import CurrentAffairsQuizList from "./CurrentAffairsQuizList";

export default function CurrentAffairsQuizContent() {
  const [selectedMonth, setSelectedMonth] =
    useState(null);

  if (!selectedMonth) {
    return (
      <CurrentAffairsQuizMonths
        cid={1}
        uid={21}
        onSelect={(item) =>
          setSelectedMonth(item)
        }
      />
    );
  }

  return (
    <div>
      <div
        className="
          mt-6
          flex
          flex-wrap
          items-center
          justify-between
          gap-4
        "
      >
        <button
          type="button"
          onClick={() =>
            setSelectedMonth(null)
          }
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#dce8f7]
            bg-white
            px-4
            py-2.5
            text-xs
            font-bold
            text-[#164fa5]
            shadow-sm
            transition
            hover:border-[#164fa5]
          "
        >
          <ArrowLeft size={15} />

          Back to Months
        </button>

        <div className="text-right">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-400
            "
          >
            Selected Month
          </p>

          <h2
            className="
              mt-1
              text-lg
              font-black
              text-[#102c5c]
            "
          >
            {selectedMonth?.month}{" "}
            {selectedMonth?.year}
          </h2>
        </div>
      </div>

      <CurrentAffairsQuizList
        cid={60}
        uid={21}
        selectedMonth={selectedMonth}
      />
    </div>
  );
}