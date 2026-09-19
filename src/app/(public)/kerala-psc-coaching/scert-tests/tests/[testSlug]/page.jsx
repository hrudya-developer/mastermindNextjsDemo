import {
  notFound,
} from "next/navigation";

import {
  getScertFolders,
  getScertTestsByClassId,
  getScertExamDetails,
} from "@/lib/scertHelper";

import ScertInstructions from "./components/ScertInstructions";

/* =========================================================
   CREATE SLUG
========================================================= */

function createSlug(
  value = ""
) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

/* =========================================================
   FIND SCERT TEST USING SLUG

   Example:

   class-6-basic-science-practice-test-1

   becomes:

   {
     classId: 2,
     examId: 20,
     test: {...}
   }
========================================================= */

async function findScertTestBySlug(
  testSlug
) {
  /* =============================================
     GET AVAILABLE CLASSES
  ============================================= */

  const foldersResult =
    await getScertFolders({
      uid: 0,
      cid: 1,
      offset: 0,
    });

  const folders =
    Array.isArray(
      foldersResult?.data
    )
      ? foldersResult.data
      : [];

  /* =============================================
     CHECK EACH CLASS
  ============================================= */

  for (
    const folder of folders
  ) {
    const classId =
      folder?.id;

    if (!classId) {
      continue;
    }

    /* ===========================================
       IMPORTANT

       classId becomes cid:

       Class 5 -> cid 1
       Class 6 -> cid 2
       Class 7 -> cid 3
    =========================================== */

    const testsResult =
      await getScertTestsByClassId({
        uid: 0,

        classId,

        filter: 0,
      });

    const tests =
      Array.isArray(
        testsResult?.data
      )
        ? testsResult.data
        : [];

    const selectedTest =
      tests.find(
        (test) =>
          createSlug(
            test?.exam_name
          ) ===
          String(testSlug)
      );

    if (selectedTest) {
      return {
        classId,

        className:
          folder?.class ||
          "",

        examId:
          selectedTest.id,

        test:
          selectedTest,
      };
    }
  }

  return null;
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}) {
  const {
    testSlug,
  } = await params;

  const selected =
    await findScertTestBySlug(
      testSlug
    );

  if (!selected) {
    return {
      title:
        "SCERT Test | MasterMind Academy",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title:
      `${selected.test.exam_name} | MasterMind Academy`,

    description:
      `Practice ${selected.test.exam_name} for Kerala PSC preparation.`,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ScertExamDetailsPage({
  params,
}) {
  const {
    testSlug,
  } = await params;

  /* =============================================
     FIND CLASS + EXAM
  ============================================= */

  const selected =
    await findScertTestBySlug(
      testSlug
    );

  if (
    !selected?.examId ||
    !selected?.classId
  ) {
    notFound();
  }

  const {
    classId,
    examId,
    className,
    test,
  } = selected;

  console.log(
    "SCERT SELECTED TEST:",
    {
      testSlug,

      classId,

      backendCid:
        classId,

      examId,

      className,

      examName:
        test?.exam_name,
    }
  );

  /* =============================================
     GET CORRECT EXAM DETAILS

     IMPORTANT:

     cid MUST be selected class id.

     Class 6 example:
     cid = 2
     examId = 20
  ============================================= */

  const detailsResult =
    await getScertExamDetails({
      uid: 0,

      cid:
        classId,

      examId,
    });

  console.log(
    "SCERT DETAILS RESULT:",
    detailsResult
  );

  const exam =
    detailsResult?.exam;

  const instructions =
    Array.isArray(
      detailsResult?.instructions
    )
      ? detailsResult.instructions
      : [];

  if (!exam) {
    notFound();
  }

  /* =============================================
     PAGE
  ============================================= */

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
          max-w-[1100px]
          px-4
          py-8
          sm:px-6
          lg:px-8
        "
      >
       <ScertInstructions
  exam={exam}
  instructions={instructions}
  testSlug={testSlug}
  classId={classId}
/>
      </div>
    </main>
  );
}