import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Provider from "@/components/Provider";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </main>
  );
};

export default MyApp;
