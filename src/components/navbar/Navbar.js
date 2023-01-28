import React, { useState } from "react";
import "./navbar.css";
import Modal from "../modal/Modal";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal isClosed={handleCloseModal} isOpen={showModal} />
      <nav className="bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto py-1 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div>
                <a href="/">
                  <img
                    className="w-28 mr-2"
                    src="../images/website.svg"
                    alt="logo"
                  />
                </a>
              </div>
              {/* Primary Nav */}
              <div className="hidden md:flex space-x-4">
                <button
                  className="text-sm font-medium hover:text-gray-900 text-gray-700"
                  onClick={toggleModal}
                >
                  How It Works
                </button>
              </div>
            </div>
            {/* Secondary Nav */}
            <div className="hidden md:flex space-x-4 mx-2">
              <a
                className="py-2 text-sm font-medium hover:text-gray-900 text-gray-700"
                href="#"
              >
                Log In
              </a>
              <a
                className="py-2 text-sm font-semibold bg-red-400  text-black hover:text-white transition duration-300 px-2 rounded"
                href="#"
              >
                Sign Up
              </a>
            </div>
            {/* Mobile Nav */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-btn" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {openMenu ? (
          <div className="mobile-menu md:hidden">
            <button
              className="block py-3 px-7 text-gray-700 text-sm hover:bg-gray-200 w-full text-left"
              onClick={toggleModal}
            >
              How It Works
            </button>
            <a
              href="#"
              className="block py-3 px-7 text-gray-700 text-sm hover:bg-gray-200"
            >
              Log In
            </a>
            <a
              href="#"
              className="block py-3 px-7 font-semibold text-gray-700 text-sm hover:bg-gray-200"
            >
              Sign Up
            </a>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
