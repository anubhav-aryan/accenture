import React from 'react';
import Image from 'next/image';

const Tools = () => {
  return (
    <>
     <h1 className="text-left px-4 md:px-12 md:mx-12 text-2xl md:text-3xl font-bold font-['Inter'] py-12">ScriptScanner Tools</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 md:px-8 lg:px-12 lg:mx-12">
      {/* Tool 1 */}
      <div className="relative bg-emerald-400 rounded-lg bg-opacity-10 border border-zinc-400 py-8 px-4 md:px-8 justify-start items-center gap-6 inline-flex">
        <Image src="/ICON 1.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Read Text</p>
      </div>

      {/* Tool 2 */}
      <div className="relative bg-emerald-400 bg-opacity-20 rounded-lg border border-zinc-400 py-8 px-4 md:px-8 justify-start items-center gap-6 inline-flex">
        <Image src="/ICON 2.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Edit with Prompt</p>
      </div>

      {/* Tool 3 */}
      <div className="relative bg-emerald-400 bg-opacity-30 rounded-lg border border-zinc-400 py-8 px-2 md:px-8 justify-start items-center gap-6 inline-flex">
        <Image src="/ICON 3.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Enhance Image</p>
      </div>

      {/* Tool 4 */}
      <div className="relative bg-emerald-400 bg-opacity-40 rounded-lg border border-zinc-400  py-8 px-2 md:px-8 justify-start items-center gap-5 inline-flex">
        <Image src="/ICON 4.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Modify Theme</p>
      </div>

      {/* Tool 5 */}
      <div className="relative bg-emerald-400 bg-opacity-50 rounded-lg border border-zinc-400 py-8 px-2 md:px-8 justify-start items-center gap-6 inline-flex">
        <Image src="/ICON 1.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Edit Text</p>
      </div>

      {/* Tool 6 */}
      <div className="relative bg-emerald-400 bg-opacity-60 rounded-lg border border-zinc-400 py-8 px-2 md:px-8 justify-start items-center gap-6 inline-flex">
        <Image src="/ICON 2.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Edit Watermark</p>
      </div>

      {/* Tool 7 */}
      <div className="relative bg-emerald-400 bg-opacity-70 rounded-lg border border-zinc-400 py-8 px-2 md:px-8 justify-start items-center gap-3.5 inline-flex">
        <Image src="/ICON 3.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Read Text</p>
      </div>

      {/* Tool 8 */}
      <div className="relative bg-emerald-400 bg-opacity-80 rounded-lg border border-zinc-400 py-8 px-2 md:px-8 justify-start items-center gap-3.5 inline-flex">
        <Image src="/ICON 4.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Read Text</p>
      </div>

      {/* Tool 9 */}
      <div className="relative bg-emerald-400 bg-opacity-90 rounded-lg border border-zinc-400 py-8 px-2 md:px-8 justify-start items-center gap-4 inline-flex">
        <Image src="/ICON 1.svg" alt="logo" width={50} height={50} />
         <p className="text-lg font-bold">Feedback</p>
      </div>
    </div>
    </>
  );
};

export default Tools;