"use client"; // so that you can use react hooks and click event handlers
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../MenuOverlay";

const navLinks = [
  { title: "About", path: "/#about" },
  { title: "Projects", path: "/#projects" },
  { title: "Contact", path: "/#engaged" },
  { title: "Resume", path: "" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 container z-10 bg-[#E1DFE0] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-4">
        <Link href={"/"}>
          <p className="font-normal text-[#0F0F0F]  text-[22px]">Jace Chua</p>
        </Link>
        {/* Mobile Menu Bar */}
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-[#FFFFFF] hover:border-[#FFFFFF]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-[#FFFFFF] hover:border-[#FFFFFF]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* Desktop Menu Bar */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} dismissMobileMenu={setNavbarOpen} />
      ) : null}
    </nav>
  );
};

export default NavBar;
