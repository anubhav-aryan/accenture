import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Provider from "@/components/Provider";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main>
      <ClerkProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ClerkProvider>
    </main>
  );
};

export default MyApp;
