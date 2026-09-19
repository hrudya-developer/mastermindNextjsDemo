import {
    getStatementTypeTopics,
  } from "@/lib/statementTypeExamHelper";
  
  import StatementTypeHero from "./components/StatementTypeHero";
  import StatementTypeList from "./components/StatementTypeList";
  
  export const metadata = {
    title:
      "Topic Wise Statement Type Exams | MasterMind Academy",
  
    description:
      "Practice Kerala PSC topic-wise statement type questions and improve your exam preparation.",
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
  
  export default async function StatementTypeExamsPage({
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
      "tst";
  
    const result =
      await getStatementTypeTopics(
        {
          uid,
          cid,
          type,
        }
      );
  
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
          bg-[#f8fafc]
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
          <StatementTypeHero />
  
          <StatementTypeList
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