import React from "react";

const Whyus = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center gap-52">
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                src="/Bhavya.jpg"
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              />
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="text-4xl">Bhavya</div>
            </div>
          </div>
        </div>
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                src="/chadboys.jpg"
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              />
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="text-4xl">Chad Boys with Bhavya Alisha </div>
            </div>
          </div>
        </div>
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                src="/Alisha.jpg"
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              />
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="text-4xl">Alisha</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
