import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RockScraper | AI and UpRock's DePIN powered Scraper",
  description: "RockScraper is an AI and UpRock's DePIN powered Scraper platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
