import { useState } from "react";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl absolute right-4 top-4"
        >
          {menuOpen ? "X" : "☰"}
        </button>

        {/* Menü (Desktop and Mobile) */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left">
            <li>
              <a
                href="#club"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Club
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#membership"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-xl font-semibold hover:text-primary transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
