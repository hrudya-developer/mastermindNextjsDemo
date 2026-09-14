import {
    NextResponse,
  } from "next/server";
  
  import {
    getPscNotifications,
  } from "@/lib/pscApi";
  
  export async function GET(
    request
  ) {
    try {
      const {
        searchParams,
      } = new URL(
        request.url
      );
  
      const cid =
        searchParams.get(
          "cid"
        ) || "1";
  
      const offset =
        searchParams.get(
          "offset"
        ) || "0";
  
      const result =
        await getPscNotifications({
          uid: 0,
          cid,
          offset,
        });
  
      return NextResponse.json(
        {
          status:
            result.status,
  
          nextoffset:
            result.nextOffset,
  
          file_path:
            result.filePath,
  
          data:
            result.notifications,
        }
      );
    } catch (error) {
      console.error(
        "PSC notifications API error:",
        error
      );
  
      return NextResponse.json(
        {
          status: false,
          message:
            "Unable to load PSC notifications.",
          nextoffset: null,
          file_path: "",
          data: [],
        },
        {
          status: 500,
        }
      );
    }
  }