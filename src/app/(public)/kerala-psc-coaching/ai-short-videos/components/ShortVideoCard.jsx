"use client";

import Image from "next/image";

import {
  Play,
  Sparkles,
} from "lucide-react";

export default function ShortVideoCard({
  video,
}) {
  const handlePlay = () => {
    if (!video?.videoUrl) {
      return;
    }

    window.open(
      video.videoUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-[#164fa5]/10
        bg-white
        shadow-[0_10px_28px_rgba(11,33,108,0.07)]
        transition
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(11,33,108,0.12)]
      "
    >
      <button
        type="button"
        onClick={handlePlay}
        className="
          relative
          block
          aspect-[9/16]
          w-full
          overflow-hidden
          bg-[#0b216c]
          text-left text-lighBlue
        "
      >
        {video?.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt={
              video?.title ||
              "Mastermind AI short video"
            }
            fill
            sizes="
              (max-width: 640px) 50vw,
              (max-width: 1024px) 33vw,
              (max-width: 1280px) 25vw,
              20vw
            "
            className="
              object-cover
              transition
              duration-500

              group-hover:scale-[1.04]
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#164fa5]
              via-[#017cc0]
              to-[#00b5e8]
            "
          />
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#07174f]/95
            via-[#07174f]/20
            to-transparent
          "
        />

        {/* TOP BADGE */}
        <div
          className="
            absolute
            left-3
            top-3
            z-10
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-white/15
            bg-black/20
            px-2.5
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
            backdrop-blur-md
          "
        >
          <Sparkles
            size={11}
            className="text-[#00b5e8]"
          />

          AI Short
        </div>

        {/* PLAY */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-black/40
            text-white
            shadow-[0_10px_30px_rgba(0,0,0,0.18)]
            backdrop-blur-md
            transition
            duration-300

            group-hover:scale-110
            group-hover:bg-white/30
          "
        >
          <Play
            size={28}
            fill="white" stroke="0"
            className="ml-0.5"
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-3.5
          "
        >
          <h3
            className="
              line-clamp-2
              text-[13px]
              font-black
              leading-[1.35]
              text-white

              sm:text-[14px]
            "
          >
            {video?.title ||
              "AI Learning Video"}
          </h3>

          {video?.description && (
            <p
              className="
                mt-1
                line-clamp-2
                text-[10px]
                leading-4
                text-white/65
              "
            >
              {video.description}
            </p>
          )}
        </div>
      </button>
    </article>
  );
}