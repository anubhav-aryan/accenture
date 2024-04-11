import React from "react";

const Footer = () => {
  return (
    <footer className="bg-opacity-75">
      <div className="container mx-auto flex flex-col px-5 py-4 sm:flex-row">
        <div className="w-full text-center sm:w-1/2 sm:text-left">
          <div className="text-5xl font-semibold text-emerald-500">
            ScriptScanner
          </div>
          <div className="py-4"></div>
          <p className="mt-2 text-sm font-medium text-black">
            Explore our website for advanced image processing and AI solutions.
            We enhance text extraction, image upscaling, intuitive editing, and
            more, making image processing user-centric and versatile.
          </p>
        </div>
        <div className="mt-4 w-full text-center sm:mt-0 sm:w-1/2 sm:pl-20 sm:text-left">
          <div className="mb-3 text-4xl font-semibold tracking-widest text-emerald-500">
            Quick Links
          </div>
          <div className="py-4"></div>
          <div className="mb-3">
            <a className="px-20 font-medium text-black">Home</a>
          </div>
          <div className="mb-3">
            <a className="px-20 font-medium text-black">About Us</a>
          </div>
          <div className="mb-3">
            <a className="px-20 font-medium text-black">Features</a>
          </div>
        </div>
        <div className="mt-4 w-full text-center sm:mt-0 sm:w-1/2 sm:pl-20 sm:text-left">
          <div className="mb-3 text-3xl font-semibold tracking-widest text-emerald-500">
            Contact Us
          </div>
          <div className="py-4"></div>
          <div className="mb-3">
            <a className="font-medium text-black">scriptscanner@gmail.com</a>
          </div>
          <div className="mb-3">
            <a className="font-medium text-black">+91 98765 43210</a>
          </div>
          <div className="mb-3">
            <a className="font-medium text-black">+91 12345 67890</a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-4 text-center text-sm text-black">
        © 2023 Copyright — ScriptScanner
      </div>
    </footer>
  );
};

export default Footer;
