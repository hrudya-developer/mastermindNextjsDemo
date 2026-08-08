export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        flex
        min-h-[520px]
        items-center

        px-6
        pb-16
        pt-10

        2xl:min-h-[550px]
        2xl:px-12
        2xl:pb-20
        2xl:pt-12
      "
    >
      <div
        className="
          w-full
          max-w-[470px]

          text-left

          2xl:max-w-[520px]
        "
      >
        {/* SMALL EYEBROW */}

        <div
          className="
            mb-4
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-[#164fa5]/10

            bg-white/70

            px-3.5
            py-2

            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]

            text-[#164fa5]

            shadow-[0_6px_18px_rgba(22,79,165,0.06)]

            backdrop-blur
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#00b5e8]
              shadow-[0_0_0_4px_rgba(0,181,232,0.10)]
            "
          />

          Kerala PSC Preparation
        </div>

        {/* HEADING */}

        <h1
          className="
            text-[clamp(2.65rem,3.6vw,3.55rem)]

            font-semibold

            leading-[0.98]

            tracking-[-0.055em]

            text-[#000]

            2xl:text-[clamp(3.3rem,3.6vw,4rem)]
          "
        >
          <span className="block">
            Your Dream.
          </span>

          <span className="mt-1 block">
            Our Guidance.
          </span>

          <span
            className="
              mt-1
              block

            bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]

              bg-clip-text

              pb-1

              text-transparent
            "
          >
            Your Success!
          </span>
        </h1>

        {/* ACCENT */}

        <div className="mt-6 flex items-center gap-2">
          <span
            className="
              h-[4px]
              w-12
              rounded-full

              bg-gradient-to-r
              from-[#164fa5]
              via-[#017cc0]
              to-[#00b5e8]
            "
          />

          <span className="h-[4px] w-2 rounded-full bg-[#00b5e8]/30" />
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            mt-6
            max-w-[440px]

            text-[14px]
            leading-7

            text-[#2c2b2b]/[98]

            2xl:text-[15px]
            2xl:leading-8
          "
        >
          Comprehensive preparation for Kerala PSC exams with expert
          guidance, quality content and proven strategies.
        </p>

        {/* ACTIONS */}

        <div
          className="
            mt-8

            grid
            w-full
            max-w-[455px]
            grid-cols-2

            gap-3

            2xl:gap-4
          "
        >
          {/* PRIMARY */}

          <a
            href="/register"
            className="
              group

              flex
              h-[56px]
              w-full
              items-center
              justify-center

              gap-3

              rounded-full

              bg-gradient-to-r
              from-[#164fa5]
              via-[#017cc0]
              to-[#164fa5]

              px-4

              text-[12px]
              font-semibold
              text-white

              shadow-[0_14px_30px_rgba(22,79,165,0.22)]

              transition-all
              duration-300

              hover:-translate-y-1

              hover:shadow-[0_18px_38px_rgba(22,79,165,0.32)]

              2xl:text-sm
            "
          >
            <span className="whitespace-nowrap">
              Start Learning
            </span>

            <span
              className="
                text-lg

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>

          {/* WATCH */}

          <a
            href="#intro"
            className="
              group

              flex
              h-[56px]
              w-full
              items-center
              justify-center

              gap-3

              rounded-full

              border
              border-[#164fa5]/12

              bg-white/95

              px-4

              text-[12px]
              font-semibold
              text-[#164fa5]

              shadow-[0_10px_25px_rgba(22,79,165,0.09)]

              backdrop-blur-md

              transition-all
              duration-300

              hover:-translate-y-1

              hover:border-[#00b5e8]/30
              hover:bg-white

              hover:shadow-[0_15px_32px_rgba(22,79,165,0.14)]

              2xl:text-sm
            "
          >
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-gradient-to-br
                from-[#164fa5]
                to-[#017cc0]

                pl-[2px]

                text-[10px]
                text-white

                shadow-[0_6px_15px_rgba(22,79,165,0.20)]

                transition-transform
                duration-300

                group-hover:scale-105
              "
            >
              ▶
            </span>

            <span className="whitespace-nowrap">
              Watch AI Videos
            </span>
          </a>
        </div>

        {/* MINI TRUST ROW */}

        <div
          className="
            mt-6

            flex
            items-center
            gap-3

            text-[11px]
            font-medium

            text-[#2c2b2b]/50
          "
        >
          <div className="flex items-center gap-1">
            <span className="text-[#00b5e8]">●</span>
            <span className="text-[#017cc0]">●</span>
            <span className="text-[#164fa5]">●</span>
          </div>

          Trusted by thousands of aspirants
        </div>
      </div>
    </div>
  );
}