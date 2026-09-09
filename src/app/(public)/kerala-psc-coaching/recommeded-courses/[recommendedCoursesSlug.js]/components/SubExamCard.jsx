import Image from "next/image";
import Link from "next/link";

export default function SubExamCard({
  exam,
}) {
  const examName =
    exam?.exam ||
    exam?.name ||
    "Mastermind PSC Exam";

  return (
    <Link
      href={`/kerala-psc-coaching/sub-exams/${exam?.id}`}
      aria-label={examName}
      className="
        group
        relative
        block
        h-full
        min-h-0
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-[#164fa5]/10
        bg-gradient-to-br
        from-[#f5fbff]
        via-[#eef8ff]
        to-[#edf4ff]
        shadow-[0_8px_24px_rgba(11,33,108,0.06)]
        transition
        duration-300

        hover:-translate-y-1
        hover:border-[#164fa5]/20
        hover:shadow-[0_16px_34px_rgba(22,79,165,0.12)]
      "
    >
      {/* TOP GRADIENT */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          top-0
          z-30
          h-[4px]
          bg-gradient-to-r
          from-[#0b216c]
          via-[#164fa5]
          to-[#00b5e8]
        "
      />

      {/* LEFT DOTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          z-10
          grid
          -translate-y-1/2
          grid-cols-4
          gap-2
          opacity-40
        "
      >
        {Array.from({
          length: 16,
        }).map((_, index) => (
          <span
            key={index}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#00b5e8]/60
            "
          />
        ))}
      </div>

      {/* RIGHT DOTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          z-10
          grid
          -translate-y-1/2
          grid-cols-4
          gap-2
          opacity-30
        "
      >
        {Array.from({
          length: 16,
        }).map((_, index) => (
          <span
            key={index}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#164fa5]/50
            "
          />
        ))}
      </div>

      {/* LEFT DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-10
          h-28
          w-28
          rounded-full
          bg-[#00b5e8]/8
        "
      />

      {/* RIGHT DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          -top-7
          h-28
          w-28
          rounded-full
          bg-[#164fa5]/7
        "
      />

      {/* IMAGE */}
      <div
        className="
          absolute
          bottom-3
          left-1/2
          top-3
          z-20
          w-[52%]
          -translate-x-1/2
          overflow-hidden
          rounded-[16px]
          border
          border-white/80
          bg-white
          shadow-[0_8px_22px_rgba(11,33,108,0.08)]
        "
      >
        {exam?.imageUrl ? (
          <Image
            src={exam.imageUrl}
            alt={examName}
            fill
            unoptimized
            sizes="
              (max-width: 640px) 70vw,
              (max-width: 768px) 45vw,
              (max-width: 1024px) 30vw,
              20vw
            "
            className="
              object-contain
              object-center
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.04]
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#eaf7ff]
              via-[#f7fbff]
              to-[#e7f5ff]
            "
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0b216c]/5
          via-transparent
          to-transparent
        "
      />
    </Link>
  );
}