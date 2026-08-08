export default function SidebarItem({
    icon,
    title,
    subtitle,
    href,
  }) {
    return (
      <a
        href={href}
        className="
          group
          grid
          min-h-[88px]
          grid-cols-[46px_1fr_auto]
          items-center
          gap-3
          rounded-2xl
          border
          border-white
          bg-white/90
          p-4
          transition-all
          duration-300
  
          hover:-translate-y-0.5
          hover:shadow-md
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-xl
            text-blue-600
          "
        >
          {icon}
        </div>
  
        <div>
          <h3 className="text-sm font-semibold text-[#07133d]">
            {title}
          </h3>
  
          <p className="mt-1 text-[11px] text-slate-500">
            {subtitle}
          </p>
        </div>
  
        <span className="text-2xl text-blue-700">
          ›
        </span>
      </a>
    );
  }