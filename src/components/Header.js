import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { IoMenu } from "react-icons/io5"; // Mobile menu icon
import { RxCross2 } from "react-icons/rx"; // Cross icon for closing

function Header() {
  const [istoggle, setToggle] = useState(false); // Manage toggle state

  // Toggle handler to open and close the menu
  const handleToggle = () => {
    setToggle(!istoggle); // Toggle the state on each click
  };

  // Close menu after clicking a link
  const closeMenu = () => {
    setToggle(false); // Close the menu after a link is clicked
  };

  return (
    <header className="w-[100vw] bg-black text-white sticky top-0 z-[1000]">
      <nav className="flex mx-auto items-center justify-between py-5 px-10 lg:w-[80%]">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Sunny Rajbhar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xl">
          <li className="cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="text-white hover:text-blue-200">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-200">
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500} className="text-white hover:text-blue-200">
              Contact
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skill" smooth={true} duration={500} className="text-white hover:text-blue-200">
              Skill
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="project" smooth={true} duration={500} className="text-white hover:text-blue-200">
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="coding" smooth={true} duration={500} className="text-white hover:text-blue-200">
              Profile
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="education" smooth={true} duration={500} className="text-white hover:text-blue-200">
              Education
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-4xl" onClick={handleToggle}>
          <button>{istoggle ? <RxCross2 /> : <IoMenu />}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {istoggle && (
        <ul className="md:hidden flex flex-col items-center gap-4 text-xl bg-black w-[100%] p-4 absolute z-20">
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              Contact
            </Link>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              Skill
            </Link>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="project"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="coding"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              Profile
            </Link>
          </li>
          <li className="cursor-pointer" onClick={closeMenu}>
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close menu after scrolling
              className="text-white hover:text-blue-200"
            >
              Education
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
