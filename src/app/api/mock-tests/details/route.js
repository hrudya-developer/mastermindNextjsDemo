import { NextResponse } from "next/server";

const API_URL =
  "http://psc.technocitysolutions.com/public/api/getMockTestDetails";

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const cid =
      searchParams.get("cid") || "1";

    const uid =
      searchParams.get("uid") || "21";

    const examId =
      searchParams.get("examid");

    if (!examId) {
      return NextResponse.json(
        {
          status: false,
          message:
            "examid is required.",
          exam: [],
          data: [],
        },
        {
          status: 400,
        }
      );
    }

    const apiKey =
      process.env.PSC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          status: false,
          message:
            "PSC_API_KEY is missing.",
          exam: [],
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

    formData.append(
      "cid",
      String(cid)
    );

    formData.append(
      "uid",
      String(uid)
    );

    formData.append(
      "examid",
      String(examId)
    );

    formData.append(
      "type",
      "mock"
    );

    const response =
      await fetch(
        API_URL,
        {
          method: "POST",
          body: formData,
          cache: "no-store",
        }
      );

    const text =
      await response.text();

    let result = null;

    try {
      result =
        text
          ? JSON.parse(text)
          : null;
    } catch (error) {
      console.error(
        "Mock details invalid JSON:",
        text
      );

      return NextResponse.json(
        {
          status: false,
          message:
            "Mock test API returned invalid data.",
          exam: [],
          data: [],
        },
        {
          status: 502,
        }
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          status: false,
          message:
            result?.message ||
            "Unable to fetch mock test details.",
          exam: [],
          data: [],
        },
        {
          status:
            response.status,
        }
      );
    }

    return NextResponse.json(
      result || {
        status: false,
        exam: [],
        data: [],
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Mock test details route error:",
      error
    );

    return NextResponse.json(
      {
        status: false,
        message:
          "Failed to load mock test details.",
        exam: [],
        data: [],
      },
      {
        status: 500,
      }
    );
  }
}