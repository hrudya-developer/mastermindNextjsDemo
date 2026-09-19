import {
  Flag,
  LoaderCircle,
  Pause,
} from "lucide-react";

export default function ScertExamActions({
  saving = false,
  submitted = false,
  onPause,
  onFinish,
}) {
  return (
    <div
      className="
        mt-8
        flex
        flex-col
        gap-3
        border-t
        border-slate-100
        pt-6
        sm:flex-row
        sm:justify-end
      "
    >
      <button
        type="button"
        disabled={
          saving ||
          submitted
        }
        onClick={
          onPause
        }
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-amber-200
          bg-amber-50
          px-6
          py-3.5
          text-sm
          font-bold
          text-amber-700
          transition
          hover:bg-amber-100
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <Pause
          size={17}
        />

        Pause & Exit
      </button>

      <button
        type="button"
        disabled={
          saving ||
          submitted
        }
        onClick={
          onFinish
        }
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-[#071f55]
          via-[#075fc8]
          to-[#017dc0]
          px-6
          py-3.5
          text-sm
          font-bold
          text-white
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {saving ? (
          <LoaderCircle
            size={17}
            className="animate-spin"
          />
        ) : (
          <Flag
            size={17}
          />
        )}

        Finish Exam
      </button>
    </div>
  );
}