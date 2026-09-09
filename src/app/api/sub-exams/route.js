import { NextResponse } from "next/server";

const API_URL =
  "http://psc.technocitysolutions.com/public/api/getHomeResponses";

export async function GET() {
  try {
    const formData = new FormData();

    formData.append(
      "api",
      process.env.PSC_API_KEY
    );
    formData.append("uid", "0");
    formData.append("cid", "1");

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `PSC API returned ${response.status}`
      );
    }

    const result = await response.json();

    const iconBasePath = String(
      result?.subexam_icon_path || ""
    ).replace(/\/+$/, "");

    const source = Array.isArray(
      result?.subexams
    )
      ? result.subexams
      : [];

    const subExams = source
      .filter(
        (exam) =>
          String(exam?.status) === "1"
      )
      .map((exam) => ({
        ...exam,

        imageUrl:
          exam?.icon && iconBasePath
            ? `${iconBasePath}/${exam.icon}`
            : "",
      }));

    return NextResponse.json({
      success: true,
      subExams,
      iconBasePath,
    });
  } catch (error) {
    console.error(
      "Sub exams API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        subExams: [],
        message:
          "Unable to load sub exams.",
      },
      {
        status: 500,
      }
    );
  }
}