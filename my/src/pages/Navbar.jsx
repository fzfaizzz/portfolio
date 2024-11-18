import React, { useState, useEffect } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import Logo from "./Logo";
import { CiLinkedin } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Detect scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fade in the navbar on mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      } ${scrolled ? "bg-gray-900 py-2 shadow-lg" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white  ml-10 font-bold text-lg">
          <Logo/>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-white">
          <a href=""
            to="/about"
            className="hover:text-purple-500 hover:scale-110 transition-transform duration-300"
          >
            About
            </a>
          <a
            href="#work"
            className="hover:text-purple-500 hover:scale-110 transition-transform duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-purple-500 hover:scale-110 transition-transform duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-4">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} color="white" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 h-auto w-[60%] bg-gray-800 bg-opacity-95 p-4 space-y-4 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            X
          </button>
        </div>

        <div className="space-y-4">
          <a href=""
            className="block text-white text-2xl font-semibold hover:text-yellow-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            About
            </a>
          <a
            href="#work"
            className="block text-white text-2xl font-semibold hover:text-yellow-400 transition duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="block text-white text-2xl font-semibold hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        <div className="mt-8 w-full space-y-2">
          <p className="text-white text-sm">Socials</p>
          <div className="flex text-xl justify-between px-5 flex-wrap">
            <a href="#" className="text-white hover:text-purple-500">
              <CiLinkedin />
            </a>
            <a href="#" className="text-white hover:text-purple-500">
              <MdMarkEmailRead />
            </a>
            <a href="#" className="text-white hover:text-purple-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-6 text-white text-xs">
          <p>Located in Dusseldorf</p>
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
