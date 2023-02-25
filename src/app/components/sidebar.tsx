"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "To Do's",
    href: "/todo",
  },
  {
    name: "My Team",
    href: "/team",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="border-r border-base-200 drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="w-64 p-4 m-0 menu bg-base-100 text-base-content">
        {links.map((link, index) => {
          return (
            <li className="m-0 my-1" key={`nav-item-${index}`}>
              <Link
                href={link.href}
                className={`no-underline p-2 px-4 ${
                  pathname === link.href ? "active text-base-200" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            className="no-underline"
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
}
