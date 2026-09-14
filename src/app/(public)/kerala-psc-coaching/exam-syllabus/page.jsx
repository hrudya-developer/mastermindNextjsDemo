import ExamSyllabusHero from "./components/ExamSyllabusHero";
import ExamSyllabusList from "./components/ExamSyllabusList";

export const metadata = {
  title:
    "Kerala PSC Exam Syllabus",

  description:
    "Explore Kerala PSC exam syllabuses and access syllabus PDFs for LDC, Secretariat Assistant, LGS and other PSC examinations.",
};

export default function ExamSyllabusPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#f4f9ff]
        pb-12
        pt-[100px]
        lg:pt-[115px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1450px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <ExamSyllabusHero />

        <ExamSyllabusList />
      </div>
    </main>
  );
}