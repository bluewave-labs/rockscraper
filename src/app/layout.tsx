import Content from "@src/components/content";
import Header from "@src/components/header";
import Sidebar from "@src/components/sidebar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

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
      <body className={`${roboto.className} body`}>
        <Sidebar />
        <Header />
        <Content>{children}</Content>
      </body>
    </html>
  );
}
