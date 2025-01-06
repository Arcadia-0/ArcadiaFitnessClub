import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaArrowUp } from "react-icons/fa"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false); // Add state for showing the back-to-top button

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

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
                href="#hero"
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
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-primary text-black rounded-full shadow-lg hover:bg-secondary transition"
          aria-label="Back to top"
        >
          <FaArrowUp size={24} /> 
        </button>
      )}
    </nav>
  );
};

export default Navbar;
