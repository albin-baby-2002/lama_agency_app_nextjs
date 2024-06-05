"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface TNavLinkProps{
    path:string;
    title:string;
}


const NavLink:React.FC<TNavLinkProps> = ({path,title}) => {
    const pathname = usePathname();
    const isActive = (path:string) => path === pathname;
  return (
    <Link
      href={path}
      className={`${isActive(path) ? "bg-white text-black" : ""} px-2 py-1.5 rounded-md text-sm font-semibold md:hover:bg-white md:hover:text-black `}
    >
      {title}
    </Link>
  );
}

export default NavLink
