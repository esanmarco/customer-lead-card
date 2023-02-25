/* eslint-disable @next/next/no-img-element */
import { asyncComponent } from "@/utils/hoc";
import { getServerSession } from "next-auth";
import Link from "next/link";

async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="flex flex-row justify-between shadow navbar bg-base-100">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-circle btn-ghost drawer-button lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
      <Link
        href="/dashboard"
        className="text-lg no-underline normal-case btn btn-ghost"
      >
        Lead App
      </Link>

      <div className="avatar placeholder-slate-100">
        <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
          <img alt="avatar" className="m-0" src={session?.user?.image ?? ""} />
        </div>
      </div>
    </div>
  );
}

export default asyncComponent(Navbar);
