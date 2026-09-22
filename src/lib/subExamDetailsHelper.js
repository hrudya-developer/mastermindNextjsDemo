const API_BASE_URL =
  process.env.PSC_API_BASE_URL;

const API_KEY =
  process.env.PSC_API_KEY;

export async function getSubExamDetails({
  uid = 0,
  cid = 1,
  subExamId,
  type = "mock",
  offset = 0,
} = {}) {
  try {
    if (!subExamId) {
      return {
        status: false,
        data: null,
        items: [],
      };
    }

    const formData =
      new FormData();

    formData.append(
      "api",
      API_KEY
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
      "subexamid",
      String(subExamId)
    );

    formData.append(
      "type",
      String(type)
    );

    formData.append(
      "offset",
      String(offset)
    );

    const response =
      await fetch(
        `${API_BASE_URL}/getSubExamDetailsLatest`,
        {
          method: "POST",

          body: formData,

          cache: "no-store",
        }
      );

    if (!response.ok) {
      throw new Error(
        `API failed: ${response.status}`
      );
    }

    const result =
      await response.json();

    return {
      status:
        result?.status === true,

      data:
        result?.data || null,

      items:
        Array.isArray(
          result?.items
        )
          ? result.items
          : [],

      iconPath:
        result?.icon_path || "",

      subjectPath:
        result?.subject_path || "",

      view:
        result?.view || "",

      viewType:
        result?.viewtype || "",
    };
  } catch (error) {
    console.error(
      "getSubExamDetails error:",
      error
    );

    return {
      status: false,
      data: null,
      items: [],
      iconPath: "",
      subjectPath: "",
    };
  }
}