import BulletinHero from "./components/BulletinHero";
import BulletinMonths from "./components/BulletinMonths";

export const metadata = {
  title:
    "Kerala PSC Bulletin | MasterMind Academy",

  description:
    "Browse monthly Kerala PSC bulletin content and access available premium study materials.",
};

export default function BulletinPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#f5f9ff]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1450px]
          px-4
          py-6
          sm:px-6
          lg:px-8
          lg:py-8
        "
      >
        <BulletinHero />

        <BulletinMonths
          cid={1}
          uid={21}
        />
      </div>
    </main>
  );
}