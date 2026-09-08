import { exploreItems } from "./data";
import SidebarItem from "./SidebarItem";

export default function RightSidebar() {
  return (
    <aside
      className="
        hidden shadow-sm
        bg-gradient-to-b
        from-[#f9fcff]
        via-[#f4faff]
        to-[#eef7fc]
        p-5 rounded-2xl

        xl:flex
        xl:flex-col
      "
    >
      {/* HEADER */}

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#164fa5]">
            Learning Hub
          </h2>

          <p className="mt-1 text-xs text-[#2c2b2b]/55">
            Choose your path to success
          </p>

          <div
            className="
              mt-3
              h-[3px]
              w-10
              rounded-full
              bg-gradient-to-r
              from-[#00b5e8]
              via-[#017cc0]
              to-[#164fa5]
            "
          />
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full

            bg-gradient-to-br
            from-[#00b5e8]/15
            via-[#017cc0]/10
            to-[#164fa5]/15

            text-2xl

            ring-1
            ring-[#164fa5]/10

            shadow-[0_8px_20px_rgba(22,79,165,0.08)]
          "
        >
          🎓
        </div>
      </div>

      {/* ITEMS */}

      <div className="mt-6 flex flex-col gap-3">
        {exploreItems.map((item) => (
          <SidebarItem
            key={item.title}
            {...item}
          />
        ))}
      </div>

      {/* VIEW ALL */}

      <a
        href="#courses"
        className="
          group
          mt-auto
          flex
          min-h-[100px]
          items-center
          justify-between

          rounded-2xl

          bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]

          p-5

          text-white

          shadow-[0_14px_30px_rgba(22,79,165,0.22)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_18px_36px_rgba(22,79,165,0.30)]
        "
      >
        <div>
          <strong className="block text-sm">
            Download Study Materials
          </strong>

          <span className="mt-2 block text-[11px] text-white/75">
          Access helpful study resources
          </span>
        </div>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-xl
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </aside>
  );
}