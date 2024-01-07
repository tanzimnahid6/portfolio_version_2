import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //download resume============
  const downloadPdf = () => {
    console.log("Clicked");
    fetch("./resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "./resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <nav className="bg-black w-full fixed z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div>
            <h1 className="text-white text-2xl font-bold">Jubayer</h1>
          </div>
          <div className="flex items-center ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className=" text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-black border-none  hover:scale-75 transition duration-200 "
                >
                  Home
                </a>
                <a
                  href="#about"
                  className=" text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-black border-none  hover:scale-75 transition duration-200"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className=" text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-black border-none  hover:scale-75 transition duration-200"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className=" text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-black border-none  hover:scale-75 transition duration-200"
                >
                  Contact
                </a>
                <div>
                  <button
                    className="  text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-black border-none  hover:scale-75 transition duration-200"
                    onClick={downloadPdf}
                  >
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover: bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block ">
            <div className="flex flex-row gap-4">
              <div className=" hover:scale-75 transition duration-200">
                <a href="https://www.facebook.com/tanzim.nahid.1/">
                  <BiLogoFacebookCircle
                    size={26}
                    color="white"
                  ></BiLogoFacebookCircle>
                </a>
              </div>

              <div className=" hover:scale-75 transition duration-200">
                <a href="https://www.linkedin.com/in/al-jubayer/">
                  <FaLinkedinIn size={26}   color="white"></FaLinkedinIn>
                </a>
              </div>
              <div className=" hover:scale-75 transition duration-200">
                <a href="https://github.com/tanzimnahid6">
                  <FaGithub size={26}   color="white"></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-50 scale-95"
      >
        {() => (
          <div
            ref={mobileMenuRef}
            className="md:hidden transition-all duration-300 ease-in-out"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="text-gray-300 hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <NavLink className="text-gray-300 hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </NavLink>
              <a
                href="#contact"
                className="text-gray-300 hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <div>
                <button
                  className="btn  bg-[#960000] text-white"
                  onClick={downloadPdf}
                >
                  RESUME
                </button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
