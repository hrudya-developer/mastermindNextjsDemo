import MockTestDetails from "./components/MockTestDetails";

function getNumberParam(
  value,
  fallback
) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return fallback;
  }

  const parsed =
    Number(value);

  return Number.isNaN(
    parsed
  )
    ? fallback
    : parsed;
}

export async function generateMetadata({
  params,
  searchParams,
}) {
  const { examId } =
    await params;

  const query =
    await searchParams;

  const examTitle =
    query?.title || "";

  return {
    title: examTitle
      ? `${examTitle} | MasterMind Academy`
      : `Kerala PSC Mock Test ${examId} | MasterMind Academy`,

    description:
      "Practice Kerala PSC mock test questions with MasterMind Academy.",
  };
}

export default async function MockTestPage({
  params,
  searchParams,
}) {
  const { examId } =
    await params;

  const query =
    await searchParams;

  const uid =
    getNumberParam(
      query?.uid,
      0
    );

  const cid =
    getNumberParam(
      query?.cid,
      1
    );

  const examTitle =
    query?.title || "";

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
        <MockTestDetails
          examId={examId}
          uid={uid}
          cid={cid}
          examTitle={
            examTitle
          }
        />
      </div>
    </main>
  );
}