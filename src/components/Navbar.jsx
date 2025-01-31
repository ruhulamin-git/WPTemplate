import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";

import lang from "../assets/images/lang.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setIsDropdownOpen(false);
    }
  };

  // Attach event listener to close dropdown on outside click
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className="bg-white text-gray-800 px-6 py-3 shadow-sm sticky top-0 z-[1000] flex justify-between items-center mx=auto mt-0">
      <div className="flex justify-start items-center  gap-5">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <img src={logo} alt="" className="lg:w-full md:w-full h-8" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li className="relative dropdown-container">
            <button
              className="hover:text-blue-400 transition flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Consulting{" "}
              <span className="pt-1">
                <IoIosArrowDown />
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-300 rounded">
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <a href="#">Business Strategy</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <a href="#">Financial Consulting</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded">
                  <a href="#">Marketing Solutions</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition ">
              Learn{" "}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition ">
              About{" "}
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition ">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="block md:hidden lg:hidden">
        <div className="flex justify-between items-center gap-3">
          <span>
            <LuPhone className="text-2xl cursor-pointer" />
          </span>
          <span>
            <img src={lang} alt="" />
          </span>
        </div>
      </div>
      <div className="md:flex lg:flex hidden items-center justify-between gap-5">
        <div>
          <BsCart3 className="text-2xl cursor-pointer" />
        </div>
        <p className="text-red-600 font-semibold cursor-pointer">Sign Up</p>
        <div className="w-16 rounded rounded-tr-none h-10 flex justify-center items-center cursor-pointer hover:bg-gray-800 hover:text-white border border-b-md border-tl-md border-gray-800 text-center">
          Log In
        </div>
        <div className="relative ">
          <div className="bg-red-600 rounded rounded-tr-none h-10 w-36 cursor-pointer"></div>
          <div className="absolute top-0 left-0 bg-gray-800 hover:bg-red-600 z-10 rounded rounded-tr-3xl text-white flex items-center justify-center  h-full w-full cursor-pointer">
            Book a Meeting
          </div>
        </div>
        <div className=" h-10 w-10 flex justify-center items-center border rounded rounded-tr-none cursor-pointer">
          <img src={lang} alt="" className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
