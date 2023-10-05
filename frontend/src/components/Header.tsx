import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SigninButton from "./uncommon/Signinbutton";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="body-font text-black">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a className="title-font mb-4 flex items-center border-4 border-black bg-emerald-300 font-medium text-white md:mb-0">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <span className="ml-3 pr-3 text-xl text-white">ScriptScanner</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-lg font-medium text-gray-500 md:ml-auto md:mr-auto">
            <a className="mx-8">Home</a>
            <a className="mx-8">Product</a>
            <a className="mx-8">FAQ</a>
            <a className="mx-8">About Us</a>
          </nav>
          <SigninButton />
        </div>
      </header>
    </>
  );
};

export default Header;
