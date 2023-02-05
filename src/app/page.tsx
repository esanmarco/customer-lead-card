import SignInButton from "./components/signInButton";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
      <p>SIGN IN BELOW</p>

      <SignInButton />
    </div>
  );
}
