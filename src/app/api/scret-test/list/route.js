import {
    NextResponse,
  } from "next/server";
  
  import {
    getScertTestsByFolder,
  } from "@/lib/scertHelper";
  
  export async function GET(
    request
  ) {
    try {
      const {
        searchParams,
      } = new URL(
        request.url
      );
  
      const uid =
        searchParams.get(
          "uid"
        ) || "0";
  
      const cid =
        searchParams.get(
          "cid"
        ) || "1";
  
      const folderId =
        searchParams.get(
          "folderId"
        );
  
      const offset =
        searchParams.get(
          "offset"
        ) || "10";
  
      if (!folderId) {
        return NextResponse.json(
          {
            status: false,
            data: [],
            nextOffset: null,
            message:
              "SCERT folder id is required.",
          },
          {
            status: 400,
          }
        );
      }
  
      const result =
        await getScertTestsByFolder({
          uid,
          cid,
          folderId,
          offset,
        });
  
      return NextResponse.json(
        result
      );
    } catch (error) {
      console.error(
        "SCERT list API:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          data: [],
          nextOffset: null,
          message:
            "Unable to load SCERT tests.",
        },
        {
          status: 500,
        }
      );
    }
  }