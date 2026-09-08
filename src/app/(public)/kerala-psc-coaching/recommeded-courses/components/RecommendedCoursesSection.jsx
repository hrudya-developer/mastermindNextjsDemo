import RecommendedCoursesHeader from "./RecommendedCoursesHeader";
import RecommendedCourseCard from "./RecommendedCourseCard";
import ReferAndEarnCard from "./ReferAndEarnCard";
import RecommendedStats from "./RecommendedStats";

const courses = [
  {
    id: 1,
    title: "LGS Crash Course",
    badge: "Best Seller",
    image: "/assets/lgs-course.webp",
    slug: "lgs-crash-course",
    theme: "pink",
    points: [
      "300+ Classes",
      "Bilingual Classes",
      "Mock Tests Included",
    ],
  },
  {
    id: 2,
    title: "Mission LDC Complete Course",
    image: "/assets/ldc-course.webp",
    slug: "mission-ldc-complete-course",
    theme: "blue",
    points: [
      "400+ Classes",
      "Previous Questions",
      "Model Exams",
    ],
  },
  {
    id: 3,
    title: "Secretariat Assistant Course",
    image: "/assets/secretariat-course.webp",
    slug: "secretariat-assistant-course",
    theme: "rose",
    points: [
      "350+ Classes",
      "Current Affairs Focus",
      "Expert Mentorship",
    ],
  },
  {
    id: 4,
    title: "Beat Forest Officer Course",
    image: "/assets/forest-officer-course.webp",
    slug: "beat-forest-officer-course",
    theme: "violet",
    points: [
      "250+ Classes",
      "Topicwise Tests",
      "Revision Notes",
    ],
  },
];

export default function RecommendedCoursesSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-[26px]
        border
        border-[#dfeaf6]
        bg-gradient-to-br
        from-white
        via-[#fbfdff]
        to-[#f3f8ff]
        px-4
        py-5
        shadow-[0_14px_40px_rgba(15,58,110,0.06)]

        sm:px-5
        sm:py-6

        lg:px-6 my-5
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#00b5e8]/[0.06]
          blur-[90px]
        "
      />

      <div className="relative z-10">
        <RecommendedCoursesHeader />

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2

            xl:grid-cols-4
          "
        >
          {courses.map((course) => (
            <RecommendedCourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

        <div
          className="
            mt-4
            grid
            gap-4

            lg:grid-cols-[minmax(0,1fr)_260px]
          "
        >
          <ReferAndEarnCard />
          <RecommendedStats />
        </div>
      </div>
    </section>
  );
}