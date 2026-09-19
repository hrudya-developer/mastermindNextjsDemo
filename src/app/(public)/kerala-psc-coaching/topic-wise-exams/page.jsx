import {
  getTopicWiseExams,
} from "@/lib/topicWiseExamHelper";

import TopicWiseHero from "./components/TopicWiseHero";
import TopicWiseExamList from "./components/TopicWiseExamList";

export const metadata = {
  title:
    "Topic Wise Exams | MasterMind Academy",

  description:
    "Practice topic-wise Kerala PSC competitive exam questions with MasterMind Academy.",
};

const ITEMS_PER_PAGE =
  10;

function getPageNumber(
  value
) {
  const page =
    Number(value);

  if (
    !Number.isInteger(
      page
    ) ||
    page < 1
  ) {
    return 1;
  }

  return page;
}

export default async function TopicWiseExamsPage({
  searchParams,
}) {
  const query =
    await searchParams;

  const requestedPage =
    getPageNumber(
      query?.page
    );

  const uid = 0;
  const cid = 1;
  const type =
    "twe";

  const result =
    await getTopicWiseExams({
      uid,
      cid,
      type,
    });

  const allTopics =
    Array.isArray(
      result?.data
    )
      ? result.data
      : [];

  const totalItems =
    allTopics.length;

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        totalItems /
          ITEMS_PER_PAGE
      )
    );

  const currentPage =
    Math.min(
      requestedPage,
      totalPages
    );

  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;

  const topics =
    allTopics.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE
    );

  return (
    <main
      className="
        min-h-screen
        bg-[#f5f9ff]
      "
    >
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
        <TopicWiseHero />

        <TopicWiseExamList
          topics={
            topics
          }
          currentPage={
            currentPage
          }
          totalPages={
            totalPages
          }
          totalItems={
            totalItems
          }
          itemsPerPage={
            ITEMS_PER_PAGE
          }
        />
      </div>
    </main>
  );
}