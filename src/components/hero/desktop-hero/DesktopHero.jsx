import HeroCenter from "./HeroCenter";
import RightSidebar from "./RightSidebar";

export default function DesktopHero() {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f9ff]

        pt-[68px]
        sm:pt-[74px]
        lg:pt-[104px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          gap-4
          px-3
          pb-4

          sm:px-4

          lg:grid-cols-[minmax(0,1fr)_310px]
          lg:gap-4
          lg:px-6
          lg:pb-6

          xl:grid-cols-[minmax(0,1fr)_340px]
          xl:px-8
        "
      >
        {/* MAIN HERO */}
        <HeroCenter />

        {/* RIGHT LEARNING HUB */}
        <div className="hidden lg:block">
          <RightSidebar />
        </div>
      </div>
    </section>
  );
}