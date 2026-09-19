"use client";

import {
  useState,
} from "react";

import {
  ArrowUpRight,
  FileQuestion,
  ListChecks,
} from "lucide-react";

import MainCoursesModal from "@/components/main-course-modal/MainCoursesModal";

export default function HeroTopBar() {
  const [
    destinationPath,
    setDestinationPath,
  ] = useState("");

  const openTopicWiseModal = () => {
    setDestinationPath(
      "topic-wise-exams"
    );
  };

  const openStatementWiseModal =
    () => {
      setDestinationPath(
        "statement-type-exams"
      );
    };

  const handleClose = () => {
    setDestinationPath("");
  };

  return (
    <>
      <div
        className="
          relative
          z-20
          flex
          items-center
          justify-between
          gap-3
          px-5
          pt-5
          sm:px-7
          lg:px-10
        "
      >
        {/* ONLINE LEARNERS */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white/90
            px-4
            py-2
            text-[11px]
            font-semibold
            text-[#0b216c]
            shadow-sm
            backdrop-blur
          "
        >
          <span
            className="
              relative
              flex
              h-2.5
              w-2.5
            "
          >
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-green-500
                opacity-60
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-green-600
              "
            />
          </span>

          1000+ Learners Online
        </div>

        {/* FEATURE BUTTONS */}

        <div
          className="
            hidden
            items-center
            gap-3
            md:flex
          "
        >
          <FeaturePill
            onClick={
              openTopicWiseModal
            }
            icon={
              <ListChecks
                size={15}
              />
            }
          >
            Topic/Sub topic wise
            exams
          </FeaturePill>

          <FeaturePill
            onClick={
              openStatementWiseModal
            }
            icon={
              <FileQuestion
                size={15}
              />
            }
          >
            Topic wise statement
            type
          </FeaturePill>
        </div>
      </div>

      {/* MAIN COURSE MODAL */}

      <MainCoursesModal
        open={Boolean(
          destinationPath
        )}
        onClose={
          handleClose
        }
        destinationPath={
          destinationPath
        }
      />
    </>
  );
}

/* =========================================================
   FEATURE PILL
========================================================= */

function FeaturePill({
  children,
  icon,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        inline-flex
        cursor-pointer
        items-center
        gap-2
        rounded-full
        border
        border-white/40
        bg-white
        py-2.5
        pl-3
        pr-3
        text-[11px]
        font-bold
        text-[#0b216c]
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#0b216c]
          text-white
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {icon}
      </span>

      <span className="whitespace-nowrap">
        {children}
      </span>

      <ArrowUpRight
        size={14}
        className="
          shrink-0
          opacity-60
          transition-all
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:opacity-100
        "
      />
    </button>
  );
}