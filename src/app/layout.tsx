import Content from "@src/components/content";
import Header from "@src/components/header";
import AppSidebar from "@src/components/sidebar";
import { SidebarProvider } from "@src/components/ui/sidebar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@src/components/ui/sonner";

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
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} body`}>
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>

        <div className='body__right'>
          <Header />
          <Content>{children}</Content>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
