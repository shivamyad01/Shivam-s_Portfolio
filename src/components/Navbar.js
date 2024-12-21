import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineRead, AiOutlineFileText } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: <AiOutlineHome size={24} /> },
    { path: "/about", label: "About", icon: <AiOutlineUser size={24} /> },
    { path: "/projects", label: "Projects", icon: <AiOutlineFundProjectionScreen size={24} /> },
    { path: "/blog", label: "Blog", icon: <AiOutlineRead size={24} /> },
    { path: "/resume", label: "Resume", icon: <AiOutlineFileText size={24} /> },
  ];

  return (
    <nav className="flex flex-row md:flex-col justify-between md:justify-start items-center bg-white text-gray-800 py-2 md:py-4 fixed bottom-0 md:fixed md:top-0 left-0 w-full md:w-1/6 h-16 md:h-screen z-10 border-t md:border-t-0 md:border-r border-gray-200 shadow-md">
      {/* Logo */}
      <div className="hidden md:block mb-8">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 hover:shadow-lg transform hover:scale-105 transition duration-300"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row md:flex-col justify-around md:justify-start items-center w-full md:space-y-6 text-sm md:text-lg font-semibold space-x-4 md:space-x-0">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-3 cursor-pointer transition duration-300 ${
              location.pathname === link.path ? "text-blue-500 font-bold" : "hover:text-blue-500"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                location.pathname === link.path ? "bg-blue-100" : "hover:bg-blue-100"
              } transition duration-300`}
            >
              {link.icon}
            </div>
            <Link to={link.path} className="hidden md:inline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
