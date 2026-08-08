import { stats } from "./data";

export default function HeroStats() {
  return (
    <div
      className="
        relative
        z-20
        mx-3
        mb-3
        grid
        grid-cols-1
        overflow-hidden
        rounded-2xl
        border
        border-blue-100
        bg-white/90
        shadow-[0_12px_35px_rgba(30,64,175,0.08)]
        backdrop-blur

        min-[430px]:grid-cols-2

        md:mx-5
        md:mb-5

        xl:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <StatItem
          key={stat.value}
          {...stat}
        />
      ))}
    </div>
  );
}

function StatItem({
  icon,
  value,
  title,
  subtitle,
}) {
  return (
    <div
      className="
        flex
        min-h-[100px]
        items-center
        gap-4
        border-b
        border-blue-50
        p-4

        xl:border-b-0
        xl:border-r

        last:border-0
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-blue-50
          text-xl
        "
      >
        {icon}
      </div>

      <div>
        <strong className="block text-lg font-bold text-blue-700">
          {value}
        </strong>

        <p className="mt-1 text-[11px] leading-4 text-slate-600">
          {title}

          <br />

          <span className="text-slate-400">
            {subtitle}
          </span>
        </p>
      </div>
    </div>
  );
}