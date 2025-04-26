import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

import Logout from "./Logout";
import { useAuth } from "./AuthProvider";

const Navbar = () => {
  const [authUser, setauthUser] = useAuth();
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [sticky, setsticky] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Theme effect
  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setsticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-500 transition duration-300" onClick={() => setShowMobileMenu(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/courses" className="hover:text-blue-500 transition duration-300" onClick={() => setShowMobileMenu(false)}>
          Course
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-blue-500 transition duration-300" onClick={() => setShowMobileMenu(false)}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 z-50
      bg-white dark:bg-slate-900 dark:text-white 
      ${sticky ? "shadow-lg dark:bg-slate-800" : "shadow-sm"}`}
    >
      <div className="navbar">
        <div className="navbar-start flex items-center space-x-4">
          {/* Mobile dropdown with nav + auth items */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-800 text-white rounded-box w-52 z-50"
            >
              {navItems}
              <li>
                {authUser ? (
                  <Logout />
                ) : (
                  <a
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>






          {/* Website Name Centered on Mobile */}
          <div className="hidden absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              bookStore
            </Link>
          </div>

          {/* Website Name for desktop */}
           <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl lg:font-extrabold mx-auto lg:mx-0"
          >
            bookStore
          </Link>
        </div>

        <div className="navbar-end space-x-4">
          {/* Desktop navigation */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal space-x-2">{navItems}</ul>
          </div>

          {/* Theme toggle */}
          <label className="swap swap-rotate">
  <input
    type="checkbox"
    onChange={() => settheme(theme === "light" ? "dark" : "light")}
    checked={theme === "dark"}
  />
  {/* Sun icon */}
  <svg 
    className="swap-off h-6 w-6 fill-current text-gray-900 dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
  
  {/* Moon icon */}
  <svg 
    className="swap-on h-6 w-6 fill-current text-gray-900 dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

          {/* Desktop login/logout */}
          <div className="hidden lg:block">
            {authUser ? (
              <Logout />
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Login modal (make sure this is properly styled for mobile) */}
      <Login />
    </div>
  );
};

export default Navbar;