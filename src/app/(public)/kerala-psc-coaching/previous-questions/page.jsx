import PreviousQuestionsHero from "./components/PreviousQuestionsHero";
import PreviousQuestionsList from "./components/PreviousQuestionsList";

import {
  getPreviousQuestions,
} from "@/lib/pyqHelper";

export default async function PreviousQuestionsPage() {
  const initialFilter = 3;

  const result =
    await getPreviousQuestions({
      uid: 0,
      cid: 1,
      offset: 0,
      type: "pqp",
      filter:
        initialFilter,
    });

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
        "
      >
        <PreviousQuestionsHero />

        <div className="mt-6">
          <PreviousQuestionsList
            initialExams={
              result.data
            }
            initialNextOffset={
              result.nextOffset
            }
            initialFilter={
              initialFilter
            }
            uid={0}
            cid={1}
            type="pqp"
          />
        </div>
      </div>
    </main>
  );
}