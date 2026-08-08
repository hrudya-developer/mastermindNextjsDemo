import LeftSidebar from "./LeftSidebar";
import HeroCenter from "./HeroCenter";
import RightSidebar from "./RightSidebar";

export default function DesktopHero() {
  return (
    <section className="w-full bg-[#f4f7ff] px-4 py-5 2xl:px-6">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1700px]
          grid-cols-[150px_minmax(0,1fr)_300px]
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_20px_60px_rgba(30,64,175,0.08)]
          2xl:grid-cols-[165px_minmax(0,1fr)_320px]
        "
      >
        <LeftSidebar />

        <HeroCenter />

        <RightSidebar />
      </div>
    </section>
  );
}