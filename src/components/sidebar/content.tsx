"use client";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const items_nav = [
  {
    title: "Dashboard",
    url: "/",
    icon: SquareTerminal,
  },
  {
    title: "Playground",
    url: "/playground",
    icon: Bot,
  },
  {
    title: "Logs & data",
    url: "/logs-data",
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
  },
];

const Content = () => {
  const pathname = usePathname();
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items_nav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={pathname === item.url}>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default Content;
