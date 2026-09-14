import {
    NextResponse,
  } from "next/server";
  
  import {
    getExamSyllabus,
  } from "@/lib/pscApi";
  
  export async function GET(
    request
  ) {
    try {
      const {
        searchParams,
      } =
        new URL(
          request.url
        );
  
      const cid =
        searchParams.get(
          "cid"
        ) ?? "1";
  
      const uid =
        searchParams.get(
          "uid"
        ) ?? "0";
  
      const result =
        await getExamSyllabus({
          cid,
          uid,
        });
  
      return NextResponse.json({
        status:
          result.status,
  
        file_path:
          result.filePath,
  
        data:
          result.syllabus,
      });
    } catch (error) {
      console.error(
        "Exam syllabus API error:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          file_path: "",
          data: [],
          message:
            "Unable to fetch exam syllabus.",
        },
        {
          status: 500,
        }
      );
    }
  }