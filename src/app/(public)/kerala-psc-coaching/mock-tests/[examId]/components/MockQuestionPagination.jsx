"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function MockQuestionPagination({
  currentPage,
  totalPages,
  onChange,
}) {
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  function handlePrevious() {
    if (currentPage <= 1) {
      return;
    }

    onChange(currentPage - 1);
  }

  function handleNext() {
    if (currentPage >= totalPages) {
      return;
    }

    onChange(currentPage + 1);
  }

  return (
    <div
      className="
        mt-8
        flex
        flex-col
        items-center
        justify-between
        gap-4
        rounded-[20px]
        border
        border-blue-100
        bg-gradient-to-r
        from-blue-50
        via-white
        to-indigo-50
        p-4
        sm:flex-row
      "
    >
      <button
        type="button"
        onClick={handlePrevious}
        disabled={currentPage <= 1}
        className="
          inline-flex
          cursor-pointer
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-blue-100
          bg-white
          px-5
          py-2.5
          text-[11px]
          font-bold
          text-[#164fa5]
          shadow-sm
          transition-all
          hover:border-[#164fa5]/30
          hover:bg-blue-50
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronLeft size={15} />

        Previous
      </button>

      <div className="flex items-center gap-2">
        {Array.from(
          {
            length: totalPages,
          },
          (_, index) =>
            index + 1
        ).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() =>
              onChange(page)
            }
            className={`
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              text-[11px]
              font-black
              transition-all

              ${
                currentPage === page
                  ? `
                      bg-gradient-to-br
                      from-[#164fa5]
                      to-[#017cc0]
                      text-white
                      shadow-[0_7px_18px_rgba(22,79,165,0.25)]
                    `
                  : `
                      border
                      border-blue-100
                      bg-white
                      text-slate-500
                      hover:border-[#164fa5]/30
                      hover:text-[#164fa5]
                    `
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={
          currentPage >= totalPages
        }
        className="
          inline-flex
          cursor-pointer
          items-center
          justify-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-[#164fa5]
          to-[#017cc0]
          px-5
          py-2.5
          text-[11px]
          font-bold
          text-white
          shadow-[0_8px_20px_rgba(22,79,165,0.20)]
          transition-all
          hover:-translate-y-0.5
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        Next

        <ChevronRight size={15} />
      </button>
    </div>
  );
}