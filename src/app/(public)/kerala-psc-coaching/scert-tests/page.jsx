import {
    getScertFolders,
  } from "@/lib/scertHelper";
  
  import ScertHero from "./components/ScertHero";
  import ScertFolders from "./components/ScertFolders";
  
  export const metadata = {
    title:
      "Kerala PSC SCERT Tests | MasterMind Academy",
  
    description:
      "Practice class-wise SCERT tests for Kerala PSC preparation.",
  };
  
  export default async function ScertTestsPage() {
    const result =
      await getScertFolders({
        uid: 0,
        cid: 1,
        offset: 0,
      });
  
    const folders =
      Array.isArray(
        result?.data
      )
        ? result.data
        : [];
  
    return (
      <main className="min-h-screen bg-[#f5f9ff]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1450px]
            px-4
            py-6
            sm:px-6
            lg:px-8
            lg:py-8
          "
        >
          <ScertHero />
  
          <ScertFolders
            folders={folders}
          />
        </div>
      </main>
    );
  }