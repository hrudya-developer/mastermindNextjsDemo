import {
    NextResponse,
  } from "next/server";
  
  import {
    createUserExamAttempt,
  } from "@/lib/examAttemptHelper";
  
  export async function POST(
    request
  ) {
    try {
      const body =
        await request.json();
  
      const result =
        await createUserExamAttempt(
          body
        );
  
      return NextResponse.json(
        result
      );
    } catch (error) {
      console.error(
        "create exam attempt:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          message:
            "Unable to create exam attempt",
        },
        {
          status: 500,
        }
      );
    }
  }