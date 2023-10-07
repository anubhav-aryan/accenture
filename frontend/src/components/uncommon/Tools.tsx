import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tools = () => {
  return (
    <>
      <h1 className="px-4 py-12 text-left font-['Inter'] text-2xl font-bold md:mx-12 md:px-12 md:text-3xl">
        ScriptScanner Tools
      </h1>
      <div className="grid grid-cols-1 gap-3 px-4 md:grid-cols-3 md:px-8 lg:mx-12 lg:px-12">
        {/* Tool 1 - Read Text */}
        <Link href="/read-text">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-10 px-4 py-8 md:px-8">
            <Image src="/ICON 1.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Read Text</p>
          </div>
        </Link>

        {/* Tool 2 - Edit with Prompt */}
        <Link href="/edit-with-prompt">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-20 px-4 py-8 md:px-8">
            <Image src="/ICON 2.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Edit with Prompt</p>
          </div>
        </Link>

        {/* Tool 3 - Enhance Image */}
        <Link href="/enhance-image">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-30 px-4 py-8 md:px-8">
            <Image src="/ICON 3.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Enhance Image</p>
          </div>
        </Link>

        {/* Tool 4 - Modify Theme */}
        <Link href="/modify-theme">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-40 px-4 py-8 md:px-8">
            <Image src="/ICON 4.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Modify Theme</p>
          </div>
        </Link>

        {/* Tool 5 - Edit Text */}
        <Link href="/edit-text">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-50 px-4 py-8 md:px-8">
            <Image src="/ICON 1.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Edit Text</p>
          </div>
        </Link>

        {/* Tool 6 - Edit Watermark */}
        <Link href="/edit-watermark">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-60 px-4 py-8 md:px-8">
            <Image src="/ICON 2.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Edit Watermark</p>
          </div>
        </Link>

        {/* Tool 7 - Read Text */}
        <Link href="/read-text">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-70 px-4 py-8 md:px-8">
            <Image src="/ICON 3.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Read Text</p>
          </div>
        </Link>

        {/* Tool 8 - Read Text */}
        <Link href="/read-text">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-80 px-4 py-8 md:px-8">
            <Image src="/ICON 4.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Read Text</p>
          </div>
        </Link>

        {/* Tool 9 - Feedback */}
        <Link href="/feedback">
          <div className="relative items-center justify-start gap-6 rounded-lg border border-zinc-400 bg-emerald-400 bg-opacity-90 px-4 py-8 md:px-8">
            <Image src="/ICON 1.svg" alt="logo" width={50} height={50} />
            <p className="text-lg font-bold">Feedback</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Tools;
