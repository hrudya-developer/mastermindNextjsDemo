import "server-only";

/* =========================================================
   API CONFIG
========================================================= */

function getApiConfig() {
  const apiBaseUrl =
    process.env.PSC_API_BASE_URL;

  const apiKey =
    process.env.PSC_API_KEY;

  if (!apiBaseUrl || !apiKey) {
    throw new Error(
      "PSC API configuration is missing."
    );
  }

  return {
    apiBaseUrl:
      String(apiBaseUrl).replace(
        /\/+$/,
        ""
      ),

    apiKey:
      String(apiKey).trim(),
  };
}

/* =========================================================
   GET MAIN COURSES
========================================================= */

export async function getMainCourses() {
  const {
    apiBaseUrl,
    apiKey,
  } = getApiConfig();

  const url =
    `${apiBaseUrl}/getCourses` +
    `?api=${encodeURIComponent(
      apiKey
    )}`;

  const response =
    await fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
      },

      next: {
        revalidate: 3600,
      },
    });

  if (!response.ok) {
    throw new Error(
      `getCourses failed with status ${response.status}`
    );
  }

  const result =
    await response.json();

  return {
    status:
      result?.status ?? false,

    filePath:
      result?.file_path ?? "",

    courses:
      Array.isArray(
        result?.data
      )
        ? result.data
        : [],
  };
}

/* =========================================================
   GET SUB CATEGORIES
========================================================= */

export async function getSubCategories({
  cid,
  uid = 0,
}) {
  if (
    cid === undefined ||
    cid === null ||
    cid === ""
  ) {
    throw new Error(
      "Course ID is required."
    );
  }

  const {
    apiBaseUrl,
    apiKey,
  } = getApiConfig();

  const url =
    `${apiBaseUrl}/getSubCategoriesNew` +
    `?api=${encodeURIComponent(
      apiKey
    )}` +
    `&cid=${encodeURIComponent(
      cid
    )}` +
    `&uid=${encodeURIComponent(
      uid
    )}`;

  const response =
    await fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
      },

      next: {
        revalidate: 3600,
      },
    });

  if (!response.ok) {
    throw new Error(
      `getSubCategoriesNew failed with status ${response.status}`
    );
  }

  const result =
    await response.json();

  return {
    status:
      result?.status ?? false,

    filePath:
      result?.file_path ?? "",

    categories:
      Array.isArray(
        result?.data
      )
        ? result.data
        : [],
  };
}