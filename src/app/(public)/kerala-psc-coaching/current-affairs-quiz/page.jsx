import CurrentAffairsQuizHero from "./components/CurrentAffairsQuizHero";
import CurrentAffairsQuizContent from "./components/CurrentAffairsQuizContent";

export const metadata = {
  title:
    "Kerala PSC Current Affairs Quiz | MasterMind Academy",

  description:
    "Practice Kerala PSC current affairs quizzes and improve your preparation with regularly updated quiz questions.",
};

export default function CurrentAffairsQuizPage() {
  return (
    <main className="min-h-screen bg-[#f5f9ff]">
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
        <CurrentAffairsQuizHero />

        <CurrentAffairsQuizContent />
      </div>
    </main>
  );
}