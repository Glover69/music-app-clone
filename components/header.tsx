'use client'; 

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx'
import ButtonHeader from "./button";

// components/Header.tsx 
interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {

    const router = useRouter();

    const handleLogout = () => {

    }

  return (
    <div className={twMerge(`
    h-fit
    md:bg-gradient-to-b from-[#727272]
    p-6
    w-full
    `, className)}>
      <div className="w-full mb-4 flex items-start md:items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">

        <button onClick={() => router.back()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={30}/>
          </button>

          <button onClick={() => router.forward()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={30}/>
          </button>
          
        </div>

        <div className="flex md:hidden">
          <div className="header-mobile">
            <div className="text-container flex flex-col items-start">
              <span className="greetings text-[#FFFFFF80] text-xl">Good Evening, Daniel</span>
              <span className="page-title text-white text-3xl font-medium">Listen Now</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-fit items-center gap-4">
          <ButtonHeader
          onClick={() => {}}
          className="bg-transparent text-[#FFFFFF80] font-medium">
            Sign Up
          </ButtonHeader>

          <ButtonHeader
          onClick={() => {}}
          className="bg-white px-6 py-2 font-medium hidden md:flex">
            Log In
          </ButtonHeader>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
