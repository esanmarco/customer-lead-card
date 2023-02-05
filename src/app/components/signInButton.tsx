"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      onClick={() =>
        signIn("discord", {
          callbackUrl: "http://localhost:3000/dashboard",
        })
      }
      className="btn btn-primary"
    >
      Sign in with Discord
    </button>
  );
}