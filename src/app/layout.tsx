import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dreaminwithori — Videographer & Photographer, Edmonton AB",
  description:
    "Visual stories told honestly. Ori is a videographer and photographer based in Edmonton, AB — available for brand, lifestyle, portrait, and event work.",
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
