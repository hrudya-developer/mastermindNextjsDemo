import {
    NextResponse,
  } from "next/server";
  
  import {
    updateUserExamAttempt,
  } from "@/lib/examAttemptHelper";
  
  export async function POST(
    request
  ) {
    try {
      const body =
        await request.json();
  
      const result =
        await updateUserExamAttempt(
          body
        );
  
      return NextResponse.json(
        result
      );
    } catch (error) {
      console.error(
        "update exam attempt:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          message:
            "Unable to update exam attempt",
        },
        {
          status: 500,
        }
      );
    }
  }