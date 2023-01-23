import getSession from "@/server/utils/getSession";
import SignInButton from "./components/signInButton";

export default async function Home() {
  const session = await getSession();
  console.log("session :>> ", session);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <p>SIGN IN BELOW</p>

      <SignInButton />
    </div>
  );
}
