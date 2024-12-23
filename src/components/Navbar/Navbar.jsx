import { useState } from "react";
// import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  

   
 

  return (
    <nav className="p-4">
      {/* Logo and Menu */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        {/* <img src={logo} alt="Logo" /> */}

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-white"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Menu Items*/}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-8 justify-center items-center mt-4 lg:mt-0 text-center`}
      >
        <li>
          <a className="text-xl font-bold text-primary" href="#club">
            Club
          </a>
        </li>
        <li>
          <a className="text-xl font-bold text-white" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="text-xl font-bold text-white" href="#membership">
            Membership
          </a>
        </li>
        <li>
          <a className="text-xl font-bold text-white" href="#gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className="text-xl font-bold text-white" href="#contact">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
};
export default Navbar