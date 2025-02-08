"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavbarProps {
  links: { name: string; href: string }[];
  onMenuToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ links, onMenuToggle }) => {
  const router = useRouter();

  return (
    <nav className="px-10 text-white flex items-center justify-between">
      <div className="text-xl font-bold">
        <Image
          src="/images/1plogonew.webp"
          alt="app logo"
          width={120}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <button onClick={onMenuToggle} className="sm:hidden">
        ☰
      </button>

      <div className="flex-1 flex font-bold justify-center">
        <ul className="hidden sm:flex gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:underline hover:underline-offset-8 hover:text-green-700 ease-in-out transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => router.push("/auth/register")}
          className="border-2 flex justify-between items-center px-4 py-1 transition-transform ease-in-out transform hover:scale-105 border-custom2 rounded-full w-36"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
            />
          </svg>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
