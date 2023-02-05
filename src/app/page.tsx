import getSession from "@/server/utils/getSession";
import RedirectIfLoggedIn from "./components/redirectIfLoggedIn";
import SignInButton from "./components/signInButton";

export default async function Home() {
  const session = await getSession();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
      <p>SIGN IN BELOW</p>
      <RedirectIfLoggedIn redirect={session?.user !== undefined} />
      <SignInButton />
    </div>
  );
}
