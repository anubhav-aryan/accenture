// Header.js
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SigninButton from "../uncommon/Signinbutton";
import Image from "next/image";
import Link from "next/link"

const Header = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const newScrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="mx-auto flex flex-row items-center justify-between p-2 md:flex-row relative">
        <div className="flex items-center space-x-3">
          <div>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </div>
          <div className="text-2xl text-white py-3 font-medium">
            ScriptScanner
          </div>
        </div>
      <div className="flex-grow"></div>
        <div className="flex items-end justify-end space-x-6 text-xl font-medium text-gray-700">
          <Link href="/"> {/* Wrap "Home" with Link */}
            <h2 className="hover:text-gray-500">Home</h2>
          </Link>
          <Link href="#tools"> {/* Wrap "Product" with Link */}
            <h2 className="hover:text-gray-500">Tools</h2>
          </Link>
          <Link href="/faq"> {/* Wrap "FAQ" with Link */}
            <h2 className="hover:text-gray-500">FAQ</h2>
          </Link>
          <Link href="/about"> {/* Wrap "About Us" with Link */}
            <h2 className="hover:text-gray-500">About Us</h2>
          </Link>
        </div>
        <div className="ml-2">
          <SigninButton />
        </div>
      </div>
      <div
        className="bg-emerald-300 h-1 absolute bottom-0 left-0 right-0"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default Header;

