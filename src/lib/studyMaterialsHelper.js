// src/lib/studyMaterialsHelper.js

const STUDY_MATERIALS_API =
  "http://psc.technocitysolutions.com/public/api/getPDFfiles";

export async function getStudyMaterials({
  uid = 0,
  cid = 1,
} = {}) {
  try {
    const apiKey =
      process.env.PSC_API_KEY;

    if (!apiKey) {
      throw new Error(
        "PSC_API_KEY is missing"
      );
    }

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

    console.log(
      "STUDY MATERIAL REQUEST:",
      {
        endpoint:
          STUDY_MATERIALS_API,
        uid,
        cid,
      }
    );

    const response =
      await fetch(
        STUDY_MATERIALS_API,
        {
          method: "POST",
          body: formData,
          cache: "no-store",
        }
      );

    const text =
      await response.text();

    console.log(
      "STUDY MATERIAL STATUS:",
      response.status
    );

    console.log(
      "STUDY MATERIAL RESPONSE:",
      text
    );

    if (!response.ok) {
      throw new Error(
        `getPDFFiles failed with ${response.status}`
      );
    }

    const result =
      JSON.parse(text);

    const filePath =
      result?.file_path || "";

    const data =
      Array.isArray(result?.data)
        ? result.data
        : [];

    const materials =
      data
        .filter(
          (item) =>
            String(
              item?.status
            ) === "1"
        )
        .map((item) => {
          const basePath =
            String(
              filePath
            ).replace(
              /\/+$/,
              ""
            );

          const pdfPath =
            String(
              item?.pdf_path ||
                ""
            ).replace(
              /^\/+/,
              ""
            );

          return {
            ...item,

            pdfUrl:
              basePath &&
              pdfPath
                ? `${basePath}/${pdfPath}`
                : null,
          };
        });

    return {
      status:
        Boolean(
          result?.status
        ),

      filePath,

      data:
        materials,

      total:
        materials.length,

      message: "",
    };
  } catch (error) {
    console.error(
      "getStudyMaterials Error:",
      error
    );

    return {
      status: false,
      filePath: "",
      data: [],
      total: 0,

      message:
        error?.message ||
        "Unable to load study materials",
    };
  }
}