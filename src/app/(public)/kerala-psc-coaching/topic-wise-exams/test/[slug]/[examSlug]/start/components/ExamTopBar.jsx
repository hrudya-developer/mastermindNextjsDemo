import Link from "next/link";

import {
  ArrowLeft,
} from "lucide-react";

export default function ExamTopBar({
  slug,
  examSlug,
}) {
  return (
    <div className="mb-5">
      <Link
        href={
          `/kerala-psc-coaching/topic-wise-exams/test/${slug}/${examSlug}`
        }
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-bold
          text-[#075fc8]
          transition-colors
          hover:text-[#071f55]
        "
      >
        <ArrowLeft size={16} />

        Back to Instructions
      </Link>
    </div>
  );
}