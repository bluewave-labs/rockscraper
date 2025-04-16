'use client';
import { AppSidebar as Sidebar, SidebarProvider } from '@bluewavelabs/prism-ui';
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';

const items_nav = [
  {
    title: 'Dashboard',
    url: '/',
    icon: <SquareTerminal />,
  },
  {
    title: 'Playground',
    url: '/playground',
    icon: <Bot />,
  },
  {
    title: 'Logs & data',
    url: '/logs-data',
    icon: <BookOpen />,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: <Settings2 />,
  },
];

const AppSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar
        product="RockScraper"
        nav={[
          {
            label: 'Platform',
            items: items_nav,
          },
        ]}
        logOut={() => {
          console.log('logOut');
        }}
      />
    </SidebarProvider>
  );
};

export default AppSidebar;
