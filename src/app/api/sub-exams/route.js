import {
  NextResponse,
} from "next/server";

import {
  getSubExams,
} from "@/lib/pscApi";

export async function GET(
  request
) {
  try {
    const {
      searchParams,
    } =
      new URL(
        request.url
      );

    const cid =
      searchParams.get(
        "cid"
      );

    const subId =
      searchParams.get(
        "subId"
      );

    const uid =
      searchParams.get(
        "uid"
      ) ?? "0";

    if (!cid) {
      return NextResponse.json(
        {
          status: false,
          icon_path: "",
          data: [],
          message:
            "Course ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!subId) {
      return NextResponse.json(
        {
          status: false,
          icon_path: "",
          data: [],
          message:
            "Sub category ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result =
      await getSubExams({
        cid,
        uid,
        subId,
      });

    return NextResponse.json({
      status:
        result.status,

      icon_path:
        result.iconPath,

      data:
        result.exams,
    });
  } catch (error) {
    console.error(
      "Sub exams API error:",
      error
    );

    return NextResponse.json(
      {
        status: false,
        icon_path: "",
        data: [],
        message:
          "Unable to fetch exams.",
      },
      {
        status: 500,
      }
    );
  }
}