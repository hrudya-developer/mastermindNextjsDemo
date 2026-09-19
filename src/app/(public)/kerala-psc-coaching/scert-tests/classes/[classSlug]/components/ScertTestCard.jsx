"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BookOpenCheck,
  Crown,
  FileQuestion,
  LockKeyhole,
  Trophy,
} from "lucide-react";

/* =========================================================
   CREATE SEO FRIENDLY SLUG
========================================================= */

function createSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   SCERT TEST CARD
========================================================= */

export default function ScertTestCard({
  test,
}) {
  const [
    showPremiumModal,
    setShowPremiumModal,
  ] = useState(false);

  if (!test) {
    return null;
  }

  /* =========================================================
     ACCESS TYPE
  ========================================================= */

  const isPaid =
    String(
      test?.access || ""
    ).toLowerCase() ===
    "paid";

  /* =========================================================
     SEO FRIENDLY TEST SLUG
  ========================================================= */

  const testSlug =
    createSlug(
      test?.exam_name ||
        "scert-practice-test"
    );

  const examHref =
    `/kerala-psc-coaching/scert-tests/tests/${testSlug}`;

  /* =========================================================
     THEME
  ========================================================= */

  const cardTheme =
    isPaid
      ? `
        border-amber-200
        bg-gradient-to-br
        from-amber-50
        via-[#fffaf0]
        to-white
        hover:border-amber-300
        hover:shadow-[0_20px_45px_rgba(217,119,6,0.12)]
      `
      : `
        border-emerald-200
        bg-gradient-to-br
        from-emerald-50
        via-[#f3fff8]
        to-white
        hover:border-emerald-300
        hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)]
      `;

  const iconTheme =
    isPaid
      ? `
        bg-gradient-to-br
        from-amber-100
        to-amber-50
        text-amber-700
      `
      : `
        bg-gradient-to-br
        from-emerald-100
        to-green-50
        text-emerald-700
      `;

  const labelTheme =
    isPaid
      ? "text-amber-700"
      : "text-emerald-700";

  const statTheme =
    isPaid
      ? `
        border-amber-100
        bg-white/75
      `
      : `
        border-emerald-100
        bg-white/75
      `;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <article
        className={`
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[24px]
          border
          p-6
          shadow-[0_10px_30px_rgba(15,23,42,0.05)]
          transition-all
          duration-300
          hover:-translate-y-1

          ${cardTheme}
        `}
      >
        {/* =================================================
            TOP
        ================================================= */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl

              ${iconTheme}
            `}
          >
            {isPaid ? (
              <Crown
                size={22}
              />
            ) : (
              <BookOpenCheck
                size={23}
              />
            )}
          </div>

          <span
            className={`
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              px-3
              py-1.5
              text-[11px]
              font-bold

              ${
                isPaid
                  ? `
                    border-amber-200
                    bg-amber-100
                    text-amber-800
                  `
                  : `
                    border-emerald-200
                    bg-emerald-100
                    text-emerald-800
                  `
              }
            `}
          >
            {isPaid ? (
              <>
                <Crown
                  size={13}
                />

                Premium
              </>
            ) : (
              "Free"
            )}
          </span>
        </div>

        {/* =================================================
            TEST INFORMATION
        ================================================= */}

        <div className="mt-5">
          <p
            className={`
              text-[10px]
              font-black
              uppercase
              tracking-[0.14em]

              ${labelTheme}
            `}
          >
            {test?.subcourse ||
              "SCERT"}
          </p>

          <h2
            className="
              mt-2
              text-lg
              font-black
              leading-7
              text-[#071f55]
            "
          >
            {test?.exam_name ||
              "SCERT Practice Test"}
          </h2>

          {test?.course ? (
            <p
              className="
                mt-2
                text-xs
                font-medium
                text-slate-500
              "
            >
              {test.course}
            </p>
          ) : null}
        </div>

        {/* =================================================
            TEST STATS
        ================================================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-3
          "
        >
          {/* QUESTIONS */}

          <div
            className={`
              rounded-xl
              border
              p-3

              ${statTheme}
            `}
          >
            <FileQuestion
              size={16}
              className={
                isPaid
                  ? "text-amber-600"
                  : "text-emerald-600"
              }
            />

            <p
              className="
                mt-2
                text-[10px]
                text-slate-400
              "
            >
              Questions
            </p>

            <p
              className="
                mt-0.5
                text-sm
                font-black
                text-slate-700
              "
            >
              {test?.total_questions ||
                0}
            </p>
          </div>

          {/* MARKS */}

          <div
            className={`
              rounded-xl
              border
              p-3

              ${statTheme}
            `}
          >
            <Trophy
              size={16}
              className={
                isPaid
                  ? "text-amber-600"
                  : "text-emerald-600"
              }
            />

            <p
              className="
                mt-2
                text-[10px]
                text-slate-400
              "
            >
              Marks
            </p>

            <p
              className="
                mt-0.5
                text-sm
                font-black
                text-slate-700
              "
            >
              {test?.total_mark ||
                0}
            </p>
          </div>
        </div>

        {/* =================================================
            ACTION
        ================================================= */}

        <div className="mt-auto pt-6">
          {isPaid ? (
            <button
              type="button"
              onClick={() =>
                setShowPremiumModal(
                  true
                )
              }
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-amber-300
                bg-amber-100
                px-5
                py-3.5
                text-sm
                font-bold
                text-amber-800
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-amber-200
                hover:shadow-md
              "
            >
              <LockKeyhole
                size={17}
              />

              Unlock Test
            </button>
          ) : (
            <Link
              href={examHref}
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-emerald-300
                bg-emerald-100
                px-5
                py-3.5
                text-sm
                font-bold
                text-emerald-800
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-emerald-200
                hover:shadow-md
              "
            >
              Start Exam

              <ArrowRight
                size={17}
              />
            </Link>
          )}
        </div>
      </article>

      {/* =================================================
          PREMIUM MODAL
      ================================================= */}

      {showPremiumModal ? (
        <PremiumModal
          onClose={() =>
            setShowPremiumModal(
              false
            )
          }
          redirectPath={
            examHref
          }
        />
      ) : null}
    </>
  );
}

/* =========================================================
   PREMIUM MODAL
========================================================= */

function PremiumModal({
  onClose,
  redirectPath,
}) {
  function handleLogin() {
    window.location.href =
      `/login?redirect=${encodeURIComponent(
        redirectPath
      )}`;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#020817]/65
        p-4
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-[26px]
          border
          border-amber-200
          bg-gradient-to-br
          from-amber-50
          via-[#fffaf0]
          to-white
          p-7
          shadow-2xl
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-amber-200
            bg-amber-100
            text-amber-700
          "
        >
          <Crown
            size={27}
          />
        </div>

        <h2
          className="
            mt-5
            text-2xl
            font-black
            text-[#071f55]
          "
        >
          Premium SCERT Test
        </h2>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-slate-500
          "
        >
          Login with us and
          purchase a plan to
          access this premium
          SCERT test.
        </p>

        <button
          type="button"
          onClick={
            handleLogin
          }
          className="
            mt-6
            w-full
            rounded-xl
            border
            border-amber-300
            bg-amber-500
            px-5
            py-3.5
            text-sm
            font-bold
            text-white
            transition-all
            hover:bg-amber-600
          "
        >
          Login & View Plans
        </button>

        <button
          type="button"
          onClick={onClose}
          className="
            mt-2
            w-full
            px-5
            py-3
            text-sm
            font-bold
            text-slate-500
            transition-colors
            hover:text-slate-700
          "
        >
          Cancel
        </button>
      </div>
    </div>
  );
}