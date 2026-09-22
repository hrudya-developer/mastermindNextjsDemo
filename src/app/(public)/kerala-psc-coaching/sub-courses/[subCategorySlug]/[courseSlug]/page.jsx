import {
    notFound,
  } from "next/navigation";
  
  import {
    getSubExamDetails,
  } from "@/lib/subExamDetailsHelper";
  
  import ExamDetailsHero from "@/app/(public)/kerala-psc-coaching/(exam-level)/[slug]/[examSlug]/components/ExamDetailsHero";
  
  import ExamDetailsTabs from "@/app/(public)/kerala-psc-coaching/(exam-level)/[slug]/[examSlug]/components/ExamDetailsTabs";
  
  /* =========================================================
     RECOMMENDED COURSE DETAILS
  ========================================================= */
  
  export default async function RecommendedCourseDetailsPage({
    params,
    searchParams,
  }) {
    const {
      subCategorySlug,
      courseSlug,
    } = await params;
  
    const query =
      await searchParams;
  
    /* =======================================================
       IDS FROM SELECTED COURSE CARD
    ======================================================= */
  
    const cid =
      query?.cid || "1";
  
    const examId =
      query?.examId;
  
    const querySubId =
      query?.subId;
  
    /* =======================================================
       VALIDATION
    ======================================================= */
  
    if (
      !subCategorySlug ||
      !courseSlug ||
      !examId
    ) {
      notFound();
    }
  
    /* =======================================================
       COURSE DETAILS
  
       We use mock only to get the
       selected course/basic data.
  
       Individual tabs load their own
       APIs afterwards.
    ======================================================= */
  
    const result =
      await getSubExamDetails({
        uid: 0,
        cid,
        subExamId:
          examId,
        type: "mock",
        offset: 0,
      });
  
    console.log(
      "RECOMMENDED COURSE DETAILS:",
      result
    );
  
    const exam =
      result?.data;
  
    if (!exam) {
      notFound();
    }
  
    /* =======================================================
       RESOLVE SUB ID
  
       Prefer backend.
       Fall back to card query.
    ======================================================= */
  
    const resolvedSubId =
      exam?.sub_id ||
      querySubId ||
      null;
  
    return (
      <main
        className="
          min-h-screen
          bg-[#f4f9ff]
          pb-14
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
          {/* HERO */}
  
          <ExamDetailsHero
            exam={exam}
            levelSlug={
              subCategorySlug
            }
          />
  
          {/* =================================================
              IMPORTANT
  
              Tabs are always rendered
              for the selected course.
          ================================================= */}
  
          <ExamDetailsTabs
            cid={cid}
            examId={examId}
            subId={
              resolvedSubId
            }
          />
        </div>
      </main>
    );
  }