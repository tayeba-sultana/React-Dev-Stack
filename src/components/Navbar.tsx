import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#e1e4e6] sticky top-0 z-50">

      <div className="container mx-auto flex justify-between items-center h-20 text-[#475569] px-5">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <a href="#">
          <img
            src={Logo}
            alt="Dev Stack"
          />
        </a>

        <ul className="hidden items-center gap-5 md:flex">

          <li className="text-[#DB2777]">
            <a href="#">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies">
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

        <div className="flex justify-center items-center gap-5">

          <a href="#">
            Sign In
          </a>

          <a
            href="#"
            className="rounded-full px-3 py-1 text-white bg-linear-to-r from-[#f97316] via-[#ec4899] to-[#7C3AED] shadow-[0px_1px_2px_0px_#fbcfe8]"
          >
            Sign Up
          </a>

        </div>

      </div>

      {menuOpen && (
        <div className="border-t border-[#e5e7eb] bg-white px-5 py-4 md:hidden">

          <ul className="space-y-4 text-center">

            <li>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;