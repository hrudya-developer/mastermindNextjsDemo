import {
    NextResponse,
  } from "next/server";
  
  const API_URL =
    "http://psc.technocitysolutions.com/public/api/getMockTestListbyOffset";
  
  export async function GET(request) {
    try {
      const { searchParams } =
        new URL(request.url);
  
      const cid =
        searchParams.get("cid") ||
        "1";
  
      const uid =
        searchParams.get("uid") ||
        "21";
  
      const offset =
        searchParams.get(
          "offset"
        ) || "0";
  
      const filter =
        searchParams.get(
          "filter"
        ) || "0";
  
      const apiKey =
        process.env.PSC_API_KEY;
  
      const formData =
        new FormData();
  
      formData.append(
        "api",
        apiKey
      );
  
      formData.append(
        "cid",
        cid
      );
  
      formData.append(
        "uid",
        uid
      );
  
      formData.append(
        "offset",
        offset
      );
  
      formData.append(
        "filter",
        filter
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
        "Mock test list route error:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          message:
            "Failed to load mock tests.",
          data: [],
        },
        {
          status: 500,
        }
      );
    }
  }