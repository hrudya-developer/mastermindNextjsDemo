import Link from "next/link";
import { ChevronRightIcon } from "./MobileNavIcons";

export default function MobileMenuItem({
  item,
  active = false,
  onClick,
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        group
        flex
        min-h-[52px]
        items-center
        justify-between
        rounded-xl
        px-3
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          active
            ? "bg-[#edf3ff] text-[#07184f]"
            : "text-slate-700 hover:bg-slate-50 hover:text-[#07184f]"
        }
      `}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            transition-colors

            ${
              active
                ? "bg-[#0b2a72] text-white"
                : "bg-blue-50 text-[#0b2a72] group-hover:bg-blue-100"
            }
          `}
        >
          <Icon className="h-4 w-4" />
        </span>

        <span className="truncate">
          {item.label}
        </span>
      </span>

      <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-[#0b2a72]/45 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}