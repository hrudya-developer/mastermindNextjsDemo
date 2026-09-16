"use client";

import {
  useState,
} from "react";

import {
  Check,
  X,
} from "lucide-react";

export default function MockQuestionCard({
  question,
  number,
}) {
  const [
    selected,
    setSelected,
  ] = useState(null);

  const options = [
    {
      key: "A",
      text:
        question?.option1,
    },
    {
      key: "B",
      text:
        question?.option2,
    },
    {
      key: "C",
      text:
        question?.option3,
    },
    {
      key: "D",
      text:
        question?.option4,
    },
  ].filter(
    (option) =>
      option.text
  );

  const correctKey =
    String(
      question?.answerkey ||
        ""
    )
      .trim()
      .toUpperCase();

  const answered =
    selected !== null;

  return (
    <article
      className="
        overflow-hidden
        rounded-[22px]
        border
        border-[#dce8f7]
        bg-white
      "
    >
      <div
        className="
          flex
          items-start
          gap-4
          bg-gradient-to-r
          from-[#f2f6ff]
          via-[#faf7ff]
          to-[#fff5fa]
          p-5
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[13px]
            bg-gradient-to-br
            from-[#5b216d]
            to-[#3154ee]
            text-[11px]
            font-black
            text-white
          "
        >
          {number}
        </div>

        <div>
          <p
            className="
              text-[9px]
              font-black
              uppercase
              tracking-[0.12em]
              text-[#3154ee]
            "
          >
            Question {number}
          </p>

          <p
            className="
              mt-2
              text-[14px]
              font-bold
              leading-7
              text-[#172554]
            "
          >
            {question?.question}
          </p>
        </div>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-3
          p-5
          lg:grid-cols-2
        "
      >
        {options.map(
          (option) => {
            const isSelected =
              selected ===
              option.key;

            const isCorrect =
              answered &&
              option.key ===
                correctKey;

            const isWrong =
              answered &&
              isSelected &&
              !isCorrect;

            return (
              <button
                key={
                  option.key
                }
                type="button"
                disabled={
                  answered
                }
                onClick={() =>
                  setSelected(
                    option.key
                  )
                }
                className={`
                  flex
                  cursor-pointer
                  items-start
                  gap-3
                  rounded-[16px]
                  border
                  px-4
                  py-4
                  text-left

                  ${
                    isCorrect
                      ? `
                          border-emerald-300
                          bg-emerald-50
                        `
                      : isWrong
                        ? `
                            border-rose-300
                            bg-rose-50
                          `
                        : `
                            border-[#e1e8f5]
                            bg-[#fafcff]
                            hover:border-[#3154ee]/30
                            hover:bg-[#f4f7ff]
                          `
                  }
                `}
              >
                <span
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[10px]
                    font-black

                    ${
                      isCorrect
                        ? "bg-emerald-500 text-white"
                        : isWrong
                          ? "bg-rose-500 text-white"
                          : "bg-[#eaf0ff] text-[#3154ee]"
                    }
                  `}
                >
                  {isCorrect ? (
                    <Check
                      size={14}
                    />
                  ) : isWrong ? (
                    <X
                      size={14}
                    />
                  ) : (
                    option.key
                  )}
                </span>

                <span
                  className="
                    pt-1
                    text-[12px]
                    font-semibold
                    leading-5
                    text-slate-600
                  "
                >
                  {option.text}
                </span>
              </button>
            );
          }
        )}
      </div>
    </article>
  );
}