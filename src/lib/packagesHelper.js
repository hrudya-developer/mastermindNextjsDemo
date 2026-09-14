import "server-only";

const PSC_API_BASE_URL =
  process.env.PSC_API_BASE_URL;

function createSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createImageUrl(
  iconPath,
  icon
) {
  if (!iconPath || !icon) {
    return null;
  }

  return `${String(iconPath).replace(/\/$/, "")}/${icon}`;
}

/* =========================================================
   PACKAGES LIST
========================================================= */

export async function getPackagesList({
  uid = 0,
  cid = 1,
} = {}) {
  try {
    const formData =
      new FormData();

    formData.append(
      "api",
      process.env.PSC_API_KEY
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

    return packages.map(
      (item) => ({
        id: item?.id,

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
      })
    );
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
      return null;
    }

    const formData =
      new FormData();

    formData.append(
      "api",
      process.env.PSC_API_KEY
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

    const packageItem =
      Array.isArray(result?.data)
        ? result.data[0]
        : null;

    if (!packageItem) {
      return null;
    }

    const iconPath =
      result?.icon_path || "";

    return {
      package:
        packageItem?.package || "",

      tag:
        packageItem?.tag || "",

      description:
        packageItem?.description || "",

      imageUrl:
        createImageUrl(
          iconPath,
          packageItem?.icon
        ),

      premium:
        Boolean(
          result?.premium
        ),

      courses:
        Array.isArray(
          result?.courses
        )
          ? result.courses.map(
              (course) => ({
                exam:
                  course?.exam || "",
              })
            )
          : [],

      prices:
        Array.isArray(
          result?.price
        )
          ? result.price.map(
              (price) => ({
                price:
                  price?.price || "",

                strikedPrice:
                  price?.striked_price ||
                  "",

                gst:
                  price?.gst || "0",

                subtotal:
                  price?.subtotal || "",

                finalPrice:
                  price?.roundvalue ||
                  "",

                validity:
                  price?.validity || "",

                days:
                  price?.days || "",
              })
            )
          : [],

      contains:
        Array.isArray(
          result?.contains
        )
          ? result.contains.map(
              (item) => ({
                text:
                  item?.text || "",

                textMalayalam:
                  item?.text_mal ||
                  "",
              })
            )
          : [],
    };
  } catch (error) {
    console.error(
      "getPackageDetails error:",
      error
    );

    return null;
  }
}