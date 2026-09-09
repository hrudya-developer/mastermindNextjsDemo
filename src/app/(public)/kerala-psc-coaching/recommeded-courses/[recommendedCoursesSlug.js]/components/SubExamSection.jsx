import SubExamsGrid from "./SubExamsGrid";


export default function SubExamSection() {
  return (
    <section className="bg-[#f8fbff] py-12">
      <div className="mx-auto max-w-9xl">
        <div className="mb-7">
          <h2 className="text-3xl font-black text-[#0b216c]">
            Recommended Courses
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Choose an exam and start your preparation.
          </p>
        </div>

        <SubExamsGrid />
      </div>
    </section>
  );
}