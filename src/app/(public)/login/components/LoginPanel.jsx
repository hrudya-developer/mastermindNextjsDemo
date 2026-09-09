"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function LoginPanel() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="
        grid
        w-full
        min-h-0
        grid-cols-1
        gap-3

        lg:h-full
        lg:grid-rows-[minmax(0,1fr)_90px_90px]
      "
    >
      {/* =====================================================
          MAIN LOGIN CARD
      ====================================================== */}
      <div
        className="
          relative
          min-h-0
          overflow-hidden
          rounded-[26px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#164fa5]
          via-[#164fa5]
          to-[#0b216c]
          px-5
          py-6
          shadow-[0_24px_55px_rgba(11,33,108,0.22)]

          sm:px-7
          sm:py-7

          lg:h-full
          lg:px-7
          lg:py-6
        "
      >
        {/* =====================================================
            VERY SUBTLE GRID
        ====================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.055]
            [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        {/* =====================================================
            TOP RIGHT DOT PATTERN
        ====================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-5
            top-5
            z-[1]
            grid
            grid-cols-5
            gap-[9px]
            opacity-65
          "
        >
          {Array.from({ length: 20 }).map((_, index) => {
            const pinkDots = [4, 7, 13, 18];

            return (
              <span
                key={index}
                className={`
                  block
                  h-[5px]
                  w-[5px]
                  rounded-full
                  ${
                    pinkDots.includes(index)
                      ? "bg-[#df1768]"
                      : "bg-[#27c8f2]"
                  }
                `}
              />
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM LEFT DOT PATTERN
        ====================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-6
            left-5
            z-[1]
            grid
            grid-cols-5
            gap-[8px]
            opacity-20
          "
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <span
              key={index}
              className="
                block
                h-[4px]
                w-[4px]
                rounded-full
                bg-[#72ddff]
              "
            />
          ))}
        </div>

        {/* =====================================================
            CYAN AMBIENT LIGHT
        ====================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-28
            -top-28
            h-72
            w-72
            rounded-full
            bg-[#00b5e8]/20
            blur-[90px]
          "
        />

        {/* DEEP BLUE LIGHT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-28
            -left-24
            h-64
            w-64
            rounded-full
            bg-[#07174f]/35
            blur-[85px]
          "
        />

        {/* VERY SUBTLE PINK LIGHT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-14
            right-0
            h-36
            w-36
            rounded-full
            bg-[#df1768]/8
            blur-[65px]
          "
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            min-h-0
            flex-col
          "
        >
          {/* BRAND BADGE */}
          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.07]
              py-1.5
              pl-1.5
              pr-3
              backdrop-blur-md
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#00b5e8]
                text-white
                shadow-[0_5px_14px_rgba(0,181,232,0.24)]
              "
            >
              <Sparkles size={12} />
            </span>

            <span
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-white/75
              "
            >
              Mastermind PSC
            </span>

            <span
              className="
                ml-0.5
                h-1.5
                w-1.5
                rounded-full
                bg-[#df1768]
              "
            />
          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}
          <div className="mt-6">
            <h1
              className="
                text-[28px]
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-white

                sm:text-[30px]
                xl:text-[32px]
              "
            >
              Welcome Back
              <span className="ml-2">👋</span>
            </h1>

            <p
              className="
                mt-3
                max-w-[360px]
                text-[12px]
                leading-[1.65]
                text-white/55

                sm:text-[13px]
              "
            >
              Login to your Mastermind PSC account and continue
              your learning journey.
            </p>
          </div>

          {/* =====================================================
              FORM
          ====================================================== */}
          <form className="mt-6 space-y-3">
            {/* EMAIL */}
            <div
              className="
                group
                flex
                items-center
                gap-3
                rounded-[14px]
                border
                border-white/10
                bg-white/[0.075]
                px-3
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                backdrop-blur-xl
                transition
                duration-300

                hover:border-white/15
                hover:bg-white/[0.095]

                focus-within:border-[#5bd9ff]/50
                focus-within:bg-white/[0.10]
                focus-within:ring-4
                focus-within:ring-[#00b5e8]/8
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
                  rounded-[10px]
                  bg-white/[0.08]
                  text-[#76ddff]
                  transition
                  duration-300

                  group-focus-within:bg-[#00b5e8]/15
                  group-focus-within:text-white
                "
              >
                <Mail size={16} />
              </span>

              <input
                type="text"
                placeholder="Email or Mobile Number"
                autoComplete="username"
                className="
                  min-h-[50px]
                  w-full
                  bg-transparent
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  placeholder:font-normal
                  placeholder:text-white/35
                "
              />
            </div>

            {/* PASSWORD */}
            <div
              className="
                group
                flex
                items-center
                gap-3
                rounded-[14px]
                border
                border-white/10
                bg-white/[0.075]
                px-3
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                backdrop-blur-xl
                transition
                duration-300

                hover:border-white/15
                hover:bg-white/[0.095]

                focus-within:border-[#5bd9ff]/50
                focus-within:bg-white/[0.10]
                focus-within:ring-4
                focus-within:ring-[#00b5e8]/8
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
                  rounded-[10px]
                  bg-white/[0.08]
                  text-[#76ddff]
                  transition
                  duration-300

                  group-focus-within:bg-[#00b5e8]/15
                  group-focus-within:text-white
                "
              >
                <LockKeyhole size={16} />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                className="
                  min-h-[50px]
                  w-full
                  bg-transparent
                  text-[13px]
                  font-medium
                  text-white
                  outline-none
                  placeholder:font-normal
                  placeholder:text-white/35
                "
              />

              <button
                type="button"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                onClick={() =>
                  setShowPassword((current) => !current)
                }
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  text-white/40
                  transition
                  duration-200

                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                {showPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>

            {/* OPTIONS */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
                py-0.5
                text-[11px]

                sm:text-xs
              "
            >
              <label
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-white/55
                "
              >
                <input
                  type="checkbox"
                  className="
                    h-3.5
                    w-3.5
                    cursor-pointer
                    accent-[#00b5e8]
                  "
                />

                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="
                  font-bold
                  text-[#76ddff]
                  transition
                  hover:text-white
                "
              >
                Forgot Password?
              </Link>
            </div>

            {/* =================================================
                LOGIN BUTTON
            ================================================== */}
            <button
              type="submit"
              className="
                group
                relative
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[14px]
                bg-gradient-to-r
                from-[#017cc0]
                via-[#00a1db]
                to-[#00b5e8]
                px-4
                text-[13px]
                font-black
                text-white
                shadow-[0_12px_26px_rgba(0,181,232,0.20)]
                transition
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_16px_32px_rgba(0,181,232,0.27)]
              "
            >
              <span>Login</span>

              <span
                className="
                  absolute
                  right-3
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition
                  duration-300

                  group-hover:translate-x-0.5
                "
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </form>

          {/* =====================================================
              SIGNUP
          ====================================================== */}
          <div
            className="
              mt-5
              border-t
              border-white/[0.08]
              pt-4
            "
          >
            <p
              className="
                text-center
                text-[11px]
                text-white/45

                sm:text-xs
              "
            >
              New to Mastermind PSC?{" "}

              <Link
                href="/register"
                className="
                  font-extrabold
                  text-[#ff6da5]
                  transition
                  hover:text-[#ff9bc0]
                "
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* SECURITY FOOTER */}
          <div
            className="
              mt-auto
              hidden
              items-center
              justify-center
              gap-1.5
              pt-4
              text-[9px]
              text-white/25

              lg:flex
            "
          >
            <ShieldCheck
              size={11}
              className="text-[#64d9ff]/60"
            />

            <span>
              Secure access to your learning account
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SUPPORT CARDS

          mobile = vertical
          sm/tablet = side by side
          desktop = vertical
      ====================================================== */}
      <div
        className="
          grid
          grid-cols-1
          gap-3

          sm:grid-cols-2

          lg:contents
        "
      >
        {/* =================================================
            SECURE LOGIN
        ================================================== */}
        <article
          className="
            group
            relative
            flex
            min-h-[86px]
            items-center
            overflow-hidden
            rounded-[19px]
            border
            border-[#017cc0]/10
            bg-[#eef9ff]
            px-4
            shadow-[0_8px_22px_rgba(11,33,108,0.055)]
            transition
            duration-300

            hover:-translate-y-0.5
            hover:shadow-[0_12px_26px_rgba(11,33,108,0.08)]

            sm:min-h-[92px]

            lg:h-full
            lg:min-h-0
          "
        >
          {/* SOFT DECORATION */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-8
              -top-10
              h-24
              w-24
              rounded-full
              bg-[#00b5e8]/10
              blur-2xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              w-full
              items-center
              gap-3
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
                rounded-[13px]
                bg-[#017cc0]
                text-white
                shadow-[0_7px_18px_rgba(1,124,192,0.18)]
              "
            >
              <ShieldCheck size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <h2
                className="
                  text-[12px]
                  font-black
                  text-[#0b216c]

                  sm:text-[13px]
                "
              >
                Secure Login
              </h2>

              <p
                className="
                  mt-1
                  text-[9px]
                  leading-[1.45]
                  text-slate-500

                  sm:text-[10px]
                "
              >
                Your account and personal data are protected.
              </p>
            </div>

            <span
              className="
                hidden
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#00b5e8]
                shadow-[0_0_0_5px_rgba(0,181,232,0.09)]

                xl:block
              "
            />
          </div>
        </article>

        {/* =================================================
            TRUSTED PLATFORM
        ================================================== */}
        <article
          className="
            group
            relative
            flex
            min-h-[86px]
            items-center
            overflow-hidden
            rounded-[19px]
            border
            border-[#df1768]/10
            bg-[#fff2f7]
            px-4
            shadow-[0_8px_22px_rgba(11,33,108,0.055)]
            transition
            duration-300

            hover:-translate-y-0.5
            hover:shadow-[0_12px_26px_rgba(11,33,108,0.08)]

            sm:min-h-[92px]

            lg:h-full
            lg:min-h-0
          "
        >
          {/* SOFT PINK DECORATION */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-10
              -right-8
              h-24
              w-24
              rounded-full
              bg-[#df1768]/8
              blur-2xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              w-full
              items-center
              gap-3
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
                rounded-[13px]
                bg-[#df1768]
                text-white
                shadow-[0_7px_18px_rgba(223,23,104,0.16)]
              "
            >
              <Users size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <h2
                className="
                  text-[12px]
                  font-black
                  text-[#0b216c]

                  sm:text-[13px]
                "
              >
                Trusted Platform
              </h2>

              <p
                className="
                  mt-1
                  text-[9px]
                  leading-[1.45]
                  text-slate-500

                  sm:text-[10px]
                "
              >
                Built for Kerala PSC, SSC and RRB aspirants.
              </p>
            </div>

            <span
              className="
                hidden
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#df1768]
                shadow-[0_0_0_5px_rgba(223,23,104,0.07)]

                xl:block
              "
            />
          </div>
        </article>
      </div>
    </section>
  );
}