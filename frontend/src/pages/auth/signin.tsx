import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import Header from "@/components/common/Header";


function signin({ getProviders }) {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-emerald-300">
        <div className="bg-white p-20 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-4xl mb-4 text-center">Sign In</h1>
          {Object.values(getProviders).map((provider) => {
            return (
              <div key={provider.name} className="mb-4">
                <button
                  onClick={() => signIn(provider.id)}
                  className="text-xl bg-emerald-500 m-2 hover:bg-emerald-400 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      getProviders: await getProviders(context),
      getCsrfToken: await getCsrfToken(context),
    },
  };
}
