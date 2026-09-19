const filters = [
    {
      id: 0,
      label: "All Exams",
    },
    {
      id: 1,
      label: "Degree Level",
    },
    {
      id: 2,
      label: "12th Level",
    },
    {
      id: 3,
      label: "10th Level",
    },
  ];
  
  export default function MockTestFilters({
    selectedFilter,
    onChange,
  }) {
    return (
      <div
        className="
          flex
          flex-wrap
          gap-2
          rounded-[20px]
          border
          border-[#eadff0]
          bg-white
          p-3 mb-3
        "
      >
        {filters.map(
          (item) => {
            const active =
              selectedFilter ===
              item.id;
  
            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  onChange(
                    item.id
                  )
                }
                className={`
                  cursor-pointer
                  rounded-full
                  px-5
                  py-2.5
                  text-[11px]
                  font-bold
                  transition-all
                  duration-300
  
                  ${
                    active
                      ? `
                          bg-gradient-to-r
                          from-[#5b216d]
                          to-[#a83279]
                          text-white
                          shadow-[0_8px_22px_rgba(168,50,121,0.22)]
                        `
                      : `
                          bg-[#f8eeff]
                          text-[#5b216d]
                          hover:bg-[#f3e8f5]
                        `
                  }
                `}
              >
                {item.label}
              </button>
            );
          }
        )}
      </div>
    );
  }