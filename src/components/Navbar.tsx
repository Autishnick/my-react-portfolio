"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-poppins font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Vladyslav
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-inter text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-800/50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95"
            >
              Connect With Me
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-blue-400 font-medium block px-3 py-2 rounded-md text-base"
            >
              Connect With Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
