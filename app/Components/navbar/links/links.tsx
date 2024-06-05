"use client";
import React, { useState } from "react";
import NavLink from "./navLink/navLink";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

const links = [
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

// temporary

const session = false;
const isAdmin = false;

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-full items-center flex">
      {/* desktop navlinks */}
      <div className=" h-full  items-center gap-3 md:flex hidden  ">
        {links.map((link, idx) => (
          <div className=" h-full flex items-center">
            <NavLink key={idx} path={link.path} title={link.title} />
          </div>
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink path="/admin" title="Admin" />}
            <button className=" ms-8 text-sm font-semibold border px-2 rounded-md py-1.5 hover:bg-zinc-700 border-zinc-700 outline-none ">
              Logout
            </button>
          </>
        ) : (
          <NavLink path="/login" title="Login" />
        )}
      </div>

      {/* button to toggele side menu */}

      <button
        className="  md:hidden pt-1.5  items-center"
        onClick={() => {
          setOpen((val) => !val);
        }}
      >
        <FaBars size={20} />
      </button>

      {/* side navbar for mobile  */}

      {open && (
        <div className=" bg-zinc-950   px-8 absolute right-0 top-0   w-screen md:hidden sm:w-1/2  ">
          <div className=" max-w-[400px] flex flex-col mx-auto gap-6 ">
            <div className=" flex justify-between pt-8 pb-4 border-b ">
              <Link href={"/"}>
                <p>LamaAgency</p>
              </Link>
              <button
                className=" md:hidden flex items-center"
                onClick={() => {
                  setOpen((val) => !val);
                }}
              >
                <FaXmark size={20} />
              </button>
            </div>

            <NavLink path="/" title="Home" />

            {links.map((link, idx) => (
              <NavLink path={link.path} title={link.title} key={idx} />
            ))}

            {session ? (
              <>
                {isAdmin && <NavLink path="/admin" title="Admin" />}
                <button className=" px-2 text-left  text-sm font-semibold   rounded-md py-1.5 hover:bg-zinc-700 outline-none ">
                  Logout
                </button>
              </>
            ) : (
              <NavLink path="/login" title="Login" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
