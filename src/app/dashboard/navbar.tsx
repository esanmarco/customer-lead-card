import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow flex flex-row justify-between">
      <Link
        href="/dashboard"
        className="btn btn-ghost normal-case text-lg no-underline"
      >
        Dashboard
      </Link>

      <div className="avatar placeholder-slate-100">
        <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
          <img className="m-0" src="https://placeimg.com/192/192/people" />
        </div>
      </div>
    </div>
  );
}
