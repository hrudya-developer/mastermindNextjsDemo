import MockTestHero from "./components/MockTestHero";
import MockTestContent from "./components/MockTestContent";

export const metadata = {
  title:
    "Kerala PSC Mock Tests | MasterMind Academy",

  description:
    "Practice Kerala PSC mock tests for Degree, Plus Two and SSLC level exams with MasterMind Academy.",
};

export default function MockTestsPage() {
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
        <MockTestHero />

        <MockTestContent />
      </div>
    </main>
  );
}