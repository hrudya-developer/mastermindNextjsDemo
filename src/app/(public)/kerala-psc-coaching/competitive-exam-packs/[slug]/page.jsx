import Link from "next/link";

import {
  ArrowLeft,
} from "lucide-react";

import {
  notFound,
} from "next/navigation";

import {
  getPackageDetails,
  getPackagesList,
} from "@/lib/packagesHelper";

import PackageHero from "./PackageHero";
import PackagePriceSection from "./PackagePriceSection";
import PackageIncludesSection from "./PackageIncludesSection";
import PackageCoursesSection from "./PackageCoursesSection";
import PackageFAQ from "./PackageFAQ";

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}) {
  const { slug } =
    await params;

  const packages =
    await getPackagesList({
      uid: 0,
      cid: 1,
    });

  const selectedPackage =
    packages.find(
      (item) =>
        item.slug === slug
    );

  if (!selectedPackage) {
    return {
      title:
        "Package Not Found",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title:
      `${selectedPackage.package} | Master Mind`,

    description:
      `Explore ${selectedPackage.package}, pricing, validity, included courses and package benefits.`,

    alternates: {
      canonical:
        `/kerala-psc-coaching/competitive-exam-packs/${slug}`,
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function PackageDetailsPage({
  params,
}) {
  const { slug } =
    await params;

  const packages =
    await getPackagesList({
      uid: 0,
      cid: 1,
    });

  const selectedPackage =
    packages.find(
      (item) =>
        item.slug === slug
    );

  if (!selectedPackage) {
    notFound();
  }

  const packageData =
    await getPackageDetails({
      uid: 0,
      cid: 1,
      pid:
        selectedPackage.id,
    });

  if (!packageData) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#f6faff]
        px-4
        py-8
        sm:px-6
        lg:px-8
        lg:py-12
      "
    >
      <div className="mx-auto max-w-7xl mt-12">
        {/* <Link
          href="/kerala-psc-coaching/recommended-courses"
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#164fa5]
            transition
            hover:text-[#0b216c]
          "
        >
          <ArrowLeft
            className="h-4 w-4"
          />

          All Packages
        </Link> */}

        <PackageHero
          packageData={
            packageData
          }
        />

        <PackagePriceSection
          prices={
            packageData.prices
          }
        />

        <PackageIncludesSection
          contains={
            packageData.contains
          }
        />

        <PackageCoursesSection
          courses={
            packageData.courses
          }
        />
        <PackageFAQ
  packageData={packageData}
/>
      </div>
    </main>
  );
}