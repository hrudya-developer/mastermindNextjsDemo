export default function HeroTopBar() {
    return (
      <div
        className="
          relative
          z-20
          flex
          items-center
          justify-between
          gap-3
          px-5
          pt-5
  
          sm:px-7
          lg:px-10
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white/90
            px-4
            py-2
            text-[11px]
            font-semibold
            text-[#0b216c]
            shadow-sm
            backdrop-blur
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
  
          Live Now
        </div>
  
        <div className="hidden items-center gap-3 md:flex">
          <StatusPill>♟ 24°C</StatusPill>
  
          <StatusPill>◎ Focus Mode</StatusPill>
  
          <StatusPill>♙ 1240+ Learners Online</StatusPill>
        </div>
      </div>
    );
  }
  
  function StatusPill({ children }) {
    return (
      <div
        className="
          rounded-full
          bg-white/90
          px-4
          py-2
          text-[11px]
          font-semibold
          text-[#0b216c]
          shadow-sm
          backdrop-blur
        "
      >
        {children}
      </div>
    );
  }