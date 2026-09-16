import MockTestDetails from "./components/MockTestDetails";

export async function generateMetadata({
  params,
}) {
  const { examId } =
    await params;

  return {
    title:
      `Kerala PSC Mock Test ${examId} | MasterMind Academy`,

    description:
      "Practice Kerala PSC mock test questions and review exam details with MasterMind Academy.",
  };
}

export default async function MockTestPage({
  params,
}) {
  const { examId } =
    await params;

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
          cid={1}
          uid={21}
        />
      </div>
    </main>
  );
}