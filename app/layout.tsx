import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "davidaror.vercel",
  description: "My resume site :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="overflow-y-hidden"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
