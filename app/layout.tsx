import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game E-Commerce",
  description:
    "Digital game buying and selling website, providing a variety of the newest, best-selling and popular games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
