import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

export default function CompetitiveExamPackCard({
  item,
}) {
  return (
    <article
      data-aos="fade-up"
      className="
        group
        relative
        overflow-hidden
        rounded-[18px]
        border
        border-[#e4edf7]
        bg-white
        p-3
        shadow-[0_8px_24px_rgba(15,58,110,0.05)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#cfe1f3]
        hover:shadow-[0_16px_34px_rgba(15,58,110,0.10)]

        sm:p-4
      "
    >
      <div
        className="
          grid
          gap-4

          sm:grid-cols-[190px_minmax(0,1fr)]
          sm:items-center
        "
      >
        {/* Image */}
        <div
          className="
            relative
            min-h-[170px]
            overflow-hidden
            rounded-[14px]
            bg-slate-100

            sm:min-h-[150px]
          "
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              200px
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            flex
            min-w-0
            flex-col
            justify-center
          "
        >
          <h3
            className="
              text-[17px]
              font-black
              leading-[1.2]
              tracking-[-0.025em]
              text-[#164fa5]

              sm:text-[18px]
              lg:text-[19px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2
              text-[12px]
              text-[#53617e]
            "
          >
            Starting from{" "}
            <span
              className="
                font-bold
                text-[#0b216c]
              "
            >
              {item.price}
            </span>
          </p>

          <Link
            href={item.href}
            className="
              group/link
              mt-5
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-[#f13873]
              bg-white
              px-5
              py-2.5
              text-[11px]
              font-bold
              text-[#f13873]
              transition-all
              duration-300

              hover:bg-[#f13873]
              hover:text-white
            "
          >
            View Details

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover/link:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}