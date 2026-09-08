import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiBaseUrl =
      process.env.PSC_API_BASE_URL;

    const apiKey =
      process.env.PSC_API_KEY;

    if (!apiBaseUrl || !apiKey) {
      return NextResponse.json(
        {
          status: false,
          message:
            "PSC API configuration is missing.",
        },
        {
          status: 500,
        }
      );
    }

    const url =
      `${apiBaseUrl}/getCourses?api=${encodeURIComponent(
        apiKey
      )}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `PSC API failed with status ${response.status}`
      );
    }

    const result =
      await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error(
      "Main courses API error:",
      error
    );

    return NextResponse.json(
      {
        status: false,
        file_path: "",
        data: [],
        message:
          "Unable to fetch main courses.",
      },
      {
        status: 500,
      }
    );
  }
}