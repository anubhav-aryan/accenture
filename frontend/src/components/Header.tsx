import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import SigninButton from './uncommon/Signinbutton'

const Header = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
    <SigninButton />
  </header>
  )
}

export default Header