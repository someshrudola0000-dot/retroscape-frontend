
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RetroScape",
  description:
    "Explore historical monuments through time with 3D, AR, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
