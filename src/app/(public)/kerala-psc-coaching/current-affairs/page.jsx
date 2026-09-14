import CurrentAffairsHero from "./components/CurrentAffairsHero";
import CurrentAffairsFolders from "./components/CurrentAffairsFolders";
import CurrentAffairsCTA from "./components/CurrentAffairsCTA";
import CurrentAffairsFAQ from "./components/CurrentAffairsFAQ";

import {
  getCurrentAffairMonths,
} from "@/lib/currentAffairsHelper";

export const metadata = {
  title:
    "Kerala PSC Current Affairs",

  description:
    "Explore month-wise Kerala PSC current affairs, daily updates and exam-focused current affairs preparation.",
};

export default async function KeralaPSCCurrentAffairsPage() {
  const result =
    await getCurrentAffairMonths({
      uid: 0,
      cid: 1,
    });

  return (
    <main
      className="
        min-h-screen
        bg-[#f4f9ff]
        pb-12
        pt-[90px]
        lg:pt-[110px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]
          px-3
          sm:px-5
          lg:px-7
        "
      >
        <CurrentAffairsHero />

        <CurrentAffairsFolders
          months={
            result?.months ??
            []
          }
          years={
            result?.years ??
            []
          }
        />

        <CurrentAffairsCTA />

        <CurrentAffairsFAQ />
      </div>
    </main>
  );
}