import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
} from "lucide-react";

const themes = {
  pink: {
    wrapper:
      "border-[#ffd1e3] bg-gradient-to-br from-[#fff7fb] via-[#fff4f9] to-[#ffe7f3]",
    title: "text-[#a0124e]",
    button:
      "bg-gradient-to-r from-[#ff2f82] to-[#f13873]",
    glow: "bg-[#f13873]/10",
  },

  blue: {
    wrapper:
      "border-[#cfe8fb] bg-gradient-to-br from-[#f3fbff] via-[#eef8ff] to-[#e1f3ff]",
    title: "text-[#0757b8]",
    button:
      "bg-gradient-to-r from-[#087bea] to-[#0466AF]",
    glow: "bg-[#00b5e8]/10",
  },

  rose: {
    wrapper:
      "border-[#ffd1df] bg-gradient-to-br from-[#fff7fa] via-[#fff0f5] to-[#ffe4ef]",
    title: "text-[#c2185b]",
    button:
      "bg-gradient-to-r from-[#f13873] to-[#d91b5c]",
    glow: "bg-[#f13873]/10",
  },

  violet: {
    wrapper:
      "border-[#ded6ff] bg-gradient-to-br from-[#faf8ff] via-[#f4f0ff] to-[#ece6ff]",
    title: "text-[#242b8f]",
    button:
      "bg-gradient-to-r from-[#2840b6] to-[#0b216c]",
    glow: "bg-[#6548e8]/10",
  },
};

const pointIcons = [
  BookOpen,
  FileText,
  CheckCircle2,
];

export default function RecommendedCourseCard({
  course,
}) {
  const theme =
    themes[course.theme] ||
    themes.blue;

  const href =
    `/kerala-psc-coaching/recommended-courses/${course.slug}`;

  return (
    <article
      data-aos="fade-up"
      className={`
        group
        relative
        flex
        min-h-[285px]
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        p-5
        shadow-[0_10px_26px_rgba(15,58,110,0.06)]
        transition-all
        duration-300

        hover:-translate-y-1.5
        hover:shadow-[0_18px_38px_rgba(15,58,110,0.14)]

        ${theme.wrapper}
      `}
    >
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          blur-3xl

          ${theme.glow}
        `}
      />

      {course.badge && (
        <span
          className="
            relative
            z-10
            w-fit
            rounded-full
            bg-[#087bea]
            px-3
            py-1
            text-[9px]
            font-bold
            text-white
          "
        >
          {course.badge}
        </span>
      )}

      <div
        className="
          relative
          z-10
          grid
          flex-1
          grid-cols-[minmax(0,1fr)_105px]
          gap-3
        "
      >
        <div className="min-w-0">
          <h3
            className={`
              mt-2
              text-[20px]
              font-black
              leading-[1.05]
              tracking-[-0.03em]

              ${theme.title}
            `}
          >
            {course.title}
          </h3>

          <div
            className="
              mt-5
              space-y-3
            "
          >
            {course.points.map(
              (point, index) => {
                const Icon =
                  pointIcons[
                    index %
                      pointIcons.length
                  ];

                return (
                  <div
                    key={point}
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Icon
                      className="
                        h-4
                        w-4
                        shrink-0
                        text-[#164fa5]
                      "
                      strokeWidth={2}
                    />

                    <span
                      className="
                        text-[11px]
                        font-medium
                        leading-4
                        text-[#415373]
                      "
                    >
                      {point}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div
          className="
            relative
            mt-auto
            h-[135px]
            w-[105px]
          "
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="120px"
            className="
              object-contain
              object-bottom
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </div>

      <Link
        href={href}
        className={`
          relative
          z-10
          mt-4
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          px-4
          py-2.5
          text-[10px]
          font-bold
          text-white
          shadow-[0_8px_18px_rgba(0,0,0,0.12)]
          transition-all
          duration-300

          hover:-translate-y-0.5

          ${theme.button}
        `}
      >
        Explore Course

        <ArrowRight size={14} />
      </Link>
    </article>
  );
}