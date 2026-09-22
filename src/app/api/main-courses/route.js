import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiBaseUrl =
      process.env.PSC_API_BASE_URL;

    const apiKey =
      process.env.PSC_API_KEY;

    if (!apiBaseUrl || !apiKey) {
      console.error(
        "PSC API configuration is missing."
      );

      return NextResponse.json(
        {
          status: false,
          file_path: "",
          data: [],
          message:
            "PSC API configuration is missing.",
        },
        {
          status: 500,
        }
      );
    }

    const baseUrl =
      apiBaseUrl.replace(
        /\/+$/,
        ""
      );

    const formData =
      new FormData();

    formData.append(
      "api",
      apiKey
    );

    formData.append(
      "cid",
      "1"
    );

    formData.append(
      "uid",
      "0"
    );

    const response =
      await fetch(
        `${baseUrl}/getCourses`,
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
      result = text
        ? JSON.parse(text)
        : null;
    } catch (error) {
      console.error(
        "getCourses returned invalid JSON:",
        text
      );

      return NextResponse.json(
        {
          status: false,
          file_path: "",
          data: [],
          message:
            "PSC getCourses API returned invalid JSON.",
        },
        {
          status: 502,
        }
      );
    }

    if (!response.ok) {
      console.error(
        "getCourses upstream error:",
        {
          status:
            response.status,
          result,
        }
      );

      return NextResponse.json(
        {
          status: false,
          file_path: "",
          data: [],
          message:
            result?.message ||
            `PSC API failed with status ${response.status}`,
        },
        {
          status:
            response.status,
        }
      );
    }

    return NextResponse.json(
      {
        status:
          result?.status ??
          true,

        file_path:
          result?.file_path ||
          result?.icon_path ||
          "",

        data:
          Array.isArray(
            result?.data
          )
            ? result.data
            : [],

        message:
          result?.message ||
          "",
      },
      {
        status: 200,
      }
    );
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
          error?.message ||
          "Unable to fetch main courses.",
      },
      {
        status: 500,
      }
    );
  }
}