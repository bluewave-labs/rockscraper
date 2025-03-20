import Content from "@components/components/content";
import Header from "@components/components/header";
import Sidebar from "@components/components/sidebar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RockScraper | AI and UpRock's DePIN powered Scraper",
  description:
    "RockScraper is an AI and UpRock's DePIN powered Scraper platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='body'>
        <Sidebar />
        <Header />
        <Content>{children}</Content>
      </body>
    </html>
  );
}
