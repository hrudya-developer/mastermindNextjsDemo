import { notFound } from "next/navigation";

import {
  getPackageDetails,
  getPackagesList,
} from "@/lib/packagesHelper";

import PackageHero from "./PackageHero";
import PackagePriceSection from "./PackagePriceSection";
import PackageIncludesSection from "./PackageIncludesSection";
import PackageCoursesSection from "./PackageCoursesSection";
import PackageFAQ from "./PackageFAQ";
import PackageDescriptionSection from "./PackageDescriptionSection";

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const packages =
    await getPackagesList({
      uid: 0,
      cid: 1,
    });

  const selectedPackage =
    packages.find(
      (item) =>
        String(item?.slug) ===
        String(slug)
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

  const title =
    selectedPackage?.package ||
    selectedPackage?.title ||
    "Competitive Exam Package";

  return {
    title:
      `${title} | MasterMind Academy`,

    description:
      `Explore ${title}, pricing, validity, included courses and package benefits.`,

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
  const { slug } = await params;

  /* =======================================================
     GET PACKAGE LIST
  ======================================================= */

  const packages =
    await getPackagesList({
      uid: 0,
      cid: 1,
    });

  /* =======================================================
     FIND SELECTED PACKAGE
  ======================================================= */

  const selectedPackage =
    packages.find(
      (item) =>
        String(item?.slug) ===
        String(slug)
    );

  if (!selectedPackage?.id) {
    notFound();
  }

  /* =======================================================
     GET PACKAGE DETAILS
  ======================================================= */

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

  /* =======================================================
     PAGE
  ======================================================= */

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
      <div
        className="
          mx-auto
          mt-12
          max-w-7xl
        "
      >
        {/* PACKAGE HERO */}

        <PackageHero
          packageData={
            packageData
          }
        />
        <PackageDescriptionSection
  description={
    packageData?.description ||
    ""
  }
/>

        {/* PRICE DETAILS */}

        <PackagePriceSection
          price={
            packageData?.price
          }
        />

        {/* PACKAGE BENEFITS */}

        <PackageIncludesSection
          features={
            packageData?.features ||
            []
          }
        />

        {/* INCLUDED COURSES */}

        <PackageCoursesSection
          courses={
            packageData?.courses ||
            []
          }
        />

        {/* FAQ */}

        <PackageFAQ
          packageData={
            packageData
          }
        />
      </div>
    </main>
  );
}