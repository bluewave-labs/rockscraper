// "use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { SidebarFooter, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import style from "./sidebar.module.scss";
import { colors } from "@src/utils/colors";

const Footer = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className={style.sidebar__menu}>
                <Avatar>
                  <AvatarImage src='https://placecats.com/32/32' />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className={style["sidebar__menu--info"]}>
                  <h3 className={style["sidebar__menu--name"]}>John Doe</h3>
                  <p className={style["sidebar__menu--email"]}>
                    john.doe@email.com
                  </p>
                </div>
                <ChevronsUpDown size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side='top'
              className={`w-[--radix-popper-anchor-width] bg-[#121318] text-[${colors.zinc[200]}] border-transparent`}
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default Footer;
