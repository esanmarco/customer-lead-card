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
        <div className="w-full prose max-w-none">{children}</div>
      </body>
    </html>
  );
}
