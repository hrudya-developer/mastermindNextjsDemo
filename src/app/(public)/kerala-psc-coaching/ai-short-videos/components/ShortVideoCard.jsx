import Image from "next/image";
import Link from "next/link";

import {
  Play,
} from "lucide-react";

export default function ShortVideoCard({
  item,
}) {
  return (
    <Link
      href={item.href}
      data-aos="fade-up"
      className="
        group
        relative
        block
        aspect-[4/5]
        min-w-[150px]
        overflow-hidden
        rounded-[14px]
        border
        border-white/80
        bg-slate-200
        shadow-[0_8px_22px_rgba(15,58,110,0.08)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_16px_32px_rgba(15,58,110,0.14)]

        sm:min-w-0
      "
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="
          (max-width: 640px) 160px,
          (max-width: 1024px) 25vw,
          180px
        "
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#061a3a]/80
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute
          right-2
          top-1/2
          z-10
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          text-[#0b216c]
          shadow-[0_6px_16px_rgba(0,0,0,0.16)]
          transition-all
          duration-300

          group-hover:scale-110
        "
      >
        <Play
          className="ml-0.5 h-3.5 w-3.5"
          fill="currentColor"
        />
      </div>

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-3
        "
      >
        <h3
          className="
            line-clamp-2
            text-[12px]
            font-black
            leading-[1.2]
            text-white

            sm:text-[13px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            line-clamp-1
            text-[9px]
            text-white/70
          "
        >
          {item.subtitle}
        </p>
      </div>
    </Link>
  );
}