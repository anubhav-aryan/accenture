import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SigninButton from "../uncommon/Signinbutton";
import Image from "next/image";

const Header = () => {
  return (
    <div className="body-font text-black border-b-4">
      <div className="mx-auto flex flex-row items-center justify-between p-2 md:flex-row">
        <div className="title-font mb-4 flex items-center border-4 border-black bg-emerald-300 font-medium text-white md:mb-0">
          <div>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </div>
          <div className="ml-3 pr-3 text-2xl text-white py-3">ScriptScanner</div>
        </div>
        <div className="flex-grow"></div>{" "}
        <div className="flex items-end justify-end px-6 text-xl font-medium text-gray-700 ">
          <div className="px-8 hover:text-gray-500">Home</div>
          <div className="px-8 hover:text-gray-500">Product</div>
          <div className="px-8 hover:text-gray-500">FAQ</div>
          <div className="px-8 hover:text-gray-500">About Us</div>
        </div>
        <div>
          <SigninButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
