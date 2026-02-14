"use client";

import { useState, useEffect } from "react";
import navData from "@/data/navbar/data.json";
import Buttons from "@/components/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, item) => {
    if (item.scrollToSection && item.path.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(item.path);
      el?.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 border-[#262626] backdrop-blur-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="flex h-16 items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#summary"
          className="font-bold text-lg sm:text-xl text-white hover:text-[#22d3ee] transition-colors"
        >
          Karthick<span className="text-[#22d3ee]">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navData.navbar.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-[#a3a3a3] hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22d3ee] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Buttons text="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#22d3ee] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#262626] px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navData.navbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-medium text-[#a3a3a3] hover:text-white transition-colors block py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[#262626]">
              <Buttons text="Contact" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
