import {
    NextResponse,
  } from "next/server";
  
  const API_URL =
    "http://psc.technocitysolutions.com/public/api/getCurrentAffairQuizList";
  
  export async function GET(request) {
    try {
      const { searchParams } =
        new URL(request.url);
  
      const cid =
        searchParams.get("cid") ||
        "60";
  
      const uid =
        searchParams.get("uid") ||
        "21";
  
      const apiKey =
        process.env.PSC_API_KEY;
  
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
  
      formData.append(
        "cid",
        String(cid)
      );
  
      formData.append(
        "uid",
        String(uid)
      );
  
      const response =
        await fetch(API_URL, {
          method: "POST",
          body: formData,
          cache: "no-store",
        });
  
      const result =
        await response.json();
  
      console.log(
        "getCurrentAffairQuizList result:",
        result
      );
  
      if (!response.ok) {
        return NextResponse.json(
          {
            status: false,
            message:
              result?.message ||
              "Unable to fetch quizzes.",
            data: [],
          },
          {
            status:
              response.status,
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
        "Current Affairs quiz list route error:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          message:
            "Failed to load Current Affairs quizzes.",
          data: [],
        },
        {
          status: 500,
        }
      );
    }
  }