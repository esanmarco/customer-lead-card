import { getUserAccout } from "@/server/user";
import Navbar from "./navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getUserAccout();
  return (
    <>
      <Navbar />
      <div className="max-w-5xl p-4 mx-auto sm:p-6 lg:p-8">{children}</div>
    </>
  );
}
