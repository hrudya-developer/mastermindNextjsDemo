import "server-only";

const PSC_API_BASE_URL =
  process.env.PSC_API_BASE_URL;

const PSC_API_KEY =
  process.env.PSC_API_KEY;

/* =========================================================
   CREATE SLUG
========================================================= */

export function createSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   CREATE IMAGE URL
========================================================= */

function createImageUrl(
  iconPath,
  icon
) {
  if (!iconPath || !icon) {
    return null;
  }

  const cleanPath =
    String(iconPath).replace(
      /\/$/,
      ""
    );

  const cleanIcon =
    String(icon).replace(
      /^\//,
      ""
    );

  return `${cleanPath}/${cleanIcon}`;
}

/* =========================================================
   CHECK API CONFIGURATION
========================================================= */

function hasApiConfig() {
  if (
    !PSC_API_BASE_URL ||
    !PSC_API_KEY
  ) {
    console.error(
      "PSC API configuration is missing."
    );

    return false;
  }

  return true;
}

/* =========================================================
   PACKAGES LIST
========================================================= */

export async function getPackagesList({
  uid = 0,
  cid = 1,
} = {}) {
  try {
    if (!hasApiConfig()) {
      return [];
    }

    const formData =
      new FormData();

    formData.append(
      "api",
      PSC_API_KEY
    );

    formData.append(
      "uid",
      String(uid)
    );

    formData.append(
      "cid",
      String(cid)
    );

    const response =
      await fetch(
        `${PSC_API_BASE_URL}/getPackagesList`,
        {
          method: "POST",
          body: formData,

          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        `getPackagesList failed: ${response.status}`
      );
    }

    const result =
      await response.json();

    const packages =
      Array.isArray(result?.data)
        ? result.data
        : [];

    const iconPath =
      result?.icon_path || "";

    return packages
      .filter(
        (item) =>
          item?.id &&
          item?.package
      )
      .map((item) => ({
        id: item.id,

        title:
          item?.package || "",

        package:
          item?.package || "",

        tag:
          item?.tag || "",

        slug:
          createSlug(
            item?.package
          ),

        imageUrl:
          createImageUrl(
            iconPath,
            item?.icon
          ),

        course:
          item?.course || "",

        type:
          item?.type || "",

        bgHex:
          item?.bgHex || "",

        purchaseAvailable:
          item?.purchase ===
          "active",
      }));
  } catch (error) {
    console.error(
      "getPackagesList error:",
      error
    );

    return [];
  }
}

/* =========================================================
   PACKAGE DETAILS
========================================================= */

export async function getPackageDetails({
  uid = 0,
  cid = 1,
  pid,
} = {}) {
  try {
    if (!pid) {
      console.error(
        "getPackageDetails: pid is required."
      );

      return null;
    }

    if (!hasApiConfig()) {
      return null;
    }

    const formData =
      new FormData();

    formData.append(
      "api",
      PSC_API_KEY
    );

    formData.append(
      "uid",
      String(uid)
    );

    formData.append(
      "cid",
      String(cid)
    );

    formData.append(
      "pid",
      String(pid)
    );

    const response =
      await fetch(
        `${PSC_API_BASE_URL}/getPackagesDetails`,
        {
          method: "POST",
          body: formData,

          next: {
            revalidate: 3600,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        `getPackageDetails failed: ${response.status}`
      );
    }

    const result =
      await response.json();

    if (
      result?.status !== true
    ) {
      console.error(
        "getPackageDetails API returned unsuccessful status."
      );

      return null;
    }

    /* -----------------------------------------------------
       MAIN PACKAGE
    ----------------------------------------------------- */

    const packageItem =
      Array.isArray(result?.data)
        ? result.data[0] || null
        : null;

    if (!packageItem) {
      return null;
    }

    /* -----------------------------------------------------
       IMAGE
    ----------------------------------------------------- */

    const iconPath =
      result?.icon_path || "";

    const imageUrl =
      createImageUrl(
        iconPath,
        packageItem?.icon
      );

    /* -----------------------------------------------------
       PRICE
    ----------------------------------------------------- */

    const priceItem =
      Array.isArray(result?.price)
        ? result.price.find(
            (item) =>
              String(
                item?.status
              ) === "1"
          ) ||
          result.price[0] ||
          null
        : null;

    const price = priceItem
      ? {
          current:
            priceItem?.price ||
            "",

          original:
            priceItem?.striked_price ||
            "",

          subtotal:
            priceItem?.subtotal ||
            "",

          final:
            priceItem?.roundvalue ||
            priceItem?.price ||
            "",

          gst:
            priceItem?.gst ||
            "0",

          validity:
            priceItem?.validity ||
            "",

          days:
            priceItem?.days ||
            "",
        }
      : null;

    /* -----------------------------------------------------
       FEATURES / PACKAGE CONTAINS
    ----------------------------------------------------- */

    const features =
      Array.isArray(
        result?.contains
      )
        ? [...result.contains]
            .filter(
              (item) =>
                item?.text &&
                String(
                  item?.status
                ) !== "0"
            )
            .sort(
              (a, b) =>
                Number(
                  a?.orders || 0
                ) -
                Number(
                  b?.orders || 0
                )
            )
            .map(
              (item) =>
                item.text
            )
        : [];

    /* -----------------------------------------------------
       COURSES
    ----------------------------------------------------- */

    const courses =
      Array.isArray(
        result?.courses
      )
        ? result.courses
            .filter(
              (course) =>
                course?.exam
            )
            .map(
              (course) => ({
                id:
                  course?.id ??
                  null,

                title:
                  course?.exam ||
                  "",
              })
            )
        : [];

    /* -----------------------------------------------------
       SAFE PUBLIC DATA
    ----------------------------------------------------- */

    return {
      id:
        packageItem?.id ??
        null,

      title:
        packageItem?.package ||
        "",

      tag:
        packageItem?.tag ||
        "",

      description:
        packageItem?.description ||
        "",

      slug:
        createSlug(
          packageItem?.package
        ),

      imageUrl,

      type:
        packageItem?.type ||
        "",

      purchaseAvailable:
        packageItem?.purchase ===
        "active",

      premium:
        Boolean(
          result?.premium
        ),

      price,

      features,

      courses,
    };
  } catch (error) {
    console.error(
      "getPackageDetails error:",
      error
    );

    return null;
  }
}