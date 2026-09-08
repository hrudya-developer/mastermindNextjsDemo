import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

/* =========================================================
   CREATE SEO SLUG FROM API EXAM NAME
========================================================= */

function createCourseSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   BUILD IMAGE URL
========================================================= */

function buildImageUrl(
  filePath,
  icon
) {
  if (!filePath || !icon) {
    return "";
  }

  const cleanFilePath =
    String(filePath).replace(
      /\/+$/,
      ""
    );

  const cleanIcon =
    String(icon).replace(
      /^\/+/,
      ""
    );

  return `${cleanFilePath}/${cleanIcon}`;
}

export default function CourseOptionCard({
  course,
  filePath,
  onClick,
}) {
  /* =======================================================
      EXACT API VALUES
  ======================================================= */

  const courseId =
    Number(course?.id || 0);

  const title =
    course?.exam || "Course";

  const malayalamTitle =
    course?.exam_mal || "";

  const imageUrl =
    buildImageUrl(
      filePath,
      course?.icon
    );

  /* =======================================================
      SEO URL GENERATED FROM API
  ======================================================= */

  const slug =
    createCourseSlug(title);

  const href =
    slug
      ? `/${slug}-coaching`
      : "/main-courses";

  /* =======================================================
      VISUAL VARIATION

      API id is used only for visual variation.
      URL does NOT expose id.
  ======================================================= */

  const isPrimary =
    courseId % 2 !== 0;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        group
        relative
        flex
        h-full
        min-h-[220px]
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(22,79,165,0.14)]

        ${
          isPrimary
            ? `
                border-[#d4e8ff]
                bg-gradient-to-br
                from-[#f7fbff]
                via-white
                to-[#edf6ff]
              `
            : `
                border-[#f1dce5]
                bg-gradient-to-br
                from-[#fffafb]
                via-white
                to-[#fff2f6]
              `
        }
      `}
    >
      {/* ================================================
          GLOW
      ================================================= */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          blur-2xl

          ${
            isPrimary
              ? "bg-[#00b5e8]/10"
              : "bg-[#f13873]/10"
          }
        `}
      />

      {/* ================================================
          TOP ACCENT
      ================================================= */}

      <div
        aria-hidden="true"
        className={`
          absolute
          inset-x-5
          top-0
          h-[3px]
          rounded-b-full
          bg-gradient-to-r

          ${
            isPrimary
              ? `
                  from-[#164fa5]
                  via-[#017cc0]
                  to-[#00b5e8]
                `
              : `
                  from-[#0b216c]
                  via-[#164fa5]
                  to-[#f13873]
                `
          }
        `}
      />

      {/* ================================================
          COURSE LOGO
      ================================================= */}

      {imageUrl && (
        <div
          className={`
            relative
            h-[58px]
            w-[58px]
            shrink-0
            overflow-hidden
            rounded-[17px]
            border
            bg-white
            shadow-[0_8px_22px_rgba(0,0,0,0.07)]
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:scale-105

            ${
              isPrimary
                ? "border-[#c9e0ff]"
                : "border-[#f2ccd9]"
            }
          `}
        >
          <Image
            src={imageUrl}
            alt={`${title} logo`}
            fill
            sizes="58px"
            className="
              object-contain
              p-2
            "
            unoptimized
          />
        </div>
      )}

      {/* ================================================
          TITLE
      ================================================= */}

      <h3
        className="
          relative
          mt-4
          text-[19px]
          font-extrabold
          tracking-[-0.02em]
          text-[#081f5c]
        "
      >
        {title}
      </h3>

      {/* API Malayalam name */}
      {malayalamTitle && (
        <p
          className="
            relative
            mt-1
            text-[11px]
            font-medium
            text-slate-400
          "
        >
          {malayalamTitle}
        </p>
      )}

      {/* ================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          relative
          mt-2
          min-h-[40px]
          text-[12px]
          leading-5
          text-slate-500
        "
      >
        Explore {title} courses, study
        materials, mock tests and exam
        preparation resources.
      </p>

      {/* ================================================
          FOOTER
      ================================================= */}

      <div
        className="
          relative
          mt-auto
          flex
          items-center
          justify-between
          gap-3
          pt-5
        "
      >
        <span
          className={`
            text-[12px]
            font-bold

            ${
              isPrimary
                ? "text-[#164fa5]"
                : "text-[#f13873]"
            }
          `}
        >
          Explore {title}
        </span>

        <span
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            text-white
            shadow-[0_7px_16px_rgba(0,0,0,0.12)]
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:scale-105

            ${
              isPrimary
                ? `
                    bg-gradient-to-br
                    from-[#164fa5]
                    to-[#017cc0]
                  `
                : `
                    bg-gradient-to-br
                    from-[#0b216c]
                    to-[#f13873]
                  `
            }
          `}
        >
          <ArrowRight size={16} />
        </span>
      </div>

      {/* Internal API id - not displayed */}
      <span
        data-course-id={courseId}
        className="hidden"
      />
    </Link>
  );
}