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
    apiBaseUrl: String(
      apiBaseUrl
    ).replace(/\/+$/, ""),

    apiKey: String(
      apiKey
    ).trim(),
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
        Accept:
          "application/json",
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
      Boolean(
        result?.status
      ),

    filePath:
      String(
        result?.file_path ??
          ""
      ),

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
} = {}) {
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
        Accept:
          "application/json",
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
      Boolean(
        result?.status
      ),

    filePath:
      String(
        result?.file_path ??
          ""
      ),

    categories:
      Array.isArray(
        result?.data
      )
        ? result.data
        : [],
  };
}

/* =========================================================
   GET SUB EXAMS

   cid = main course
   subId = exam level/category

   Example:
   cid = 1
   uid = 0
   subId = 3

   -> Kerala PSC
   -> 10th Level
   -> Mission LDC, LDC etc.
========================================================= */

export async function getSubExams({
  cid = 1,
  uid = 0,
  subId,
} = {}) {
  if (
    subId === undefined ||
    subId === null ||
    subId === ""
  ) {
    throw new Error(
      "Sub category ID is required."
    );
  }

  const {
    apiBaseUrl,
    apiKey,
  } = getApiConfig();

  const formData =
    new FormData();

  formData.append(
    "api",
    apiKey
  );

  formData.append(
    "cid",
    String(cid)
  );

  formData.append(
    "uid",
    String(uid)
  );

  formData.append(
    "sub_id",
    String(subId)
  );

  const response =
    await fetch(
      `${apiBaseUrl}/getSubExamsList`,
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
      `getSubExamsList failed with status ${response.status}`
    );
  }

  const result =
    await response.json();

  return {
    status:
      Boolean(
        result?.status
      ),

    iconPath:
      String(
        result?.icon_path ??
          ""
      ),

    exams:
      Array.isArray(
        result?.data
      )
        ? result.data
        : [],
  };
}

/* =========================================================
   GET EXAM SYLLABUS
========================================================= */

export async function getExamSyllabus({
  uid = 0,
  cid = 1,
} = {}) {
  const {
    apiBaseUrl,
    apiKey,
  } = getApiConfig();

  const formData =
    new FormData();

  formData.append(
    "api",
    apiKey
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
      `${apiBaseUrl}/getExamSyllabusCid`,
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
      `getExamSyllabusCid failed with status ${response.status}`
    );
  }

  const result =
    await response.json();

  return {
    status:
      Boolean(
        result?.status
      ),

    filePath:
      String(
        result?.file_path ??
          ""
      ),

    syllabus:
      Array.isArray(
        result?.data
      )
        ? result.data
        : [],
  };
}
/* =========================================================
   GET PSC NOTIFICATIONS

   Public page:
   uid = 0

   Kerala PSC:
   cid = 1

   Pagination:
   offset = 0, 20, 40...
========================================================= */

export async function getPscNotifications({
  uid = 0,
  cid = 1,
  offset = 0,
} = {}) {
  const {
    apiBaseUrl,
    apiKey,
  } = getApiConfig();

  const formData =
    new FormData();

  formData.append(
    "api",
    apiKey
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
    "offset",
    String(offset)
  );

  const response =
    await fetch(
      `${apiBaseUrl}/getPscNotificationsCid`,
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
      `getPscNotificationsCid failed with status ${response.status}`
    );
  }

  const result =
    await response.json();

  return {
    status: Boolean(
      result?.status
    ),

    nextOffset:
      result?.nextoffset ??
      null,

    filePath:
      String(
        result?.file_path ??
          ""
      ),

    notifications:
      Array.isArray(
        result?.data
      )
        ? result.data
        : [],
  };
}