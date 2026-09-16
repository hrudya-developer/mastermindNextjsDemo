import {
    Brain,
    CheckCircle2,
    Clock3,
    Sparkles,
    Target,
    Trophy,
  } from "lucide-react";
  
  export default function MockTestHero() {
    return (
      <section
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-violetBlue
          px-6
          py-7
          text-white
          shadow-[0_22px_55px_rgba(91,33,109,0.22)]
          sm:px-8
          sm:py-8
          lg:px-10 mt-20
        "
      >
        {/* GRID */}
  
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.06]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />
  
        {/* GLOWS */}
  
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#ff9f43]/30
            blur-3xl
          "
        />
  
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-28
            left-[28%]
            h-72
            w-72
            rounded-full
            bg-[#ff4fa3]/25
            blur-3xl
          "
        />
  
        <div
          className="
            relative
            z-10
            grid
            gap-8
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-center
          "
        >
          {/* LEFT */}
  
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/10
                px-3.5
                py-2
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#ffe4f2]
                backdrop-blur-md
              "
            >
              <Sparkles size={13} />
  
              PSC Practice Zone
            </div>
  
            <h1
              className="
                mt-5
                max-w-[650px]
                text-3xl
                font-black
                leading-[1.12]
                sm:text-4xl
                lg:text-[43px]
              "
            >
              Practice Smarter With
              Kerala PSC{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#ffd166]
                  via-[#ffad66]
                  to-[#ff8fab]
                  bg-clip-text
                  text-transparent
                "
              >
                Mock Tests
              </span>
            </h1>
  
            <p
              className="
                mt-4
                max-w-xl
                text-[13px]
                leading-6
                text-[#eadcf0]
                sm:text-sm
              "
            >
              Practice exam-focused tests,
              measure your preparation and
              improve your speed, accuracy
              and confidence before the
              actual Kerala PSC exam.
            </p>
  
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2.5
              "
            >
              <Feature
                icon={Target}
                label="Exam Focused"
              />
  
              <Feature
                icon={Clock3}
                label="Timed Practice"
              />
  
              <Feature
                icon={CheckCircle2}
                label="Instant Results"
              />
            </div>
          </div>
  
          {/* RIGHT */}
  
          <div
            className="
              mx-auto
              w-full
              max-w-[420px]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/15
                bg-white/[0.09]
                p-5
                shadow-[0_20px_50px_rgba(20,5,35,0.25)]
                backdrop-blur-xl
              "
            >
              {/* CARD GLOW */}
  
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#ffb347]/20
                  blur-2xl
                "
              />
  
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-[#ffb8da]
                    "
                  >
                    Ready to Practice?
                  </p>
  
                  <h2
                    className="
                      mt-1
                      text-xl
                      font-black
                      text-white
                    "
                  >
                    Test Your Knowledge
                  </h2>
  
                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-[#dac7e4]
                    "
                  >
                    Choose your exam level
                    and start practicing.
                  </p>
                </div>
  
                <div
                  className="
                    flex
                    h-13
                    w-13
                    shrink-0
                    items-center
                    justify-center
                    rounded-[17px]
                    bg-gradient-to-br
                    from-[#ffd166]
                    to-[#ff7b72]
                    text-[#4a1942]
                    shadow-[0_10px_28px_rgba(255,123,114,0.30)]
                  "
                >
                  <Brain size={23} />
                </div>
              </div>
  
              {/* LEVELS */}
  
              <div
                className="
                  relative
                  mt-5
                  grid
                  grid-cols-3
                  gap-2.5
                "
              >
                <LevelCard
                  value="10th"
                  label="Level"
                />
  
                <LevelCard
                  value="12th"
                  label="Level"
                />
  
                <LevelCard
                  value="Degree"
                  label="Level"
                />
              </div>
  
              {/* BOTTOM */}
  
              <div
                className="
                  relative
                  mt-4
                  flex
                  items-center
                  gap-3
                  rounded-[16px]
                  border
                  border-white/10
                  bg-black/10
                  px-4
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#ffd166]/15
                    text-[#ffd166]
                  "
                >
                  <Trophy size={17} />
                </div>
  
                <p
                  className="
                    text-[10px]
                    font-medium
                    leading-5
                    text-[#eadcf0]
                  "
                >
                  Practice consistently and
                  track your performance
                  across mock exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Feature({
    icon: Icon,
    label,
  }) {
    return (
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/15
          bg-white/10
          px-3.5
          py-2
          text-[10px]
          font-bold
          text-white
          backdrop-blur-md
        "
      >
        <Icon
          size={13}
          className="text-[#ffd166]"
        />
  
        {label}
      </div>
    );
  }
  
  function LevelCard({
    value,
    label,
  }) {
    return (
      <div
        className="
          group
          rounded-[16px]
          border
          border-white/10
          bg-white/[0.08]
          px-3
          py-3.5
          text-center
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-white/[0.14]
        "
      >
        <p
          className="
            text-[15px]
            font-black
            text-[#ffd166]
          "
        >
          {value}
        </p>
  
        <p
          className="
            mt-1
            text-[8px]
            font-bold
            uppercase
            tracking-[0.1em]
            text-[#dac7e4]
          "
        >
          {label}
        </p>
      </div>
    );
  }