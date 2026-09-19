import {
  NextResponse,
} from "next/server";

const API_URL =
  `${process.env.PSC_API_BASE_URL}/getMockTestQuestions`;

export async function GET(
  request
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const cid =
      searchParams.get(
        "cid"
      );

    const uid =
      searchParams.get(
        "uid"
      );

    const examId =
      searchParams.get(
        "examid"
      );

    const examType =
      searchParams.get(
        "examtype"
      );

    if (!examId) {
      return NextResponse.json(
        {
          status: false,
          message:
            "examid is required.",
          data: [],
        },
        {
          status: 400,
        }
      );
    }

    const apiKey =
      process.env
        .PSC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          status: false,
          message:
            "PSC_API_KEY is missing.",
          data: [],
        },
        {
          status: 500,
        }
      );
    }

    const formData =
      new FormData();

    formData.append(
      "api",
      apiKey
    );

    if (cid != null) {
      formData.append(
        "cid",
        String(cid)
      );
    }

    if (uid != null) {
      formData.append(
        "uid",
        String(uid)
      );
    }

    formData.append(
      "examid",
      String(examId)
    );

    if (examType != null) {
      formData.append(
        "examtype",
        String(examType)
      );
    }

    const response =
      await fetch(
        API_URL,
        {
          method: "POST",
          body: formData,
          cache:
            "no-store",
        }
      );

    const result =
      await response.json();

    return NextResponse.json(
      result,
      {
        status:
          response.ok
            ? 200
            : response.status,
      }
    );
  } catch (error) {
    console.error(
      "Mock questions route:",
      error
    );

    return NextResponse.json(
      {
        status: false,
        message:
          "Failed to load mock test questions.",
        data: [],
      },
      {
        status: 500,
      }
    );
  }
}