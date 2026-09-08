import {
  NextResponse,
} from "next/server";

import {
  getSubCategories,
} from "@/lib/pscApi";

export async function GET(request) {
  try {
    const {
      searchParams,
    } = new URL(request.url);

    const cid =
      searchParams.get("cid");

    const uid =
      searchParams.get("uid") ??
      "0";

    if (!cid) {
      return NextResponse.json(
        {
          status: false,
          file_path: "",
          data: [],
          message:
            "Course ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result =
      await getSubCategories({
        cid,
        uid,
      });

    return NextResponse.json({
      status:
        result.status,

      file_path:
        result.filePath,

      data:
        result.categories,
    });
  } catch (error) {
    console.error(
      "Exam category API error:",
      error
    );

    return NextResponse.json(
      {
        status: false,
        file_path: "",
        data: [],
        message:
          "Unable to fetch exam categories.",
      },
      {
        status: 500,
      }
    );
  }
}