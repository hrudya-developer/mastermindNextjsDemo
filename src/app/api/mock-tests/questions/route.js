import {
    NextResponse,
  } from "next/server";
  
  const API_URL =
    "http://psc.technocitysolutions.com/public/api/getMockTestQuestions";
  
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
  
      const examId =
        searchParams.get(
          "examid"
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
        "examid",
        examId
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
        "Mock questions route error:",
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