import {
    BadgeCheck,
    BookOpenCheck,
    Video,
    FileQuestion,
    RefreshCw,
    ClipboardCheck,
    CheckCircle2,
  } from "lucide-react";
  
  const FEATURE_ICONS = [
    BookOpenCheck,
    Video,
    FileQuestion,
    RefreshCw,
    ClipboardCheck,
  ];
  
  export default function PackageIncludesSection({
    contains = [],
  }) {
    if (!contains.length) {
      return null;
    }
  
    return (
      <section
        className="
          mt-8
          rounded-[26px]
          border
          border-[#dfe9f4]
          bg-white
          p-6
          shadow-[0_12px_35px_rgba(15,58,110,0.05)]
          sm:p-8
        "
      >
        {/* Heading */}
  
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
              bg-[#eef6ff]
            "
          >
            <BadgeCheck
              className="
                h-6
                w-6
                text-[#164fa5]
              "
            />
          </div>
  
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.13em]
                text-[#6f86a7]
              "
            >
              Package Benefits
            </p>
  
            <h2
              className="
                mt-1
                text-2xl
                font-black
                tracking-[-0.03em]
                text-[#0b216c]
              "
            >
              What This Package Includes
            </h2>
          </div>
        </div>
  
        {/* Features */}
  
        <div
          className="
            mt-7
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {contains.map(
            (feature, index) => {
              const FeatureIcon =
                FEATURE_ICONS[
                  index %
                    FEATURE_ICONS.length
                ] ||
                CheckCircle2;
  
              return (
                <article
                key={`${feature.text}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#dfe9f4]
                  bg-gradient-to-br
                  from-white
                  via-[#fbfdff]
                  to-[#f3f8ff]
                  p-5
                  shadow-[0_10px_30px_rgba(15,58,110,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-[#bfd7ee]
                  hover:shadow-[0_20px_45px_rgba(15,58,110,0.12)]
                "
              >
                {/* top accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[3px]
                    bg-gradient-to-r
                    from-[#164fa5]
                    via-[#00b5e8]
                    to-[#f13873]
                  "
                />
              
                {/* decorative glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-[#164fa5]/[0.06]
                    blur-[45px]
                    transition-all
                    duration-300
                    group-hover:bg-[#f13873]/[0.08]
                  "
                />
              
                {/* subtle pattern */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-5
                    h-16
                    w-16
                    opacity-[0.05]
                    [background-image:radial-gradient(#164fa5_1.5px,transparent_1.5px)]
                    [background-size:10px_10px]
                  "
                />
              
                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-[16px]
                      border
                      border-[#dbe8f5]
                      bg-gradient-to-br
                      from-[#eef6ff]
                      to-white
                      text-[#164fa5]
                      shadow-[0_6px_18px_rgba(22,79,165,0.10)]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-[#164fa5]
                      group-hover:bg-[#164fa5]
                      group-hover:text-violetBlue
                    "
                  >
                    <FeatureIcon
                      className="
                        h-5
                        w-5
                      "
                    />
                  </div>
              
                  {/* text */}
                  <p
                    className="
                      mt-5
                      text-[15px]
                      font-extrabold
                      leading-6
                      tracking-[-0.015em]
                      text-[#1d2f4f]
                    "
                  >
                    {feature.text}
                  </p>
              
                  {feature.textMalayalam &&
                    feature.textMalayalam !==
                      feature.text && (
                      <p
                        className="
                          mt-2
                          text-xs
                          leading-5
                          text-[#7a879c]
                        "
                      >
                        {feature.textMalayalam}
                      </p>
                    )}
              
                  {/* bottom detail */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#f13873]
                      "
                    />
              
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#8090a8]
                      "
                    >
                      Included Feature
                    </span>
                  </div>
                </div>
              </article>
              );
            }
          )}
        </div>
      </section>
    );
  }