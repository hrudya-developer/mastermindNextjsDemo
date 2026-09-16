"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
} from "lucide-react";

import MockTestCard from "./MockTestCard";
import MockTestEmpty from "./MockTestEmpty";

const PAGE_SIZE = 10;

export default function MockTestList({
  cid = 1,
  uid = 21,
  filter = 0,
}) {
  const [tests, setTests] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    currentOffset,
    setCurrentOffset,
  ] = useState(0);

  const [
    nextOffset,
    setNextOffset,
  ] = useState(null);

  const [
    pageOffsets,
    setPageOffsets,
  ] = useState([0]);

  useEffect(() => {
    /*
     * Reset pagination when
     * filter changes.
     */
    setCurrentPage(1);
    setCurrentOffset(0);
    setPageOffsets([0]);
    setNextOffset(null);
  }, [filter]);

  useEffect(() => {
    const controller =
      new AbortController();

    async function fetchMockTests() {
      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            `/api/mock-tests/list?cid=${encodeURIComponent(
              cid
            )}&uid=${encodeURIComponent(
              uid
            )}&offset=${encodeURIComponent(
              currentOffset
            )}&filter=${encodeURIComponent(
              filter
            )}`,
            {
              cache: "no-store",
              signal:
                controller.signal,
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Failed to load mock tests."
          );
        }

        const mockTests =
          Array.isArray(
            result?.data
          )
            ? result.data
            : [];

        setTests(
          mockTests
        );

        /*
         * API response example:
         *
         * nextoffset: 10
         */
        const apiNextOffset =
          result?.nextoffset;

        if (
          apiNextOffset ===
            null ||
          apiNextOffset ===
            undefined ||
          mockTests.length === 0
        ) {
          setNextOffset(null);
        } else {
          setNextOffset(
            Number(
              apiNextOffset
            )
          );
        }
      } catch (error) {
        if (
          error?.name ===
          "AbortError"
        ) {
          return;
        }

        console.error(
          "Mock tests error:",
          error
        );

        setError(
          error?.message ||
            "Unable to load mock tests."
        );
      } finally {
        if (
          !controller.signal
            .aborted
        ) {
          setLoading(false);
        }
      }
    }

    fetchMockTests();

    return () => {
      controller.abort();
    };
  }, [
    cid,
    uid,
    filter,
    currentOffset,
  ]);

  function handleNext() {
    if (
      nextOffset === null
    ) {
      return;
    }

    const nextPage =
      currentPage + 1;

    setPageOffsets(
      (previous) => {
        if (
          previous[
            nextPage - 1
          ] !== undefined
        ) {
          return previous;
        }

        return [
          ...previous,
          nextOffset,
        ];
      }
    );

    setCurrentPage(
      nextPage
    );

    setCurrentOffset(
      nextOffset
    );

    scrollToList();
  }

  function handlePrevious() {
    if (
      currentPage <= 1
    ) {
      return;
    }

    const previousPage =
      currentPage - 1;

    const previousOffset =
      pageOffsets[
        previousPage - 1
      ];

    setCurrentPage(
      previousPage
    );

    setCurrentOffset(
      previousOffset
    );

    scrollToList();
  }

  function scrollToList() {
    requestAnimationFrame(
      () => {
        document
          .getElementById(
            "mock-test-list"
          )
          ?.scrollIntoView({
            behavior:
              "smooth",
            block: "start",
          });
      }
    );
  }

  if (loading) {
    return (
      <div
        className="
          mt-6
          flex
          min-h-[260px]
          items-center
          justify-center
          rounded-[24px]
          border
          border-[#dce8f7]
          bg-gradient-to-br
          from-[#f7f4ff]
          via-white
          to-[#eef6ff]
        "
      >
        <LoaderCircle
          size={30}
          className="
            animate-spin
            text-[#3154ee]
          "
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
          mt-5
          rounded-[20px]
          border
          border-red-100
          bg-red-50
          px-5
          py-10
          text-center
          text-sm
          font-semibold
          text-red-500
        "
      >
        {error}
      </div>
    );
  }

  if (
    tests.length === 0 &&
    currentPage === 1
  ) {
    return (
      <MockTestEmpty />
    );
  }

  return (
    <section
      id="mock-test-list"
      className="
        mt-6
        scroll-mt-24
      "
    >
      {/* HEADER */}

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
              font-black
              uppercase
              tracking-[0.15em]
              text-[#3154ee]
            "
          >
            Practice Tests
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-black
              text-[#28153c]
              sm:text-2xl
            "
          >
            Available Mock Tests
          </h2>

          <p
            className="
              mt-1
              text-[11px]
              text-slate-500
            "
          >
            Page {currentPage}
          </p>
        </div>

        <div
          className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-[#dce8f7]
            bg-white
            px-4
            py-2
            text-[10px]
            font-black
            text-[#3154ee]
            shadow-sm
          "
        >
          {tests.length} tests
        </div>
      </div>

      {/* CARDS */}

      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {tests.map(
          (test) => (
            <MockTestCard
              key={test?.id}
              test={test}
            />
          )
        )}
      </div>

      {/* PAGINATION */}

      <div
        className="
          mt-8
          flex
          flex-col
          items-center
          justify-between
          gap-4
          rounded-[22px]
          border
          border-[#dce8f7]
          bg-gradient-to-r
          from-[#faf7ff]
          via-white
          to-[#eef6ff]
          p-4
          shadow-[0_10px_30px_rgba(49,84,238,0.06)]
          sm:flex-row
        "
      >
        <button
          type="button"
          onClick={
            handlePrevious
          }
          disabled={
            currentPage === 1
          }
          className="
            inline-flex
            min-h-[42px]
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-[#dce8f7]
            bg-white
            px-5
            py-2.5
            text-[10px]
            font-black
            text-[#3154ee]
            shadow-sm
            transition-all
            hover:border-[#3154ee]/30
            hover:bg-[#f5f7ff]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft
            size={15}
          />

          Previous
        </button>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {pageOffsets.map(
            (
              offset,
              index
            ) => {
              const page =
                index + 1;

              const active =
                page ===
                currentPage;

              return (
                <button
                  key={
                    `${page}-${offset}`
                  }
                  type="button"
                  onClick={() => {
                    setCurrentPage(
                      page
                    );

                    setCurrentOffset(
                      offset
                    );

                    scrollToList();
                  }}
                  className={`
                    flex
                    h-10
                    min-w-10
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    px-3
                    text-[10px]
                    font-black
                    transition-all

                    ${
                      active
                        ? `
                            bg-violetBlue text-white
                            shadow-[0_8px_22px_rgba(49,84,238,0.24)]
                          `
                        : `
                            border
                            border-[#dce8f7]
                            bg-white
                            text-[#3154ee]
                            hover:border-[#3154ee]/30
                            hover:bg-[#f5f7ff]
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

        <button
          type="button"
          onClick={
            handleNext
          }
          disabled={
            nextOffset === null
          }
          className="
            inline-flex
            min-h-[42px]
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-full
            bg-black
            px-5
            py-2.5
            text-[10px]
            font-black
            text-white
            shadow-[0_10px_24px_rgba(49,84,238,0.20)]
            transition-all
            hover:-translate-y-0.5
            hover:shadow-[0_14px_30px_rgba(49,84,238,0.26)]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Next

          <ChevronRight
            size={15}
          />
        </button>
      </div>
    </section>
  );
}