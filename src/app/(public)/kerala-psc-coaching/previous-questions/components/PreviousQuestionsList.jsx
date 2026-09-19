"use client";

import {
  useState,
} from "react";

import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Loader2,
  School,
} from "lucide-react";

import PreviousQuestionCard from "./PreviousQuestionCard";

/*
 * These values are the backend's
 * filter contract:
 *
 * 1 = Degree
 * 2 = 12th
 * 3 = 10th
 */
const LEVELS = [
  {
    filter: 3,
    label: "10th Level",
    icon: School,
  },
  {
    filter: 2,
    label: "12th Level",
    icon: BookOpen,
  },
  {
    filter: 1,
    label: "Degree Level",
    icon: GraduationCap,
  },
];

export default function PreviousQuestionsList({
  initialExams = [],
  initialNextOffset = null,
  initialFilter,
  uid,
  cid,
  type,
}) {
  const [
    activeFilter,
    setActiveFilter,
  ] = useState(
    initialFilter
  );

  const [
    exams,
    setExams,
  ] = useState(
    Array.isArray(
      initialExams
    )
      ? initialExams
      : []
  );

  const [
    nextOffset,
    setNextOffset,
  ] = useState(
    initialNextOffset
  );

  const [
    currentOffset,
    setCurrentOffset,
  ] = useState(0);

  const [
    loading,
    setLoading,
  ] = useState(false);

  /* =========================================================
     BUILD REQUEST
  ========================================================= */

  function buildParams({
    filter,
    offset,
  }) {
    const params =
      new URLSearchParams();

    if (uid != null) {
      params.set(
        "uid",
        String(uid)
      );
    }

    if (cid != null) {
      params.set(
        "cid",
        String(cid)
      );
    }

    if (type != null) {
      params.set(
        "type",
        String(type)
      );
    }

    if (filter != null) {
      params.set(
        "filter",
        String(filter)
      );
    }

    if (offset != null) {
      params.set(
        "offset",
        String(offset)
      );
    }

    return params;
  }

  /* =========================================================
     FETCH ONE API PAGE
  ========================================================= */

  async function fetchExams({
    filter,
    offset,
  }) {
    try {
      setLoading(true);

      const params =
        buildParams({
          filter,
          offset,
        });

      const response =
        await fetch(
          `/api/previous-questions?${params.toString()}`
        );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch previous questions"
        );
      }

      const result =
        await response.json();

      setExams(
        Array.isArray(
          result?.data
        )
          ? result.data
          : []
      );

      setNextOffset(
        result?.nextOffset ??
          null
      );

      setCurrentOffset(
        offset
      );
    } catch (error) {
      console.error(
        "Previous questions:",
        error
      );

      setExams([]);
      setNextOffset(null);
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     CHANGE LEVEL
  ========================================================= */

  async function handleLevelChange(
    filter
  ) {
    if (
      filter ===
        activeFilter ||
      loading
    ) {
      return;
    }

    setActiveFilter(
      filter
    );

    await fetchExams({
      filter,
      offset: 0,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     NEXT 10
  ========================================================= */

  async function handleNext() {
    if (
      nextOffset == null ||
      loading
    ) {
      return;
    }

    await fetchExams({
      filter:
        activeFilter,

      offset:
        nextOffset,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     PREVIOUS 10
  ========================================================= */

  async function handlePrevious() {
    if (
      currentOffset <= 0 ||
      loading
    ) {
      return;
    }

    const previousOffset =
      Math.max(
        currentOffset - 10,
        0
      );

    await fetchExams({
      filter:
        activeFilter,

      offset:
        previousOffset,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const currentPage =
    Math.floor(
      currentOffset / 10
    ) + 1;

  return (
    <section>
      {/* =====================================================
          LEVEL FILTER
      ===================================================== */}

      <div
        className="
          relative
          mb-7
          overflow-hidden
          rounded-[24px]
          border
          border-blue-100
          bg-white
          p-4
          shadow-[0_14px_40px_rgba(15,23,42,0.05)]
          sm:p-5
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -right-14
            -top-14
            h-40
            w-40
            rounded-full
            bg-blue-100/70
            blur-3xl
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
              mb-5
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#017cc0]
                "
              >
                Previous Questions
              </p>

              <h2
                className="
                  mt-1
                  text-[18px]
                  font-extrabold
                  text-[#0b1f44]
                  sm:text-[21px]
                "
              >
                Choose Exam Level
              </h2>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-slate-500
                "
              >
                Select a level to
                load its active
                previous question
                exams.
              </p>
            </div>

            {loading && (
              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-blue-50
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  text-[#164fa5]
                "
              >
                <Loader2
                  size={13}
                  className="
                    animate-spin
                  "
                />

                Loading exams
              </div>
            )}
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
            {LEVELS.map(
              (level) => {
                const Icon =
                  level.icon;

                const active =
                  activeFilter ===
                  level.filter;

                return (
                  <button
                    key={
                      level.filter
                    }
                    type="button"
                    disabled={
                      loading
                    }
                    onClick={() =>
                      handleLevelChange(
                        level.filter
                      )
                    }
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-[12px]
                      border
                      px-4
                      py-2.5
                      text-[11px]
                      font-bold
                      transition-all
                      disabled:cursor-wait

                      ${
                        active
                          ? `
                              border-[#164fa5]
                              bg-gradient-to-r
                              from-[#0b216c]
                              to-[#164fa5]
                              text-white
                              shadow-[0_8px_20px_rgba(22,79,165,0.20)]
                            `
                          : `
                              border-slate-200
                              bg-white
                              text-slate-600
                              hover:border-blue-200
                              hover:bg-blue-50
                              hover:text-[#164fa5]
                            `
                      }
                    `}
                  >
                    <Icon
                      size={14}
                    />

                    {
                      level.label
                    }
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          CARDS
      ===================================================== */}

      {loading ? (
        <div
          className="
            flex
            min-h-[300px]
            items-center
            justify-center
            rounded-[22px]
            border
            border-slate-200
            bg-white
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-3
            "
          >
            <Loader2
              size={25}
              className="
                animate-spin
                text-[#164fa5]
              "
            />

            <p
              className="
                text-[12px]
                font-semibold
                text-slate-500
              "
            >
              Loading previous
              questions...
            </p>
          </div>
        </div>
      ) : exams.length > 0 ? (
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
          "
        >
          {exams.map(
            (exam) => (
              <PreviousQuestionCard
                key={
                  exam?.id
                }
                item={exam}
                uid={uid}
                cid={cid}
                type={type}
              />
            )
          )}
        </div>
      ) : (
        <div
          className="
            rounded-[22px]
            border
            border-dashed
            border-slate-300
            bg-white
            px-5
            py-14
            text-center
          "
        >
          <BookOpen
            size={24}
            className="
              mx-auto
              text-[#164fa5]
            "
          />

          <h3
            className="
              mt-3
              text-[15px]
              font-extrabold
              text-[#0b1f44]
            "
          >
            No previous
            questions available
          </h3>
        </div>
      )}

      {/* =====================================================
          API PAGINATION
      ===================================================== */}

      {!loading &&
        exams.length > 0 && (
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <button
              type="button"
              onClick={
                handlePrevious
              }
              disabled={
                currentOffset ===
                0
              }
              className="
                inline-flex
                h-10
                items-center
                gap-1.5
                rounded-[11px]
                border
                border-slate-200
                bg-white
                px-4
                text-[11px]
                font-bold
                text-slate-600
                transition
                hover:bg-blue-50
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <ChevronLeft
                size={14}
              />

              Previous
            </button>

            <span
              className="
                flex
                h-10
                min-w-10
                items-center
                justify-center
                rounded-[11px]
                bg-[#164fa5]
                px-4
                text-[11px]
                font-extrabold
                text-white
              "
            >
              Page{" "}
              {currentPage}
            </span>

            <button
              type="button"
              onClick={
                handleNext
              }
              disabled={
                nextOffset ==
                null
              }
              className="
                inline-flex
                h-10
                items-center
                gap-1.5
                rounded-[11px]
                bg-gradient-to-r
                from-[#0b216c]
                to-[#164fa5]
                px-4
                text-[11px]
                font-bold
                text-white
                transition
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              Next

              <ChevronRight
                size={14}
              />
            </button>
          </div>
        )}
    </section>
  );
}