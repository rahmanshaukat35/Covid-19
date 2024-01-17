"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const navLink = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "What We Do",
      link: "#",
    },
    {
      title: "Prevention",
      link: "#",
    },
    {
      title: "Symptoms",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white w-full">
      <div className="flex items-center justify-between shadow-sm ">
        <div>
          <Image src="/header.png" alt="header" width={191} height={67} />
        </div>
        <ul
          className={`gap-9 text-lg font-normal ${
            isOpen
              ? " absolute md:right-20 right-5 shadow-2xl rounded-lg p-10 space-y-3 top-20"
              : "hidden"
          } lg:flex `}
        >
          {navLink.map((item, i) => (
            <li
              key={i}
              className={`hover:text-gray-500 ${
                path === item.link
                  ? "border-b-2 border-green-500 text-green-500 "
                  : ""
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
