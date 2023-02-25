import QueryWrapper from "./components/queryWrapper";
import { getUserAccout } from "@/server/user";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "./styles/globals.css";

export const metadata = {
  title: "Lead Generation App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getUserAccout();
  return (
    <html lang="en" data-theme="night">
      <body>
        <div className="w-full prose max-w-none">
          <QueryWrapper>
            <Navbar />
            <div className="drawer drawer-mobile">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="flex flex-col p-4 drawer-content">
                <div className="w-full mx-auto mb-10 max-w-7xl">{children}</div>
              </div>
              <Sidebar />
            </div>
          </QueryWrapper>
        </div>
      </body>
    </html>
  );
}
