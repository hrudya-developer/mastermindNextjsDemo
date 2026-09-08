"use client";

import {
  useRef,
} from "react";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import ShortVideoCard from "./ShortVideoCard";

import {
  aiShortVideos,
} from "./aiShortVideosData";

export default function AIShortVideos() {
  const scrollRef =
    useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) {
      return;
    }

    const amount =
      scrollRef.current.clientWidth *
      0.75;

    scrollRef.current.scrollBy({
      left:
        direction === "next"
          ? amount
          : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-[22px]
        border
        border-[#e2edf7]
        bg-gradient-to-br
        from-[#f4fbff]
        via-white
        to-[#edf7ff]
        px-3
        py-4
        shadow-[0_10px_28px_rgba(15,58,110,0.05)]

        sm:px-4
        lg:px-5
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[#00b5e8]/[0.06]
          blur-[80px]
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div>
            <h2
              className="
                text-xl
                font-black
                tracking-[-0.03em]
                text-[#0b216c]

                sm:text-2xl
              "
            >
              AI Short Videos
            </h2>

            <div
              className="
                mt-1.5
                h-[3px]
                w-9
                rounded-full
                bg-[#f13873]
              "
            />
          </div>

          <Link
            href="/ai-videos"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-bold
              text-[#075ee7]
            "
          >
            View All

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative mt-4">
          <button
            type="button"
            onClick={() =>
              scroll("prev")
            }
            aria-label="Previous videos"
            className="
              absolute
              -left-3
              top-1/2
              z-20
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#dce8f5]
              bg-white
              text-[#164fa5]
              shadow-[0_6px_18px_rgba(15,58,110,0.12)]

              sm:-left-4
            "
          >
            <ArrowLeft
              className="h-4 w-4"
            />
          </button>

          <div
            ref={scrollRef}
            className="
              flex
              gap-2.5
              overflow-x-auto
              scroll-smooth
              pb-1
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:grid
              sm:grid-cols-3
              sm:overflow-visible

              lg:grid-cols-6
            "
          >
            {aiShortVideos.map(
              (item) => (
                <ShortVideoCard
                  key={item.id}
                  item={item}
                />
              )
            )}
          </div>

          <button
            type="button"
            onClick={() =>
              scroll("next")
            }
            aria-label="Next videos"
            className="
              absolute
              -right-3
              top-1/2
              z-20
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#dce8f5]
              bg-white
              text-[#164fa5]
              shadow-[0_6px_18px_rgba(15,58,110,0.12)]

              sm:-right-4
            "
          >
            <ArrowRight
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
}