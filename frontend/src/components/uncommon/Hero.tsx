import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="body-font min-h-screen py-40 text-black">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left">
            <h1 className="title-font mb-4 text-5xl font-bold text-black">
              We make Images easy.
            </h1>
            <p className="mb-8 text-2xl font-semibold leading-relaxed">
              All the tools you&apos;ll need to be more productive and work
              smarter with documents.
            </p>
            <Link href="/#tools">
              <div className="container flex items-center justify-center">
                <button className="inline-flex rounded-3xl border-0 bg-[#54BD95] px-10 py-3 text-2xl text-white focus:outline-none">
                  Start
                </button>
              </div>
            </Link>
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