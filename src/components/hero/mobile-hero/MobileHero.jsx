import MobileNavbar from "./MobileNavbar";
import MobileHeroBackground from "./MobileHeroBackground";
import MobileHeroContent from "./MobileHeroContent";

export default function MobileHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#061347]">
      <MobileHeroBackground />

      <MobileNavbar />

      <MobileHeroContent />
    </section>
  );
}