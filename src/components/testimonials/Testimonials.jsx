"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    img: "/assets/avatar1.png",
    text: "The classes are very helpful and the teachers explain everything clearly.",
    name: "Student Name",
  },
  {
    id: 2,
    img: "/assets/avatar1.png",
    text: "The classes are very helpful and the teachers explain everything clearly.",
    name: "Student Name",
  },
  {
    id: 3,
    img: "/assets/avatar1.png",
    text: "The classes are very helpful and the teachers explain everything clearly.",
    name: "Student Name",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" data-aos="fade-up">
      <div className="absolute inset-0 bg-linear-to-b from-white via-indigo-50/40 to-blue-50/60" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-linear(circle, rgb(79 70 229) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />

            <span className="text-sm font-semibold text-indigo-700">
              Student Stories
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Hear from students who are learning, growing, and preparing with
            confidence through our classes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)]"
            >
              <span className="absolute right-6 top-3 font-serif text-7xl leading-none text-indigo-100 transition-colors group-hover:text-indigo-200">
                “
              </span>

              <div className="relative z-10 mb-5">
                <div className="mx-auto w-fit rounded-full bg-linear-to-br from-blue-500 via-indigo-500 to-violet-500 p-[3px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full border-2 border-white object-cover"
                  />
                </div>
              </div>

              <div className="mb-4 flex justify-center gap-1 text-amber-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="relative z-10 text-center text-sm leading-7 text-slate-600 sm:text-base">
                “{item.text}”
              </p>

              <div className="mx-auto my-6 h-px w-16 bg-linear-to-r from-transparent via-indigo-300 to-transparent" />

              <div className="text-center">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-indigo-600">
                  Student
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;