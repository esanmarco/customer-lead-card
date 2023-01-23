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
        <div className="prose w-full max-w-none">{children}</div>
      </body>
    </html>
  );
}
