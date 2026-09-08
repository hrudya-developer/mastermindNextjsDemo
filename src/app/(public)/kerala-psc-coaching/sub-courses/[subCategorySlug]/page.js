import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
} from "lucide-react";

import {
  notFound,
} from "next/navigation";

import {
  getMainCourses,
  getSubCategories,
} from "@/lib/pscApi";

import {
  createSlug,
} from "@/lib/pscSlug";

const PAGE_COURSE_SLUG =
  "kerala-psc";

/* =========================================================
   IMAGE
========================================================= */

function buildImageUrl(
  filePath,
  image
) {
  if (!filePath || !image) {
    return "";
  }

  return `${String(
    filePath
  ).replace(/\/+$/, "")}/${String(
    image
  ).replace(/^\/+/, "")}`;
}

/* =========================================================
   RESOLVE KERALA PSC
========================================================= */

async function resolveKeralaPscCourse() {
  try {
    const {
      courses,
    } = await getMainCourses();

    return (
      courses.find(
        (course) =>
          createSlug(
            course?.exam ||
              ""
          ) ===
          PAGE_COURSE_SLUG
      ) || null
    );
  } catch (error) {
    console.error(
      "Unable to resolve Kerala PSC:",
      error
    );

    return null;
  }
}

/* =========================================================
   RESOLVE SUBCATEGORY
========================================================= */

async function resolveSubCategory(
  subCategorySlug
) {
  const course =
    await resolveKeralaPscCourse();

  if (!course?.id) {
    return null;
  }

  try {
    const {
      categories,
      filePath,
    } =
      await getSubCategories({
        cid: course.id,
        uid: 0,
      });

    const subCategory =
      categories.find(
        (item) =>
          createSlug(
            item?.name || ""
          ) ===
          createSlug(
            subCategorySlug
          )
      ) || null;

    if (!subCategory) {
      return null;
    }

    return {
      course,
      subCategory,
      filePath,
    };
  } catch (error) {
    console.error(
      "Unable to resolve PSC subcategory:",
      error
    );

    return null;
  }
}

/* =========================================================
   SEO
========================================================= */

export async function generateMetadata({
  params,
}) {
  const {
    subCategorySlug,
  } = await params;

  const resolved =
    await resolveSubCategory(
      subCategorySlug
    );

  if (!resolved) {
    return {
      title:
        "Exam Not Found",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const {
    subCategory,
  } = resolved;

  const title =
    subCategory?.name ||
    "Kerala PSC Exam";

  return {
    title:
      `${title} Kerala PSC Preparation | MasterMind PSC`,

    description:
      `Prepare for ${title} under Kerala PSC with study materials, mock tests, previous questions and exam preparation resources.`,

    alternates: {
      canonical:
        `/kerala-psc-coaching/${createSlug(
          title
        )}`,
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function SubCategoryPage({
  params,
}) {
  const {
    subCategorySlug,
  } = await params;

  const resolved =
    await resolveSubCategory(
      subCategorySlug
    );

  if (!resolved) {
    notFound();
  }

  const {
    course,
    subCategory,
    filePath,
  } = resolved;

  /*
   * THIS is the real subcategory ID
   * from your API.
   *
   * Keep it internal for the next API.
   */
  const subCategoryId =
    subCategory.id;

  const imageUrl =
    buildImageUrl(
      filePath,
      subCategory?.icon_large ||
        subCategory?.icon
    );

  return (
    <main
      className="
        min-h-screen
        bg-[#f6f9fd]
        py-8
      "
    >
      <section
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-4

          sm:px-6
          lg:px-8
        "
      >
        <Link
          href="/kerala-psc-coaching"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#164fa5]
            transition
            hover:text-[#017cc0]
          "
        >
          <ArrowLeft
            size={16}
          />

          Back to {course.exam}
        </Link>

        <div
          className="
            relative
            mt-5
            min-h-[380px]
            overflow-hidden
            rounded-[28px]
            bg-[#0b216c]
            shadow-[0_20px_55px_rgba(11,33,108,0.14)]
          "
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={
                subCategory.name
              }
              fill
              priority
              sizes="100vw"
              className="
                object-cover
              "
              unoptimized
            />
          )}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#081f5c]/95
              via-[#0b216c]/70
              to-[#0b216c]/10
            "
          />

          <div
            className="
              relative
              z-10
              flex
              min-h-[380px]
              max-w-3xl
              flex-col
              justify-center
              px-6
              py-10

              sm:px-10

              lg:px-14
            "
          >
            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.22em]
                text-[#64dcff]
              "
            >
              {course.exam}
            </p>

            <h1
              className="
                mt-3
                text-4xl
                font-black
                tracking-[-0.04em]
                text-white

                sm:text-5xl
              "
            >
              {subCategory.name}
            </h1>

            {subCategory?.name_mal && (
              <p
                className="
                  mt-3
                  text-sm
                  text-white/65
                "
              >
                {subCategory.name_mal}
              </p>
            )}

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/75
              "
            >
              Explore preparation resources,
              study materials, practice tests
              and exam-focused learning for{" "}
              {subCategory.name}.
            </p>

            {/*
              IMPORTANT:

              subCategoryId is now available:

              const subCategoryId =
                subCategory.id;

              Use this ID for your NEXT API:
              subjects / courses / tests etc.

              Do NOT put it in the URL.
            */}
          </div>
        </div>
      </section>
    </main>
  );
}