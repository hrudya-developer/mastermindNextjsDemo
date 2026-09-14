import { NextResponse } from "next/server";

const API_BASE_URL =
  "http://psc.technocitysolutions.com/public/api";

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const cid =
      searchParams.get("cid") || "1";

    const uid =
      searchParams.get("uid") || "21";

    const offset =
      searchParams.get("offset") || "0";

    const formData =
      new FormData();

    formData.append(
      "api",
      process.env.PSC_API_KEY
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
      "offset",
      String(offset)
    );

    const response = await fetch(
      `${API_BASE_URL}/getCurrentAffairMonthsCid`,
      {
        method: "POST",
        body: formData,
        cache: "no-store",
      }
    );

    const result =
      await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            result?.message ||
            "Unable to load current affairs months.",
        },
        {
          status: response.status,
        }
      );
    }

    return NextResponse.json(
      result,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Current affairs months API error:",
      error
    );

    return NextResponse.json(
      {
        status: false,
        data: [],
        message:
          "Failed to load current affairs months.",
      },
      {
        status: 500,
      }
    );
  }
}