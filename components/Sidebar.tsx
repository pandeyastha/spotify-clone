"use client";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";   //client component hook 
import { useMemo } from "react";
import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

    const pathname= usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
          },
          {
            icon: BiSearch,
            label: 'Search',
            href: '/search',
            active: pathname === '/search'
          },
    ],[ pathname]);




  return (
  <div className="flex h-full">
    <div className="
        hidden 
        md:flex 
        flex-col 
        gap-y-2 
        bg-black 
        h-full 
        w-[300px] 
        p-2
    ">
        <Box>
            Sidebar Nav
        </Box>
    </div>

  </div>);
};

export default Sidebar;