import LearningToolCard from "./LearningToolCard";
import {
  learningTools,
} from "./learningToolsData";

export default function LearningToolsGrid() {
  const firstRow =
    learningTools.slice(0, 5);

  const secondRow =
    learningTools.slice(5);

  return (
    <section
      className="
        relative
        w-full
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#dcebf7]
            bg-white
            p-3
            shadow-[0_14px_40px_rgba(15,58,110,0.07)]

            sm:p-4
            lg:p-5
          "
        >
          {/* Background */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-[#fbfdff]
              via-white
              to-[#f3f9ff]
            "
          />

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -top-24
              left-1/2
              h-[220px]
              w-[60%]
              -translate-x-1/2
              rounded-full
              bg-[#00b5e8]/[0.05]
              blur-[90px]
            "
          />

          {/* ==========================================
              MOBILE / TABLET
          =========================================== */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-2
              gap-3

              sm:grid-cols-3

              lg:hidden
            "
          >
            {learningTools.map((item) => (
              <LearningToolCard
                key={item.title}
                item={item}
              />
            ))}
          </div>

          {/* ==========================================
              DESKTOP
          =========================================== */}
          <div
            className="
              relative
              z-10
              hidden
              space-y-3
              lg:block
            "
          >
            {/* First row - 5 cards */}
            <div
              className="
                grid
                grid-cols-5
                gap-3
              "
            >
              {firstRow.map((item) => (
                <LearningToolCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>

            {/* Second row - 7 cards */}
            <div
              className="
                grid
                grid-cols-7
                gap-3
              "
            >
              {secondRow.map((item) => (
                <LearningToolCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}