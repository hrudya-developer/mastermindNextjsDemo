"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import MockTestCard from "./MockTestCard";

const PAGE_SIZE = 10;

export default function MockTestList({
  cid = 1,
  uid = 0,
  filter = 0,
}) {
  const [tests, setTests] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [
    currentOffset,
    setCurrentOffset,
  ] = useState(0);

  const [
    nextOffset,
    setNextOffset,
  ] = useState(null);

  const [
    highestPage,
    setHighestPage,
  ] = useState(1);

  /* =========================================================
     CURRENT PAGE
  ========================================================= */

  const currentPage =
    Math.floor(
      currentOffset /
        PAGE_SIZE
    ) + 1;

  /* =========================================================
     LOAD MOCK TESTS
  ========================================================= */

  async function loadTests(
    offset = 0
  ) {
    try {
      setLoading(true);
      setError("");

      const params =
        new URLSearchParams({
          cid: String(cid),
          uid: String(uid),
          offset:
            String(offset),
          filter:
            String(filter),
        });

      const response =
        await fetch(
          `/api/mock-tests/list?${params.toString()}`,
          {
            cache:
              "no-store",
          }
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Unable to load mock tests."
        );
      }

      const testData =
        Array.isArray(
          result?.data
        )
          ? result.data
          : [];

      const apiNextOffset =
        result?.nextoffset ??
        result?.nextOffset ??
        null;

      setTests(
        testData
      );

      setCurrentOffset(
        offset
      );

      setNextOffset(
        apiNextOffset
      );

      const loadedPage =
        Math.floor(
          offset /
            PAGE_SIZE
        ) + 1;

      /*
       * If API says another page
       * exists, expose that page
       * number too.
       */

      const discoveredPage =
        apiNextOffset != null
          ? loadedPage + 1
          : loadedPage;

      setHighestPage(
        (previous) =>
          Math.max(
            previous,
            discoveredPage
          )
      );
    } catch (error) {
      console.error(
        "Mock test list:",
        error
      );

      setTests([]);

      setNextOffset(
        null
      );

      setError(
        error?.message ||
          "Unable to load mock tests."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    setCurrentOffset(0);

    setNextOffset(null);

    setHighestPage(1);

    loadTests(0);
  }, [
    cid,
    uid,
    filter,
  ]);

  /* =========================================================
     PAGE CLICK
  ========================================================= */

  async function handlePageClick(
    page
  ) {
    if (
      loading ||
      page < 1 ||
      page === currentPage
    ) {
      return;
    }

    const offset =
      (page - 1) *
      PAGE_SIZE;

    await loadTests(
      offset
    );

    scrollToList();
  }

  /* =========================================================
     PREVIOUS
  ========================================================= */

  async function handlePrevious() {
    if (
      currentPage <= 1 ||
      loading
    ) {
      return;
    }

    await handlePageClick(
      currentPage - 1
    );
  }

  /* =========================================================
     NEXT
  ========================================================= */

  async function handleNext() {
    if (
      nextOffset == null ||
      loading
    ) {
      return;
    }

    await loadTests(
      Number(nextOffset)
    );

    scrollToList();
  }

  /* =========================================================
     SCROLL
  ========================================================= */

  function scrollToList() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     PAGE NUMBERS
  ========================================================= */

  const pageNumbers =
    Array.from(
      {
        length:
          highestPage,
      },
      (_, index) =>
        index + 1
    );

  /* =========================================================
     LOADING
  ========================================================= */

  if (
    loading &&
    tests.length === 0
  ) {
    return (
      <div
        className="
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {Array.from({
          length: 6,
        }).map(
          (_, index) => (
            <div
              key={
                index
              }
              className="
                h-[260px]
                animate-pulse
                rounded-[24px]
                border
                border-slate-200
                bg-white
              "
            />
          )
        )}
      </div>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {
    return (
      <div
        className="
          rounded-[20px]
          border
          border-rose-200
          bg-rose-50
          px-5
          py-8
          text-center
        "
      >
        <p
          className="
            text-[13px]
            font-bold
            text-rose-600
          "
        >
          {error}
        </p>
      </div>
    );
  }

  /* =========================================================
     EMPTY
  ========================================================= */

  if (
    tests.length === 0
  ) {
    return (
      <div
        className="
          rounded-[20px]
          border
          border-slate-200
          bg-white
          px-5
          py-12
          text-center
        "
      >
        <p
          className="
            text-[13px]
            font-bold
            text-slate-500
          "
        >
          No mock tests
          available.
        </p>
      </div>
    );
  }

  /* =========================================================
     UI
  ========================================================= */

  return (
    <section>
      {/* CARDS */}

      <div
        className={`
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3

          ${
            loading
              ? "pointer-events-none opacity-60"
              : ""
          }
        `}
      >
        {tests.map(
          (test) => (
            <MockTestCard
              key={
                test?.id
              }
              test={
                test
              }
              uid={
                uid
              }
              cid={
                cid
              }
            />
          )
        )}
      </div>

      {/* PAGINATION */}

      <div
        className="
          mt-9
          flex
          flex-wrap
          items-center
          justify-center
          gap-2
        "
      >
        {/* PREVIOUS */}

        <button
          type="button"
          onClick={
            handlePrevious
          }
          disabled={
            currentPage ===
              1 ||
            loading
          }
          className="
            inline-flex
            h-10
            items-center
            justify-center
            gap-1.5
            rounded-[11px]
            border
            border-slate-200
            bg-white
            px-4
            text-[11px]
            font-bold
            text-slate-600
            shadow-sm
            transition-all
            duration-200
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-[#164fa5]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft
            size={14}
          />

          Previous
        </button>

        {/* PAGE NUMBERS */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {pageNumbers.map(
            (page) => {
              const isActive =
                page ===
                currentPage;

              return (
                <button
                  key={
                    page
                  }
                  type="button"
                  onClick={() =>
                    handlePageClick(
                      page
                    )
                  }
                  disabled={
                    loading
                  }
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[11px]
                    border
                    text-[11px]
                    font-extrabold
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                            border-[#164fa5]
                            bg-[#164fa5]
                            text-white
                            shadow-[0_8px_20px_rgba(22,79,165,0.22)]
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
                  {page}
                </button>
              );
            }
          )}
        </div>

        {/* NEXT */}

        <button
          type="button"
          onClick={
            handleNext
          }
          disabled={
            nextOffset ==
              null ||
            loading
          }
          className="
            inline-flex
            h-10
            items-center
            justify-center
            gap-1.5
            rounded-[11px]
            border
            border-[#164fa5]
            bg-[#164fa5]
            px-4
            text-[11px]
            font-bold
            text-white
            shadow-[0_8px_20px_rgba(22,79,165,0.18)]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-[#0b216c]
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
    </section>
  );
}