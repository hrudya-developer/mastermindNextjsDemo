import {
    notFound,
  } from "next/navigation";
  
  import SubExamHero from "./SubExamHero";
  import SubExamList from "./SubExamList";
  
  function formatSlug(slug = "") {
    return String(slug)
      .split("-")
      .filter(Boolean)
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");
  }
  
  export async function generateMetadata({
    params,
  }) {
    const { slug } =
      await params;
  
    const title =
      formatSlug(slug);
  
    return {
      title:
        `${title} | Kerala PSC Coaching`,
  
      description:
        `Explore ${title} exams, preparation materials and learning resources for Kerala PSC.`,
    };
  }
  
  export default async function ExamLevelPage({
    params,
    searchParams,
  }) {
    const { slug } =
      await params;
  
    const query =
      await searchParams;
  
    const cid =
      Number(
        query?.cid
      );
  
    const subId =
      Number(
        query?.subId
      );
  
    if (
      !slug ||
      !cid ||
      !subId
    ) {
      notFound();
    }
  
    const title =
      formatSlug(slug);
  
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
          <SubExamHero
            title={title}
          />
  
          <SubExamList
            cid={cid}
            subId={subId}
          />
        </div>
      </main>
    );
  }