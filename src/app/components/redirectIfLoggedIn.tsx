"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectIfLoggedIn({
  redirect,
}: {
  redirect: boolean;
}) {
  const router = useRouter();
  useEffect(() => {
    if (redirect) router.push("/dashboard");
  }, [redirect]);
  return null;
}
