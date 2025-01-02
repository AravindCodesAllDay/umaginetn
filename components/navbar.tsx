"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import Logo1 from "@/public/logos/UmagineTN logo.png";
import Logo2 from "@/public/logos/ATTN logo.png";
import Logo3 from "@/public/logos/GOV logo.png";
import Logo4 from "@/public/logos/ELCOT logo.png";

import { registrationLink } from "@/links";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    // { name: "Agenda", path: "/agenda" },
    // { name: "Partners", path: "/partners" },
  ];

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 400);
      if (menuOpen) setMenuOpen(false);
      lastScrollY.current = scrollY;
    }
  }, [menuOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  const pushToDataLayer = (event: object) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(event);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [controlNavbar, handleClickOutside]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div
        ref={menuRef}
        className={`${
          scrolled
            ? "fixed top-0 left-0 bg-white text-black shadow-md"
            : "relative md:absolute "
        } transform transition-transform w-full duration-500 ease-in-out z-40 px-2 lg:p-1 flex justify-between md:justify-around items-center`}
      >
        <Link
          href={"/"}
          className="flex flex-row gap-3 items-center scale-75 lg:scale-95"
        >
          <Image src={Logo1} alt="logo" width={80} style={{ height: "auto" }} />
          <Image src={Logo2} alt="logo" width={55} style={{ height: "auto" }} />
          <Image src={Logo3} alt="logo" width={55} style={{ height: "auto" }} />
          <Image src={Logo4} alt="logo" width={55} style={{ height: "auto" }} />
        </Link>

        <ul className="hidden md:flex items-center gap-3 lg:gap-8">
          {routes.map(({ name, path }) => (
            <li
              key={name}
              className={`${
                pathname === path
                  ? "text-primary "
                  : "text-gray-700 hover:text-primary"
              } transition-colors font-semibold lg:text-lg duration-200`}
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
          <li>
            <Link
              href={registrationLink}
              className="p-2 px-4 bg-primary hover:bg-secondary rounded text-white font-semibold transition-colors duration-200 ease-in-out"
              onClick={() =>
                pushToDataLayer({
                  event: "registration_click",
                  category: "CTA",
                  action: "Click",
                  label: "Register Button",
                })
              }
            >
              Register
            </Link>
          </li>
        </ul>
        <div
          className={`md:hidden p-2 rounded bg-primary text-white transition-all duration-200 ease-in-out ${
            menuOpen ? "border-2 border-red-400" : ""
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-24 left-1/2 w-11/12 z-40 transform -translate-x-1/2 bg-white p-5 rounded shadow-lg transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {routes.map(({ name, path }) => (
            <li
              key={name}
              className={`${
                pathname === path
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              } transition-colors duration-200`}
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
