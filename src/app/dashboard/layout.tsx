import Navbar from "./navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="p-4 mx-auto max-w-7xl sm:p-6 lg:p-8">{children}</div>
    </>
  );
}
