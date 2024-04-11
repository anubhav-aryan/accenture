import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="ml-auto flex gap-4">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={async () => await signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="ml-auto rounded-xl bg-emerald-400 hover:bg-emerald-300 px-3 py-1 text-xl text-white"
    >
      Sign Up
    </button>
  );
};

export default SigninButton;
