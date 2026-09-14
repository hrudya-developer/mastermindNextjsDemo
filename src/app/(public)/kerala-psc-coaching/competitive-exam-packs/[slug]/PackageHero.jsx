import Image from "next/image";

import {
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function PackageHero({
  packageData,
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#dce7f3]
        bg-white
        shadow-[0_20px_60px_rgba(15,58,110,0.09)]
      "
    >
      {/* =====================================
          GLOBAL BACKGROUND DECORATIONS
      ====================================== */}

      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-24
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#168cc8]/10
          blur-[100px]
        "
      />

      {/* Pink glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-[35%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#f13873]/10
          blur-[100px]
        "
      />

      {/* Right grid pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          w-[65%]
          opacity-[0.035]
          [background-image:linear-gradient(#164fa5_1px,transparent_1px),linear-gradient(90deg,#164fa5_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-14
          top-12
          h-40
          w-40
          rounded-full
          border
          border-[#f13873]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-6
          top-20
          h-24
          w-24
          rounded-full
          border
          border-[#164fa5]/10
        "
      />

      {/* =====================================
          MAIN GRID
      ====================================== */}

      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-[340px_minmax(0,1fr)]
        "
      >
        {/* =====================================
            LEFT IMAGE PANEL
        ====================================== */}

        <div
          className="
            relative
            min-h-[320px]
            overflow-hidden
            bg-gradient-to-br
            from-[#071b54]
            via-[#164fa5]
            to-[#087fbe]
            sm:min-h-[360px]
          "
        >
          {/* Grid */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.10]
              [background-image:linear-gradient(rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.20)_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          {/* Pink glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-[#f13873]/30
              blur-[90px]
            "
          />

          {/* Cyan glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-16
              h-64
              w-64
              rounded-full
              bg-[#00c8ff]/25
              blur-[90px]
            "
          />

          {/* Pink diagonal accent */}
          <div
            aria-hidden="true"
            className="
              absolute
              -left-20
              bottom-12
              h-[3px]
              w-64
              rotate-[-35deg]
              bg-gradient-to-r
              from-transparent
              via-[#f13873]/70
              to-transparent
            "
          />

          {/* Rings */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-16
              -top-16
              h-52
              w-52
              rounded-full
              border
              border-white/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-6
              -top-6
              h-32
              w-32
              rounded-full
              border
              border-[#f13873]/30
            "
          />

          {/* Image container */}
          <div
            className="
              absolute
              inset-5
              flex
              items-center
              justify-center
              overflow-hidden
              rounded-[22px]
              border
              border-white/20
              bg-white/[0.07]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
              backdrop-blur-[2px]
            "
          >
            {packageData.imageUrl ? (
              <Image
                src={packageData.imageUrl}
                alt={packageData.package}
                fill
                priority
                sizes="
                  (max-width: 1024px) 100vw,
                  340px
                "
                className="
                  object-contain
                  p-5
                "
              />
            ) : (
              <span
                className="
                  text-sm
                  font-semibold
                  text-white/70
                "
              >
                Package Image
              </span>
            )}
          </div>

          {/* Bottom badge */}
          <div
            className="
              absolute
              bottom-7
              left-7
              z-20
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-[#071b54]/70
              px-3
              py-2
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.12em]
              text-white
              backdrop-blur-md
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#f13873]
              "
            />

            Exam Preparation
          </div>
        </div>

        {/* =====================================
            RIGHT CONTENT
        ====================================== */}

        <div
          className="
            relative
            flex
            min-w-0
            flex-col
            justify-center
            overflow-hidden
            bg-gradient-to-br
            from-white
            via-[#fbfdff]
            to-[#f5f9ff]
            p-6
            sm:p-7
            lg:px-9
            lg:py-8
          "
        >
          {/* Dots pattern */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-8
              top-8
              h-24
              w-24
              opacity-[0.14]
              [background-image:radial-gradient(#164fa5_1.5px,transparent_1.5px)]
              [background-size:12px_12px]
            "
          />

          {/* Pink small glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              bottom-0
              h-48
              w-48
              rounded-full
              bg-[#f13873]/[0.07]
              blur-[70px]
            "
          />

          <div className="relative z-10">
            {/* Badges */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#cfe3f7]
                  bg-[#eef6ff]
                  px-3
                  py-1.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.09em]
                  text-[#164fa5]
                "
              >
                <GraduationCap
                  className="h-3.5 w-3.5"
                />

                Competitive Exam Pack
              </span>

              {packageData.premium && (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[#f13873]/15
                    bg-[#fff0f5]
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#d82c65]
                  "
                >
                  <Sparkles
                    className="h-3.5 w-3.5"
                  />

                  Premium
                </span>
              )}
            </div>

            {/* Title */}
            <h1
              className="
                mt-4
                max-w-4xl
                text-[30px]
                font-black
                leading-[1.08]
                tracking-[-0.04em]
                text-[#0b216c]
                sm:text-[34px]
                lg:text-[38px]
              "
            >
              {packageData.package}
            </h1>

            {/* Pink/Blue accent */}
            <div
              className="
                mt-4
                flex
                items-center
                gap-1.5
              "
            >
              <span
                className="
                  h-[3px]
                  w-9
                  rounded-full
                  bg-[#f13873]
                "
              />

              <span
                className="
                  h-[3px]
                  w-5
                  rounded-full
                  bg-[#164fa5]
                "
              />

              <span
                className="
                  h-[3px]
                  w-2
                  rounded-full
                  bg-[#00b5e8]
                "
              />
            </div>

            {/* Tag */}
            {packageData.tag && (
              <div
                className="
                  mt-4
                  w-fit
                  rounded-xl
                  border
                  border-[#dce8f4]
                  bg-white/90
                  px-3.5
                  py-2
                  shadow-[0_5px_18px_rgba(15,58,110,0.05)]
                "
              >
                <p
                  className="
                    text-[12px]
                    font-bold
                    text-[#164fa5]
                  "
                >
                  {packageData.tag}
                </p>
              </div>
            )}

            {/* Divider */}
            <div
              className="
                my-4
                h-px
                w-full
                bg-gradient-to-r
                from-[#f13873]/30
                via-[#164fa5]/15
                to-transparent
              "
            />

            {/* FULL API DESCRIPTION */}
            {packageData.description && (
              <p
                className="
                  max-w-4xl
                  text-[13px]
                  leading-[1.8]
                  text-[#5d6c86]
                  sm:text-[14px]
                "
              >
                {packageData.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}