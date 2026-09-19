import {
  LoaderCircle,
  PauseCircle,
} from "lucide-react";

export default function ScertPauseModal({
  open,
  saving,
  onClose,
  onConfirm,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-slate-950/55
        p-4
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-[24px]
          bg-white
          p-6
          shadow-2xl
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-amber-50
            text-amber-600
          "
        >
          <PauseCircle
            size={24}
          />
        </div>

        <h2
          className="
            mt-5
            text-xl
            font-black
            text-[#071f55]
          "
        >
          Pause this exam?
        </h2>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-slate-500
          "
        >
          Your current answers and
          remaining time will be saved.
          You can resume the exam later.
        </p>

        <div
          className="
            mt-6
            flex
            gap-3
          "
        >
          <button
            type="button"
            disabled={
              saving
            }
            onClick={
              onClose
            }
            className="
              flex-1
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              text-sm
              font-bold
              text-slate-600
            "
          >
            Continue Exam
          </button>

          <button
            type="button"
            disabled={
              saving
            }
            onClick={
              onConfirm
            }
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-amber-500
              px-4
              py-3
              text-sm
              font-bold
              text-white
              disabled:opacity-50
            "
          >
            {saving && (
              <LoaderCircle
                size={17}
                className="animate-spin"
              />
            )}

            Pause & Exit
          </button>
        </div>
      </div>
    </div>
  );
}