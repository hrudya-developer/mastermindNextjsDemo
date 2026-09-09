import AppHeroCard from "./AppHeroCard";
import FeatureGrid from "./FeatureGrid";
import LoginPanel from "./LoginPanel";

export default function LoginLayout() {
  return (
    <main
      className="
        relative
        min-h-[100dvh]
        overflow-hidden

        bg-gradient-to-br
        from-[#0b216c]
        via-[#164fa5]
        to-[#017cc0]

        px-3
        pb-5
        pt-[86px]

        sm:px-5

        lg:h-[100dvh]
        lg:min-h-0
        lg:overflow-hidden
        lg:bg-none
        lg:bg-[#f8fbff]
        lg:px-5
        lg:pb-5

        xl:px-7 mt-3
      "
    >
      {/* =====================================================
          MOBILE / TABLET BACKGROUND PATTERNS
          Hidden on 1024px+
      ====================================================== */}

      {/* GRID */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]

          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:32px_32px]

          lg:hidden
        "
      />

      {/* CYAN GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-[8%]

          h-72
          w-72

          rounded-full
          bg-[#00b5e8]/25
          blur-[85px]

          lg:hidden
        "
      />

      {/* DARK BLUE GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-28
          bottom-[4%]

          h-80
          w-80

          rounded-full
          bg-[#0b216c]/50
          blur-[90px]

          lg:hidden
        "
      />

      {/* SECOND LIGHT BLUE GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          right-[18%]

          h-48
          w-48

          rounded-full
          bg-[#00b5e8]/12
          blur-[75px]

          lg:hidden
        "
      />

      {/* DOT PATTERN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-6
          top-[120px]

          grid
          grid-cols-5
          gap-3

          opacity-30

          lg:hidden
        "
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1
              rounded-full
              bg-white
            "
          />
        ))}
      </div>

      {/* BOTTOM ACCENT LINES */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-8
          left-1/2

          h-[120px]
          w-[80%]

          -translate-x-1/2

          opacity-25

          [background-image:linear-gradient(90deg,transparent,rgba(0,181,232,0.45),transparent)]
          [background-size:100%_1px]
          [background-repeat:no-repeat]

          lg:hidden
        "
      />

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          grid

          min-h-[calc(100dvh-106px)]
          w-full

          grid-cols-1
          items-center

          lg:h-full
          lg:min-h-0
          lg:max-w-[1540px]

          lg:grid-cols-[minmax(0,1.82fr)_minmax(360px,0.78fr)]
          lg:items-stretch
          lg:gap-4

          xl:grid-cols-[minmax(0,1.88fr)_minmax(390px,0.72fr)]
        "
      >
        {/* =================================================
            LEFT SIDE - 1024px+
        ================================================== */}
        <section
          className="
            hidden
            min-h-0
            gap-3

            lg:grid
            lg:grid-rows-[minmax(0,1fr)_175px]
          "
        >
          <AppHeroCard />
          <FeatureGrid />
        </section>

        {/* =================================================
            LOGIN AREA
        ================================================== */}
        <div
          className="
            mx-auto
            w-full
            max-w-[520px]
            min-h-0

            lg:h-full
            lg:max-w-none
          "
        >
          <LoginPanel />
        </div>
      </div>
    </main>
  );
}