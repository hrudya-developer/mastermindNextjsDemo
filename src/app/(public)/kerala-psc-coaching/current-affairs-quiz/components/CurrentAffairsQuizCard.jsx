import Link from "next/link";

import {
  ArrowRight,
  Brain,
  CalendarDays,
} from "lucide-react";

export default function CurrentAffairsQuizCard({
  quiz,
}) {
  const quizName =
    quiz?.name ||
    "Current Affairs Quiz";

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-[#dce8f7]
        bg-gradient-to-br
        from-white
        to-[#f5faff]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#087bea]/25
        hover:shadow-[0_18px_45px_rgba(22,79,165,0.10)]
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          bg-[#087bea]/5
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-[15px]
              bg-[#e8f3ff]
              text-[#087bea]
            "
          >
            <Brain size={21} />
          </div>

          <span
            className="
              rounded-full
              bg-emerald-50
              px-3
              py-1
              text-[9px]
              font-black
              uppercase
              tracking-[0.1em]
              text-emerald-600
            "
          >
            {quiz?.type ||
              "Free"}
          </span>
        </div>

        <h3
          className="
            mt-5
            text-lg
            font-black
            text-[#102c5c]
          "
        >
          {quizName}
        </h3>

        {quiz?.created_at && (
          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-[11px]
              text-slate-500
            "
          >
            <CalendarDays
              size={14}
            />

            {quiz.created_at}
          </div>
        )}

        <Link
          href={`/kerala-psc-coaching/current-affairs-quiz/${quiz?.id}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#164fa5]
            px-4
            py-2.5
            text-[11px]
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-[#087bea]
          "
        >
          Start Quiz

          <ArrowRight
            size={14}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </article>
  );
}