import {
    notFound,
  } from "next/navigation";
  
  import KeralaPscHero from "@/app/(public)/kerala-psc-coaching/db-hero/KeralaPscHero";
  
  import ExamCategorySection from "@/app/(public)/kerala-psc-coaching/exam-category-section/ExamCategorySection";
  
  import LearningToolsGrid from "@/app/(public)/kerala-psc-coaching/learning-tools-grid/LearningToolsGrid";
  
  import LatestUpdatesSection from "@/app/(public)/kerala-psc-coaching/latest-updates/components/LatestUpdatesSection";
  
  import CompetitiveExamPacks from "@/app/(public)/kerala-psc-coaching/competitive-exam-packs/CompetitiveExamPacks";
  
  import AIShortVideos from "@/app/(public)/kerala-psc-coaching/ai-short-videos/components/AIShortVideos";
  
  import SubExamSection from "@/app/(public)/kerala-psc-coaching/recommeded-courses/[recommendedCoursesSlug]/components/SubExamSection";
  
  import {
    getMainCourses,
  } from "@/lib/pscApi";
  
  /* =========================================================
     COURSE CONFIG
  ========================================================= */
  
  const COURSE_ID = 2;
  
  const BASE_PATH =
    "/rrb-ssc-exams-coaching";
  
  /* =========================================================
     RESOLVE COURSE
  ========================================================= */
  
  async function resolveCourse() {
    try {
      const {
        courses,
        filePath,
      } = await getMainCourses();
  
      const course =
        Array.isArray(courses)
          ? courses.find(
              (item) =>
                Number(
                  item?.id
                ) ===
                COURSE_ID
            ) || null
          : null;
  
      return {
        course,
        filePath,
      };
    } catch (error) {
      console.error(
        "Unable to resolve RRB SSC:",
        error
      );
  
      return {
        course: null,
        filePath: "",
      };
    }
  }
  
  /* =========================================================
     SEO
  ========================================================= */
  
  export const metadata = {
    title:
      "RRB & SSC Exam Coaching | MasterMind Academy",
  
    description:
      "Prepare for RRB and SSC exams with mock tests, previous questions, video classes, study materials and structured preparation resources.",
  
    alternates: {
      canonical:
        "/rrb-ssc-exams-coaching",
    },
  
    robots: {
      index: true,
      follow: true,
    },
  };
  
  /* =========================================================
     PAGE
  ========================================================= */
  
  export default async function RrbSscPage() {
    const {
      course,
      filePath,
    } = await resolveCourse();
  
    if (!course) {
      notFound();
    }
  
    return (
      <main
        className="
          min-h-screen
          bg-[#f6f9fd]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-4
            py-6
            sm:px-6
            lg:px-8
          "
        >
          <KeralaPscHero
            course={course}
            filePath={filePath}
            cid={COURSE_ID}
            basePath={BASE_PATH}
            courseType="rrb-ssc"
          />
  
          <div className="mt-5">
            <LearningToolsGrid
              cid={COURSE_ID}
              basePath={BASE_PATH}
              courseType="rrb-ssc"
            />
          </div>
  
          <div className="mt-5">
            <ExamCategorySection
              course={course}
              cid={COURSE_ID}
              basePath={BASE_PATH}
              courseType="rrb-ssc"
            />
  
            <SubExamSection
              cid={COURSE_ID}
              basePath={BASE_PATH}
              courseType="rrb-ssc"
            />
  
            <AIShortVideos
              cid={COURSE_ID}
              basePath={BASE_PATH}
              courseType="rrb-ssc"
            />
  
            <CompetitiveExamPacks
              cid={COURSE_ID}
              basePath={BASE_PATH}
              courseType="rrb-ssc"
            />
  
            <LatestUpdatesSection
              cid={COURSE_ID}
              basePath={BASE_PATH}
              courseType="rrb-ssc"
            />
          </div>
        </div>
      </main>
    );
  }