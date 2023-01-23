import Navbar from "./navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">{children}</div>
    </>
  );
}
