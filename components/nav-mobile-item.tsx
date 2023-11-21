// components/NavMobileItem.tsx
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface NavMobileItemProps{
    icon: IconType,
    href: string;
    active?: boolean,
    label: string;
}

const NavMobileItem: React.FC<NavMobileItemProps> = ({
    icon: Icon,
    href,
    active,
    label
}) => {
  return (
    <Link
    href={href}
    className={twMerge(`flex flex-col items-center justify-center gap-2 w-20 text-base text-[#727272]`, 
    active && 'text-[#1ED760]'
    )}>
        <Icon size={25}/>
        <span className='truncate'>{label}</span>

    </Link>
  );
};

export default NavMobileItem;
