import QueryWrapper from "./components/queryWrapper";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <head />
      <body>
        <div className="w-full prose max-w-none">
          <QueryWrapper>{children}</QueryWrapper>
        </div>
      </body>
    </html>
  );
}
