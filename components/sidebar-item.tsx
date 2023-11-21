import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

// components/SidebarItem.tsx
interface SidebarItemProps{
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
  return (
   <Link
   href={href}
   className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:opacity-100 transition text-white opacity-50 py-1`, 
   active && "text-white opacity-100"
   )}
   >
    <Icon size={26}/>
    <span className="truncate w-full">{label}</span>
   </Link>
  );
};

export default SidebarItem;
