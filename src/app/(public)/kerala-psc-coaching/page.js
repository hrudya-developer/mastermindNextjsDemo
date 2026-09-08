import {
  notFound,
} from "next/navigation";

import KeralaPscHero from "./db-hero/KeralaPscHero";

import ExamCategorySection from "./exam-category-section/ExamCategorySection";

import LearningToolsGrid from "./learning-tools-grid/LearningToolsGrid";

import {
  getMainCourses,
} from "@/lib/pscApi";

import {
  createSlug,
} from "@/lib/pscSlug";
import RecommendedCoursesSection from "./recommeded-courses/components/RecommendedCoursesSection";
import LatestUpdatesSection from "./latest-updates/components/LatestUpdatesSection";
import KPSCFAQ from "./faq/KPSCFAQ";
import CompetitiveExamPacks from "./competitive-exam-packs/CompetitiveExamPacks";
import AIShortVideos from "./ai-short-videos/components/AIShortVideos";

/*
 * This identifies which API course belongs
 * to this fixed SEO route.
 *
 * It is NOT an API ID.
 */
const PAGE_COURSE_SLUG =
  "kerala-psc";

async function resolveCourse() {
  try {
    const {
      courses,
      filePath,
    } = await getMainCourses();

    const course =
      courses.find(
        (item) =>
          createSlug(
            item?.exam || ""
          ) ===
          PAGE_COURSE_SLUG
      ) || null;

    return {
      course,
      filePath,
    };
  } catch (error) {
    console.error(
      "Unable to resolve Kerala PSC:",
      error
    );

    return {
      course: null,
      filePath: "",
    };
  }
}

export const metadata = {
  title:
    "Kerala PSC Coaching | MasterMind PSC",

  description:
    "Prepare for Kerala PSC exams with mock tests, current affairs, previous questions, study materials and expert preparation resources.",

  alternates: {
    canonical:
      "/kerala-psc-coaching",
  },
};

export default async function KeralaPscPage() {
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
        />

        <div className="mt-5">
          <LearningToolsGrid />
        </div>
       

        <div className="mt-5">
          <ExamCategorySection
            course={course}
          />
          <RecommendedCoursesSection />
          <AIShortVideos />
          <CompetitiveExamPacks />
          <LatestUpdatesSection />
          <KPSCFAQ />
        </div>
      </div>
    </main>
  );
}