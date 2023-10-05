import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SigninButton from "./uncommon/Signinbutton";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="body-font text-black">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-white md:mb-0 border-black border-4 bg-emerald-300">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <span className="ml-3 text-xl text-black pr-3">ScriptScanner</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">Product</a>
            <a className="mr-5 hover:text-white">FAQ</a>
            <a className="mr-5 hover:text-white">About Us</a>
          </nav>
          <SigninButton />
        </div>
      </header>
    </>
  );
};

export default Header;
