/* eslint-disable @next/next/no-img-element */
import { asyncComponent } from "@/utils/hoc";
import { getServerSession } from "next-auth";
import Link from "next/link";

async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="flex flex-row justify-between shadow navbar bg-base-100">
      <Link
        href="/dashboard"
        className="text-lg no-underline normal-case btn btn-ghost"
      >
        Dashboard
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
