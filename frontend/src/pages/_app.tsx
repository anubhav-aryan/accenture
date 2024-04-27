import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Provider from "@/components/Provider";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const queryClient = new QueryClient();

  return (
    <main>
      <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </main>
  );
};

export default MyApp;
