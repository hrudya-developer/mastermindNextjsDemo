import HeroTopBar from "./HeroTopBar";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function HeroCenter() {
  return (
    <main className="min-w-0 bg-white p-3 2xl:p-4">
      <div
        className="
          relative
          flex
          min-h-[760px]
          flex-col
          overflow-hidden
          rounded-[26px]
         shadow-sm
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        {/* 
          XL / smaller desktop:
          1280px - 1535px
        */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            hidden
            bg-cover
            bg-right
            bg-no-repeat

            xl:block
            2xl:hidden
          "
          style={{
            backgroundImage: "url('/assets/sampleBg1.png')",
          }}
        />

        {/* 
          LARGE LAPTOP / LARGE DESKTOP:
          1536px+
        */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            hidden
            bg-cover
            bg-right
            bg-no-repeat

            2xl:block
          "
          style={{
            backgroundImage: "url('/assets/sampleBg2.png')",
          }}
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10">
          <HeroTopBar />
        </div>

        <div className="relative z-10">
          <HeroContent />
        </div>

        {/* =====================================================
            STATS AT BOTTOM
        ====================================================== */}

        <div className="relative z-20 mt-auto">
          <HeroStats />
        </div>
      </div>
    </main>
  );
}