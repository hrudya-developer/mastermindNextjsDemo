import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import { createSlug } from "@/lib/pscSlug";

/* =========================================================
   BUILD IMAGE URL
========================================================= */

function buildImageUrl(iconPath, icon) {
  if (!iconPath || !icon) {
    return "";
  }

  const cleanPath = String(iconPath).replace(/\/+$/, "");
  const cleanIcon = String(icon).replace(/^\/+/, "");

  return `${cleanPath}/${cleanIcon}`;
}

/* =========================================================
   SUB EXAM CARD
========================================================= */

export default function SubExamCard({
  exam,
  iconPath,
}) {
  const title =
    exam?.exam || "Kerala PSC Exam";

  const malayalamTitle =
    exam?.exam_mal || "";

    const imageUrl = buildImageUrl(
        iconPath,
        exam?.icon ||
          exam?.newicon ||
          exam?.icon_large
      );

  const slug = createSlug(title);

  const href =
    `/kerala-psc-coaching/exams/${slug}` +
    `?examId=${encodeURIComponent(exam?.id ?? "")}`;

  return (
    <Link
      href={href}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#dce8f7]
        bg-white
        p-3
        shadow-[0_10px_30px_rgba(22,79,165,0.07)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#087bea]/30
        hover:shadow-[0_18px_45px_rgba(22,79,165,0.14)]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className="
          relative
          h-[190px]
          w-full
          overflow-hidden
          rounded-[20px]
          border
          border-[#e4edf7]
          bg-gradient-to-br
          from-[#eef8ff]
          via-[#f8fbff]
          to-[#f3efff]
          sm:h-[210px]
        "
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} icon`}
            fill
            unoptimized
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw
            "
            className="
              rounded-[20px]
              object-contain
              p-2
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[22px]
                bg-white
                text-[#087bea]
                shadow-[0_10px_30px_rgba(8,123,234,0.12)]
              "
            >
              <GraduationCap
                size={38}
                strokeWidth={1.8}
              />
            </div>
          </div>
        )}

        {/* Top badge */}

        <div
          className="
            absolute
            left-3
            top-3
            z-10
            rounded-full
            border
            border-white/70
            bg-white/90
            px-3
            py-1.5
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.12em]
            text-[#164fa5]
            shadow-sm
            backdrop-blur-md
          "
        >
          Kerala PSC
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-2
          pb-2
          pt-4
        "
      >
        <div className="flex-1">
          <p
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#087bea]
            "
          >
            Exam Preparation
          </p>

          <h3
            className="
              mt-2
              line-clamp-2
              text-[17px]
              font-black
              leading-[1.25]
              tracking-[-0.025em]
              text-[#0b216c]
              transition-colors
              duration-300
              group-hover:text-[#087bea]
              sm:text-[18px]
            "
          >
            {title}
          </h3>

          {malayalamTitle && (
            <p
              className="
                mt-2
                line-clamp-1
                text-[11px]
                leading-5
                text-slate-500
              "
            >
              {malayalamTitle}
            </p>
          )}
        </div>

        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-3
          "
        >
          <span
            className="
              text-[11px]
              font-bold
              text-[#164fa5]
            "
          >
            Explore Exam
          </span>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#087bea]
              to-[#164fa5]
              text-white
              shadow-[0_7px_18px_rgba(8,123,234,0.22)]
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:scale-105
            "
          >
            <ArrowRight
              size={15}
              strokeWidth={2.4}
            />
          </span>
        </div>
      </div>

      {/* Decorative glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-16
          h-32
          w-32
          rounded-full
          bg-[#00b5e8]/0
          blur-[50px]
          transition
          duration-500
          group-hover:bg-[#00b5e8]/10
        "
      />
    </Link>
  );
}