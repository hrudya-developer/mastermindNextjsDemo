import {
    getStudyMaterials,
  } from "@/lib/studyMaterialsHelper";
  
  import StudyMaterialsHero from "./components/StudyMaterialsHero";
  import StudyMaterialsList from "./components/StudyMaterialsList";
  
  export const metadata = {
    title:
      "Kerala PSC Study Materials | MasterMind Academy",
  
    description:
      "Download Kerala PSC study materials and PDF resources from MasterMind Academy.",
  };
  
  export default async function KeralaPscStudyMaterialsPage() {
    /* =====================================================
       COURSE
    ===================================================== */
  
    const uid = 0;
  
    // Kerala PSC
    const cid = 1;
  
    /* =====================================================
       API
    ===================================================== */
  
    const result =
      await getStudyMaterials({
        uid,
        cid,
      });
  
    const materials =
      Array.isArray(
        result?.data
      )
        ? result.data
        : [];
  
    /* =====================================================
       UI
    ===================================================== */
  
    return (
      <main
        className="
          min-h-screen
          bg-[#f7faff]
        "
      >
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
          <StudyMaterialsHero
            total={
              materials.length
            }
            courseName="Kerala PSC"
          />
  
          <StudyMaterialsList
            materials={
              materials
            }
            error={
              result?.status
                ? ""
                : result?.message
            }
          />
        </div>
      </main>
    );
  }