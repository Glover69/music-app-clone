// components/SideBar.tsx
'use client';

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { IoPlayCircle } from "react-icons/io5";
import { HiMiniRectangleStack } from "react-icons/hi2";
import Box from "./box";
import SidebarItem from "./sidebar-item";
import NavMobileItem from "./nav-mobile-item";
import Library from "./library";


interface SideBarProps{
    children: React.ReactNode;
}
const SideBar: React.FC<SideBarProps> = ({
    children,
}) => {

    const pathName = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathName !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search',
        }
    ], [pathName])

    const routesMobile = useMemo(() => [
        {
            icon: IoPlayCircle,
            label: 'Listen Now',
            active: pathName !== '/search' && pathName !== '/library',
            href: '/',
        },
        {
            icon: HiMiniRectangleStack,
            label: 'Library',
            active: pathName === '/library',
            href: '/library',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search',
        },
    ], [pathName])
  return (
    <div className="main-container flex h-full relative">
        <div className="desktop-nav hidden md:flex flex-col gap-y-2 bg-[black] h-full w-80 p-2">
            <Box className="">
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (
                        <SidebarItem
                        key={item.label}
                        {...item}
                        />
                    ))}
                </div>
            </Box>
            <Box className="flex-1 overflow-y-auto p-4">
                <Library/>
            </Box>

        </div>
        <div className="mobile-nav flex flex-row items-center justify-around w-full h-fit p-4 bg-[#121212] border-t-[0.5px] border-t-[#A6A6AA] md:hidden absolute bottom-0">
            {routesMobile.map((item) => (
                <NavMobileItem
                key={item.label}
                {...item}/>
            ))}
         </div>
        <main className="w-full h-full md:p-2">
            {children}
        </main>

    </div>
  );
};

export default SideBar;
