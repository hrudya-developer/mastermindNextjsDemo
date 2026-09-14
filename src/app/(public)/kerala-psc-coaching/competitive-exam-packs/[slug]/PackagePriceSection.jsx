import {
  CalendarDays,
  Clock3,
  IndianRupee,
  Percent,
  ReceiptText,
  Sparkles,
  WalletCards,
} from "lucide-react";

import PriceInfo from "./PriceInfo";

export default function PackagePriceSection({
  prices = [],
}) {
  if (!prices.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        mt-8
        overflow-hidden
        rounded-[28px]
        border
        border-[#dbe8f4]
        bg-gradient-to-br
        from-white
        via-[#fbfdff]
        to-[#f4f9ff]
        p-6
        shadow-[0_18px_50px_rgba(15,58,110,0.08)]
        sm:p-8
      "
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-[#164fa5]/10
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-1/3
          h-64
          w-64
          rounded-full
          bg-[#f13873]/10
          blur-[90px]
        "
      />

      {/* subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#164fa5_1px,transparent_1px),linear-gradient(90deg,#164fa5_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-[16px]
                bg-gradient-to-br
                from-[#164fa5]
                to-[#0c8bc3]
                text-white
                shadow-[0_10px_25px_rgba(22,79,165,0.25)]
              "
            >
              <WalletCards className="h-6 w-6" />
            </div>

            <div>
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.14em]
                  text-[#f13873]
                "
              >
                Pricing
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-black
                  tracking-[-0.03em]
                  text-[#0b216c]
                "
              >
                Price Details
              </h2>
            </div>
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#f13873]/15
              bg-[#fff0f5]
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-[#d92f67]
              sm:inline-flex
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Best Value
          </div>
        </div>

        {/* Price cards */}
        <div className="mt-7 grid gap-5">
          {prices.map((price, index) => {
            const actualPrice =
              Number(price?.price || 0);

            const oldPrice =
              Number(price?.strikedPrice || 0);

            const saving =
              oldPrice > actualPrice
                ? oldPrice - actualPrice
                : 0;

            return (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#dce8f4]
                  bg-white
                  p-5
                  shadow-[0_12px_30px_rgba(15,58,110,0.06)]
                  sm:p-6
                "
              >
                {/* top accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[4px]
                    bg-gradient-to-r
                    from-[#164fa5]
                    via-[#00b5e8]
                    to-[#f13873]
                  "
                />

                {/* price row */}
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7a8ba4]
                      "
                    >
                      Package Price
                    </p>

                    <div
                      className="
                        mt-2
                        flex
                        flex-wrap
                        items-end
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          text-[36px]
                          font-black
                          leading-none
                          tracking-[-0.04em]
                          text-[#0b216c]
                        "
                      >
                        <IndianRupee className="h-7 w-7" />
                        {price.price}
                      </div>

                      {price.strikedPrice && (
                        <span
                          className="
                            pb-1
                            text-[15px]
                            font-semibold
                            text-slate-400
                            line-through
                          "
                        >
                          ₹{price.strikedPrice}
                        </span>
                      )}
                    </div>

                    {saving > 0 && (
                      <div
                        className="
                          mt-3
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#ecfbf3]
                          px-3
                          py-1.5
                          text-[11px]
                          font-bold
                          text-[#16824f]
                        "
                      >
                        Save ₹{saving}
                      </div>
                    )}
                  </div>

                  {/* pink highlight */}
                  <div
                    className="
                      rounded-[18px]
                      border
                      border-[#f13873]/15
                      bg-gradient-to-br
                      from-[#fff5f8]
                      to-[#fff]
                      px-5
                      py-4
                      lg:min-w-[190px]
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#d92f67]
                      "
                    >
                      Final Payable
                    </p>

                    <p
                      className="
                        mt-1
                        text-2xl
                        font-black
                        text-[#0b216c]
                      "
                    >
                      ₹
                      {price.finalPrice ||
                        price.price}
                    </p>
                  </div>
                </div>

                {/* details */}
                <div
                  className="
                    mt-6
                    grid
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-5
                  "
                >
                  <PriceInfo
                    label="Subtotal"
                    value={
                      price.subtotal
                        ? `₹${price.subtotal}`
                        : "-"
                    }
                    icon={
                      <ReceiptText className="h-5 w-5" />
                    }
                    tone="blue"
                  />

                  <PriceInfo
                    label="GST"
                    value={`${price.gst || "0"}%`}
                    icon={
                      <Percent className="h-5 w-5" />
                    }
                    tone="pink"
                  />

                  <PriceInfo
                    label="Final Price"
                    value={
                      price.finalPrice
                        ? `₹${price.finalPrice}`
                        : "-"
                    }
                    icon={
                      <IndianRupee className="h-5 w-5" />
                    }
                    tone="cyan"
                  />

                  <PriceInfo
                    label="Validity"
                    value={
                      price.validity || "-"
                    }
                    icon={
                      <CalendarDays className="h-5 w-5" />
                    }
                    tone="violet"
                  />

                  <PriceInfo
                    label="Duration"
                    value={
                      price.days
                        ? `${price.days} Days`
                        : "-"
                    }
                    icon={
                      <Clock3 className="h-5 w-5" />
                    }
                    tone="green"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}