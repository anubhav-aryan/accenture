import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="body-font text-black">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-black sm:text-4xl">
              We make PDF easy.
            </h1>
            <p className="mb-8 leading-relaxed">
              All the tools you&apos;ll need to be more productive and work
              smarter with documents.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex border-0 bg-[#54BD95] px-6 py-2 text-lg text-white rounded-3xl focus:outline-none">
                Start
              </button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              src="/The Little Things Working.svg"
              width={720}
              height={600}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
