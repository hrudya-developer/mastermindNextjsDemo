import Link from "next/link";
import Image from "next/image";
import { leftMenu } from "./data";

export default function LeftSidebar() {
  return (
    <aside
      className="
        relative
        hidden
        overflow-hidden
        
        bg-[#fbfbfb] shadow-sm

        lg:flex
        lg:min-h-[760px]
        lg:flex-col
        lg:px-3
        lg:py-5
      "
    >
      {/* subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-20
          h-48
          w-48
          rounded-full
          bg-[#00b5e8]/[0.07]
          blur-3xl
        "
      />

      {/* ================= LOGO ================= */}

      <div className="relative z-10 flex justify-center pb-6">
        <Image
          src="/assets/logo-256.png"
          alt="MasterMind"
          width={100}
          height={100}
          priority
          className="
            h-auto
            w-[82px]
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* small divider */}

      <div
        className="
          mx-auto
          mb-4
          h-[2px]
          w-8
          rounded-full
          bg-gradient-to-r
          from-[#00b5e8]
          via-[#017cc0]
          to-[#164fa5]
          opacity-50
        "
      />

      {/* ================= NAVIGATION ================= */}

      <nav className="relative z-10 flex flex-col items-center gap-2">
        {leftMenu.map((item, index) => {
          const isHome = index === 0;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="
                group
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-1.5
                rounded-2xl
                py-2
                transition-all
                duration-300
              "
            >
              {/* ICON */}

              <span
                className={`
                  relative
                  flex
                  shrink-0
                  items-center
                  justify-center
                  transition-all
                  duration-300

                  ${
                    isHome
                      ? `
                        h-[54px]
                        w-[54px]
                        rounded-[16px]

                        bg-[#164fa5]

                        text-[20px]
                        text-white

                        shadow-[0_10px_25px_rgba(22,79,165,0.25)]

                        group-hover:-translate-y-1
                        group-hover:shadow-[0_14px_30px_rgba(22,79,165,0.32)]
                      `
                      : `
                        h-[42px]
                        w-[42px]
                        rounded-xl

                        bg-[#00b5e8]/[0.07]

                        text-[18px]
                        text-[#164fa5]

                        group-hover:-translate-y-0.5
                        group-hover:bg-[#00b5e8]/[0.12]
                        group-hover:text-[#017cc0]
                      `
                  }
                `}
              >
                {item.icon}

                {/* tiny active accent */}

                {isHome && (
                  <span
                    className="
                      absolute
                      bottom-[5px]
                      h-[2px]
                      w-4
                      rounded-full
                      bg-[#00b5e8]
                    "
                  />
                )}
              </span>

              {/* HOME HAS NO TEXT */}

              {!isHome && (
                <span
                  className="
                    whitespace-nowrap
                    text-center
                    text-[11px]
                    font-medium
                    leading-tight
                    text-[#2c2b2b]/80

                    transition-colors
                    duration-300

                    group-hover:text-[#164fa5]
                  "
                >
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* ================= PROFILE ================= */}

      <div className="relative z-10 mt-auto pt-5">
        {/* divider */}

        <div
          className="
            mx-auto
            mb-5
            h-px
            w-[70%]
            bg-gradient-to-r
            from-transparent
            via-[#164fa5]/20
            to-transparent
          "
        />

        <div className="flex flex-col items-center text-center">
          {/* avatar */}

          <div
            className="
              relative
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-full

              bg-gradient-to-br
              from-[#00b5e8]/15
              via-[#017cc0]/10
              to-[#164fa5]/15

              ring-1
              ring-[#164fa5]/10

              transition-transform
              duration-300

              hover:scale-105
            "
          >
            <span className="text-[25px]">🎓</span>

            {/* online dot */}

            <span
              className="
                absolute
                bottom-0
                right-0

                h-3
                w-3

                rounded-full

                border-2
                border-white

                bg-[#00b5e8]
              "
            />
          </div>

          <strong
            className="
              mt-3
              text-[13px]
              font-semibold
              text-[#164fa5]
            "
          >
            Aspirant
          </strong>

          <span
            className="
              mt-0.5
              text-[10px]
              font-medium
              text-[#2c2b2b]/45
            "
          >
            Keep Going!
          </span>

          {/* brand accent */}

          <div
            className="
              mt-3
              h-[3px]
              w-8
              rounded-full
              bg-gradient-to-r
              from-[#00b5e8]
              via-[#017cc0]
              to-[#164fa5]
            "
          />
        </div>
      </div>
    </aside>
  );
}