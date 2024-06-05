import React from "react";
import Links from "./links/links";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className=" flex justify-between items-center">
      <div className="  flex items-center h-full font-bold text-2xl">
        <Link href={"/"}>
          <p>Lama</p>
        </Link>
      </div>
      <Links />
    </header>
  );
};

export default NavBar;
