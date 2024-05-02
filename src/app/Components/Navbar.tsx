"use client";
import React from "react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { Input } from '@chakra-ui/react'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };



  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 py-4 dark:bg-black">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl sm:px-12 px-4 mx-auto">
          <a href="#" className="flex flex-col items-center">
            <span className="self-center sm:text-5xl text-3xl font-bold whitespace-nowrap text-white">
              tetris
            </span>
            <span className="sm:pl-6 pl-0 self-center sm:text-sm text-xs whitespace-nowrap text-white">
              design*build
            </span>
          </a>

          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 hidden md:flex"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <div className="dropdown dropdown-hover">
                  <a href="#">
                    {" "}
                    <div
                      tabIndex={0}
                      role="button"
                      className="block py-2 pl-3 pr-4 text-white hover:text-red-700"
                    >
                      About us
                    </div>
                  </a>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <a href="#">
                    {" "}
                    <div
                      tabIndex={0}
                      role="button"
                      className="block py-2 pl-3 pr-4 text-white hover:text-red-700"
                    >
                      Services
                    </div>
                  </a>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white hover:text-red-700"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white hover:text-red-700"
                >
                  Insights & News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white hover:text-red-700"
                >
                  Contact us
                </a>
              </li>

              <li>
                <div className="relative">
                  {!searchOpen && (
                    <div
                      tabIndex={0}
                      role="button"
                      className="block pl-3 pr-4 py-2 hover:text-red-700 text-white"
                      onClick={toggleSearch}
                    >
                      <IoSearchSharp />
                    </div>
                  )}
                  {searchOpen && (
                    <div className="relative navbar-transition">
                      <input
                        type="text"
                        className="border border-gray-300 bg-black pl-8  py-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Search..."
                      />
                      <div
                        className="absolute top-0 left-0 flex items-center h-full px-3"
                        onClick={toggleSearch}
                      >
                        <IoSearchSharp className="text-gray-500" />
                      </div>
                      <div
                        className="absolute top-0 right-0 flex items-center h-full px-3 cursor-pointer"
                        onClick={toggleSearch}
                      >
                        <IoClose className="text-gray-500" />
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="true"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>







 {/* Mobile Nav */}
 <div
        className={`fixed left-0 w-full min-h-screen bg-black/70 z-[101] ${
          nav ? "" : "hidden"
        }`}
      >
        <div
          className={`fixed top-16 left-0 w-[100%] sm:w-[100%] md:w-[100%] h-full bg-black pl-2 pr-2 ease-in duration-500 ${
            nav ? "" : "left-[-100%]"
          }`}
        >
          
          <div className="">
          <ul className="flex flex-col mt-4 font-medium ">

          <li>
                
                    <div className="relative navbar-transition">
                      <input
                        type="text"
                        className="border text-center border-gray-300 py-1 bg-black focus:outline-none focus:border-indigo-500"
                        placeholder="Search..."
                      />
                      <div
                        className="absolute top-0 flex items-center h-full px-3"
                        onClick={toggleSearch}
                      >
                        <IoSearchSharp className="text-gray-500" />
                      </div>
                     
                    </div>
                  
              </li>




              <li>
      <div className="dropdown relative">
        <div
          tabIndex={0}
          role="button"
          className="block py-2 pl-3 pr-4 w-full flex justify-between items-center text-white hover:text-red-700 border-b border-gray-100 dark:border-gray-700"
          onClick={toggleDropdown}
        >
          About us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform ml-44 transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={isOpen ? "M10 3l7 7H3l7-7z" : "M10 17l-7-7h14l-7 7z"}
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-56 relative">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        )}
      </div>
    </li>





              {/* <li>
                <div className="dropdown dropdown-hover">
                  <a href="#">
                    {" "}
                    <div
                      tabIndex={0}
                      role="button"
                      className="block py-2 pl-3 pr-4 w-full text-white hover:text-red-700 border-b border-gray-100 dark:border-gray-700"
                    >
                      About us
                    </div>
                  </a>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li> */}
                     <li>
      <div className="dropdown relative">
        <div
          tabIndex={0}
          role="button"
          className="block py-2 pl-3 pr-4 w-full flex justify-between items-center text-white hover:text-red-700 border-b border-gray-100 dark:border-gray-700"
          onClick={toggleDropdown}
        >
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform ml-44 transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={isOpen ? "M10 3l7 7H3l7-7z" : "M10 17l-7-7h14l-7 7z"}
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-56 relative">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        )}
      </div>
    </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 w-full text-white hover:text-red-700 border-b border-gray-100 dark:border-gray-700"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 w-full text-white hover:text-red-700 border-b border-gray-100 dark:border-gray-700"
                >
                  Insights & News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 w-full text-white hover:text-red-700 border-b border-gray-100 dark:border-gray-700"
                >
                  Contact us
                </a>
              </li>

            

            </ul>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden fixed top-4 right-4 z-[102]">
        <div
          onClick={handleNav}
          className="p-2 rounded-full bg-black cursor-pointer"
        >
          {nav ? <AiOutlineClose color="red" size="24" /> : <AiOutlineMenu color="red" size="24" />}
        </div>
      </div>








      </nav>
    </div>
  );
};

export default Navbar;
