"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  UserPlus,
} from "lucide-react";

import SubExamCard from "./SubExamCard";

export default function SubExamsGrid() {
  const [subExams, setSubExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =====================================================
     FETCH SUB EXAMS
  ====================================================== */

  useEffect(() => {
    let active = true;

    async function loadSubExams() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/sub-exams",
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Unable to load sub exams."
          );
        }

        if (!active) return;

        const source =
          Array.isArray(result?.subExams)
            ? result.subExams
            : Array.isArray(result?.subexams)
              ? result.subexams
              : [];

        setSubExams(source);
      } catch (error) {
        console.error(
          "Sub exam fetch error:",
          error
        );

        if (active) {
          setError(
            "Unable to load exams."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadSubExams();

    return () => {
      active = false;
    };
  }, []);

  /* =====================================================
     LOADING
  ====================================================== */

  if (loading) {
    return (
      <div
        className="
          grid
          auto-rows-[160px]
          grid-cols-1
          gap-3

          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {Array.from({
          length: 8,
        }).map((_, index) => (
          <div
            key={index}
            className="
              h-full
              animate-pulse
              rounded-[20px]
              bg-slate-100
            "
          />
        ))}
      </div>
    );
  }

  /* =====================================================
     ERROR
  ====================================================== */

  if (error) {
    return (
      <div
        className="
          rounded-[18px]
          border
          border-red-100
          bg-red-50
          px-5
          py-4
          text-sm
          text-red-600
        "
      >
        {error}
      </div>
    );
  }

  /* =====================================================
     GRID
  ====================================================== */

  return (
    <div
      className="
        grid
        auto-rows-[160px]
        grid-cols-1
        gap-3

        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {/* API SUB EXAMS */}
      {subExams.map((exam) => (
        <SubExamCard
          key={exam.id}
          exam={exam}
        />
      ))}

      {/* =================================================
          REGISTER WITH US
      ================================================== */}

      <Link
        href="/register"
        className="
          group
          relative
          h-full
          min-h-0
          w-full
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#164fa5]
          via-[#123f91]
          to-[#0b216c]
          p-4
          shadow-[0_14px_34px_rgba(11,33,108,0.20)]
          transition
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_20px_42px_rgba(11,33,108,0.28)]
        "
      >
        {/* TOP GRADIENT */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            top-0
            z-20
            h-[4px]
            bg-gradient-to-r
            from-[#00b5e8]
            via-white
            to-[#df1768]
          "
        />

        {/* GRID PATTERN */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            [background-image:linear-gradient(rgba(255,255,255,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.065)_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />

        {/* CYAN GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-36
            w-36
            rounded-full
            bg-[#00b5e8]/20
            blur-[45px]
          "
        />

        {/* PINK GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-14
            -left-10
            h-32
            w-32
            rounded-full
            bg-[#df1768]/14
            blur-[45px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            h-full
            min-h-0
            flex-col
          "
        >
          {/* TOP */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-3
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center             
                text-pink-400
                backdrop-blur-md
              "
            >
              <UserPlus size={17} />
            </div>

            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-white
                transition
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:bg-white/20
              "
            >
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-auto">
            <p
              className="
                text-[8px]
                font-extrabold
                uppercase
                tracking-[0.17em]
                text-[#69ddff]
              "
            >
              Start Your Journey
            </p>

            <h3
              className="
                mt-1
                text-[15px]
                font-black
                leading-tight
                tracking-[-0.025em]
                text-white
              "
            >
              Register With Us
            </h3>

            <p
              className="
                mt-1
                line-clamp-2
                text-[9px]
                leading-[1.4]
                text-white/55
              "
            >
              Join Mastermind and start
              your exam preparation with
              expert guidance.
            </p>

            <span
              className="
                mt-2
                inline-flex
                items-center
                gap-1
                text-[10px]
                font-semibold
                text-[#7ee6ff]
                transition
                group-hover:text-white
              "
            >
              Register Now

              <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}