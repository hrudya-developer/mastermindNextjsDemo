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
  const [
    months,
    setMonths,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    let active = true;

    async function loadMonths() {
      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            `/api/current-affairs-quiz/months?cid=${cid}&uid=${uid}&offset=0`,
            {
              cache: "no-store",
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result?.message ||
              "Unable to load months."
          );
        }

        if (!active) return;

        setMonths(
          Array.isArray(result?.data)
            ? result.data
            : []
        );
      } catch (error) {
        console.error(error);

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
      <div
        className="
          flex
          min-h-[250px]
          items-center
          justify-center
        "
      >
        <LoaderCircle
          className="
            animate-spin
            text-[#164fa5]
          "
          size={28}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
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

  return (
    <section
      className="
        mt-6
        rounded-[26px]
        border
        border-[#dce8f7]
        bg-white
        p-5
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
          Select a month to view
          available current affairs
          quizzes.
        </p>
      </div>

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
        {months.map((item, index) => {
          const month =
            item?.month || "";

          const year =
            item?.year || "";

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
                flex
                items-center
                justify-between
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
                hover:shadow-[0_15px_35px_rgba(22,79,165,0.10)]
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
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#e8f3ff]
                    text-[#087bea]
                  "
                >
                  <CalendarDays
                    size={19}
                  />
                </div>

                <div>
                  <h3
                    className="
                      font-black
                      text-[#102c5c]
                    "
                  >
                    {month}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      text-slate-500
                    "
                  >
                    {year}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={18}
                className="
                  text-[#164fa5]
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}