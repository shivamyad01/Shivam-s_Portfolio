import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaBlog, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Import your image

function Navbar() {
  return (
    <nav className="flex flex-row md:flex-col justify-between md:justify-start items-center bg-white text-gray-800 py-2 md:py-4 border-t md:border-t-0 md:border-r-2 border-gray-200 fixed bottom-0 md:fixed md:top-0 left-0 w-full md:w-1/6 h-16 md:h-screen z-10">
      {/* Logo */}
      <div className="hidden md:block mb-8">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full border-2 border-gray-300 hover:opacity-80 transition duration-300"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row md:flex-col justify-around md:justify-start items-center w-full md:space-y-8 text-sm md:text-lg font-semibold">
        <li className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 hover:text-blue-500 cursor-pointer">
          <FaHome size={20} />
          <Link to="/" className="hidden md:inline">Home</Link>
        </li>
        <li className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 hover:text-blue-500 cursor-pointer">
          <FaUser size={20} />
          <Link to="/about" className="hidden md:inline">About</Link>
        </li>
        <li className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 hover:text-blue-500 cursor-pointer">
          <FaProjectDiagram size={20} />
          <Link to="/projects" className="hidden md:inline">Projects</Link>
        </li>
        <li className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 hover:text-blue-500 cursor-pointer">
          <FaBlog size={20} />
          <Link to="/blog" className="hidden md:inline">Blog</Link>
        </li>
        <li className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 hover:text-blue-500 cursor-pointer">
          <FaFileAlt size={20} />
          <Link to="/resume" className="hidden md:inline">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
