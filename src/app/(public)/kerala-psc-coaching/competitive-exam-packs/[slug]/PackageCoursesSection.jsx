import {
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export default function PackageCoursesSection({
  courses = [],
}) {
  if (!courses.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        mt-8
        overflow-hidden
        rounded-[28px]
        border
        border-[#dfe9f4]
        bg-gradient-to-br
        from-white
        via-[#f8fbff]
        to-[#eef6ff]
        p-6
        shadow-[0_18px_45px_rgba(15,58,110,0.08)]
        sm:p-8
      "
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(#164fa5_1px,transparent_1px),linear-gradient(90deg,#164fa5_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-[#00b5e8]/15
          blur-[90px]
        "
      />

      {/* Pink glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-[20%]
          h-64
          w-64
          rounded-full
          bg-[#f13873]/10
          blur-[100px]
        "
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-12
          top-10
          h-32
          w-32
          rounded-full
          border
          border-[#164fa5]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-2
          top-20
          h-20
          w-20
          rounded-full
          border
          border-[#f13873]/10
        "
      />

      <div className="relative z-10">
        {/* Header */}
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
              items-center
              justify-center
              rounded-[16px]
              border
              border-[#d9e8f7]
              bg-white
              text-[#164fa5]
              shadow-[0_8px_20px_rgba(22,79,165,0.10)]
            "
          >
            <BookOpen
              className="
                h-6
                w-6
              "
            />
          </div>

          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#f13873]
              "
            >
              Course Access
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
              Included Courses
            </h2>
          </div>
        </div>

        {/* Courses */}
        <div
          className="
            mt-7
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {courses.map(
            (
              course,
              index
            ) => (
              <article
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#dfe9f4]
                  bg-white/90
                  p-5
                  shadow-[0_10px_25px_rgba(15,58,110,0.05)]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c5daf0]
                  hover:shadow-[0_16px_35px_rgba(15,58,110,0.10)]
                "
              >
                {/* Top accent */}
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

                {/* Small glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-[#00b5e8]/10
                    blur-[35px]
                  "
                />

                {/* Dot pattern */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-4
                    h-14
                    w-14
                    opacity-[0.05]
                    [background-image:radial-gradient(#164fa5_1.4px,transparent_1.4px)]
                    [background-size:9px_9px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-[#dbe8f5]
                      bg-[#eef6ff]
                      text-[#164fa5]
                      transition-all
                      duration-300
                      group-hover:bg-[#164fa5]
                      group-hover:text-white
                    "
                  >
                    <CheckCircle2
                      className="
                        h-5
                        w-5
                      "
                    />
                  </div>

                  <span
                    className="
                      text-sm
                      font-bold
                      leading-6
                      text-[#263653]
                    "
                  >
                    {course.exam}
                  </span>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}