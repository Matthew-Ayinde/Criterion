"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;

      if (scrollHeight > 90) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const reservedPathname =
    pathname === "/services" || pathname.startsWith("/our-works/");
  const homePathname = pathname === "/";

  return (
    <nav
      className={`w-full fixed z-30 ${
        scrollBg // scrollBg || homePathname
          ? "bg-white/95 text-black"
          : reservedPathname && !scrollBg
          ? "lg:bg-black bg-white text-white"
          : "lg:bg-white bg-white lg:text-black text-white"
      }  ${open ? "h-screen" : ""}`}
    >
      <div className="flex items-center justify-between lg:px-20 px-6 py-4 w-full mx-auto lg:relative h-90px">
        {/* logo */}
        <div className="lg:w-fit w-full z-50 flex items-center justify-between">
          <Link
            href={"/"}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Image
              alt="alt Image"
              width={200}
              height={34.57}
              src={
                reservedPathname && !scrollBg ? "/logo.svg" : "/logo.svg"
              }
              className="lg:inline-block hidden"
            />
            <Image
              alt="alt Image"
              width={200}
              height={34.57}
              src={"/logo.svg"}
              className="inline-block lg:hidden"
            />
          </Link>

          {/* hamburger menu */}
          <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
            {open ? (
              <Image src={"/close.svg"} alt={"close"} width={36} height={36} />
            ) : (
              <Image src={"/open.svg"} alt={"open"} width={36} height={36} />
            )}
          </div>
        </div>

        {/* large devices */}
        <div className="lg:flex hidden items-center justify-between gap-[66px]">
          <ul className="flex gap-[48px]">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url} className="">
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* mobile-menu */}
        <ul
          className={`lg:hidden absolute h-screen w-full top-90px z-40 py-32 duration-500 ease-in-out transition-all ${
            open ? "left-0 bg-white" : "left-[-100%]"
          }`}
        >
          <div className="space-y-8 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="block text-lg text-black"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

const navLinks = [
  {
    name: "Works",
    url: "/our-works",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "What we do",
    url: "/about-us",
  },
  {
    name: "Careers",
    url: "/careers",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
];

export default Navbar;
