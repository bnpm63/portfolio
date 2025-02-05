"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-md mx-auto"> 
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/Untitled(1).svg"
              alt="logo"
              width={18}
              height={18}
              className="object-contain"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-gray-400 transition duration-200 px-3 py-2 rounded-md text-sm">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-400 transition duration-200 px-3 py-2 rounded-md text-sm">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-400 transition duration-200 px-3 py-2 rounded-md text-sm">
                Contact
              </Link>
              <Link href="/posts" className="text-white hover:text-gray-400 transition duration-200 px-3 py-2 rounded-md text-sm">
                Posts
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white hover:text-gray-400 transition duration-200 block px-3 py-2 rounded-md text-base">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400 transition duration-200 block px-3 py-2 rounded-md text-base">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-400 transition duration-200 block px-3 py-2 rounded-md text-base">
              Contact
            </Link>
            <Link href="/posts" className="text-white hover:text-gray-400 transition duration-200 block px-3 py-2 rounded-md text-base">
              Posts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
