import { SidebarProps } from '@bluewavelabs/prism-ui';
import '@bluewavelabs/prism-ui/style';
import Content from '@src/components/content';
import Header from '@src/components/header';
import AppSidebar from '@src/components/sidebar';
import { Toaster } from '@src/components/ui/sonner';
import { ScraperProvider } from '@src/utils/context';
import { validateToken } from '@src/utils/validateToken';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { redirect } from 'next/navigation';
import '../style/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "RockScraper | AI and UpRock's DePIN powered Scraper",
  description: "RockScraper is an AI and UpRock's DePIN powered Scraper platform",
};

export default async function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const user = await validateToken();

  if (!user) {
    redirect('https://prism.uprockstaging.com/auth/register');
  }

  return (
    <html lang="en">
      <body className={`${roboto.className} body`}>
        <AppSidebar user={user.decoded as SidebarProps['user']} />

        <div className="body__right">
          <Header />
          <Toaster />
          <main>
            <ScraperProvider>
              <Content token={user.token}>{children}</Content>
            </ScraperProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
