"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  CalendarDays,
  ChevronRight,
  LoaderCircle,
} from "lucide-react";

export default function CurrentAffairsQuizMonths({
  cid = 1,
  uid = 21,
  onSelect,
}) {
  const [months, setMonths] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let active = true;

    async function loadMonths() {
      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            `/api/current-affairs-quiz/months?cid=${encodeURIComponent(
              cid
            )}&uid=${encodeURIComponent(
              uid
            )}&offset=0`,
            {
              cache: "no-store",
            }
          );

        const result =
          await response.json();

        console.log(
          "MONTH API RESULT:",
          result
        );

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Unable to load months."
          );
        }

        if (!active) return;

        let monthData = [];

        if (
          Array.isArray(result?.data)
        ) {
          monthData = result.data;
        } else if (
          Array.isArray(
            result?.months
          )
        ) {
          monthData =
            result.months;
        } else if (
          Array.isArray(
            result?.result
          )
        ) {
          monthData =
            result.result;
        } else if (
          Array.isArray(
            result?.data?.data
          )
        ) {
          monthData =
            result.data.data;
        }

        console.log(
          "NORMALIZED MONTH DATA:",
          monthData
        );

        setMonths(monthData);
      } catch (error) {
        console.error(
          "Month fetch error:",
          error
        );

        if (active) {
          setError(
            "Unable to load current affairs months."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadMonths();

    return () => {
      active = false;
    };
  }, [cid, uid]);

  if (loading) {
    return (
      <section
        className="
          mt-6
          rounded-[26px]
          border
          border-[#dce8f7]
          bg-white
          p-6
        "
      >
        <div
          className="
            flex
            min-h-[240px]
            items-center
            justify-center
          "
        >
          <LoaderCircle
            size={28}
            className="
              animate-spin
              text-[#164fa5]
            "
          />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="
          mt-6
          rounded-[26px]
          border
          border-red-100
          bg-white
          p-6
        "
      >
        <div
          className="
            rounded-[20px]
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
      </section>
    );
  }

  return (
    <section
      className="
        mt-6
        rounded-[26px]
        border
        border-[#dce8f7]
        bg-white
        p-5
        shadow-[0_12px_35px_rgba(11,33,108,0.05)]
        sm:p-6
      "
    >
      <div className="mb-6">
        <h2
          className="
            text-xl
            font-black
            text-[#102c5c]
          "
        >
          Choose Month
        </h2>

        <p
          className="
            mt-1
            text-xs
            text-slate-500
          "
        >
          Select a month and year to
          view available Current Affairs
          quizzes.
        </p>
      </div>

      {months.length > 0 ? (
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {months.map(
            (item, index) => {
              const month =
                item?.month ||
                item?.month_name ||
                item?.name ||
                "";

              const year =
                item?.year ||
                item?.year_name ||
                "";

              return (
                <button
                  type="button"
                  key={
                    item?.id ||
                    `${month}-${year}-${index}`
                  }
                  onClick={() =>
                    onSelect?.({
                      ...item,
                      month,
                      year,
                    })
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#dce8f7]
                    bg-gradient-to-br
                    from-white
                    to-[#f3f8ff]
                    p-5
                    text-left
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#087bea]/30
                    hover:shadow-[0_16px_38px_rgba(22,79,165,0.10)]
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-8
                      -top-8
                      h-24
                      w-24
                      rounded-full
                      bg-[#087bea]/5
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[15px]
                          bg-[#e7f2ff]
                          text-[#087bea]
                        "
                      >
                        <CalendarDays
                          size={20}
                        />
                      </div>

                      <div>
                        <h3
                          className="
                            text-base
                            font-black
                            text-[#102c5c]
                          "
                        >
                          {month ||
                            "Month"}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-semibold
                            text-slate-500
                          "
                        >
                          {year ||
                            "Current Affairs"}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={18}
                      className="
                        shrink-0
                        text-[#164fa5]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </button>
              );
            }
          )}
        </div>
      ) : (
        <div
          className="
            rounded-[20px]
            border
            border-dashed
            border-[#cadbef]
            bg-[#f7fbff]
            px-5
            py-12
            text-center
          "
        >
          <CalendarDays
            size={28}
            className="
              mx-auto
              text-[#087bea]
            "
          />

          <h3
            className="
              mt-3
              font-black
              text-[#102c5c]
            "
          >
            No months found
          </h3>

          <p
            className="
              mt-1
              text-xs
              text-slate-500
            "
          >
            The Current Affairs months
            API returned no records.
          </p>
        </div>
      )}
    </section>
  );
}