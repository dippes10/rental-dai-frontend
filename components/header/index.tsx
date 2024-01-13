// Import necessary modules
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import Button from "../Button";
import Dropdown from "./Dropdown";
import { Header as HeaderData, NavItemProps } from "../../constants";
import { Sidebar } from "../../components/sidebar";

// Interface for HeaderProps
interface HeaderProps {
  HeaderNav: NavItemProps[];
}

// Header component
const Header: React.FC<HeaderProps> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const HeaderNav = HeaderData.HeaderNav;

  // Function to handle click on "Join RentalDai" button
  const handleClick = () => {
    router.push("/signup");
    setShowMenu(false);
  };

  // Function to handle click on "Get started" button
  const handleStartClick = () => {
    router.push("/login");
    setShowMenu(false);
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
      easing: "ease-out", // Easing function for the animation
    });
  }, []);

  return (
    <header>
      {/* Use Head component to update title and icon */}
      <Head>
        <title>Rental Dai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {/* Navigation */}
      <nav
        className="fixed z-40 pt-4 flex flex-row justify-center items-center w-full bg-transparent px-2"
        data-aos="fade-down" // Apply fade-down animation
      >
        <div className="container px-2 rounded-xl border-2 shadow-lg bg-white mx-auto flex items-center justify-between h-20 text-black">
          <FaBars
            className="lg:hidden w-6 h-6 text-red-500 hover:red-900"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer transition duration-300 hover:opacity-80">
              <Image
                src="/favicon.png"
                alt="Rental-Dai Logo"
                width={120}
                height={40}
                data-aos="fade-right" // Apply fade-right animation
              />
            </div>
          </Link>
          {/* Mobile Menu Toggle */}
          <div className={`lg:hidden ${showMenu ? "block" : "hidden"}`}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none transition duration-300 hover:opacity-80"
              data-aos="fade-left" // Apply fade-left animation
            >
              {showMenu ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-4 gap-2">
            {HeaderNav.map((item) =>
              item.subNavItems ? (
                <Dropdown
                  displayHoverEffect={true}
                  key={item.id}
                  navItem={item}
                />
              ) : (
                <li key={item.id} className="relative overflow-hidden">
                  <Link href={item.navLink}>
                    <div
                      className={`hover:text-primary-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary-600 after:bottom-0 after:-left-[100%] font-semiBold after:transition-all hover:after:left-0 ${
                        router.pathname === item.navLink &&
                        "after:left-0 text-primary-600"
                      }`}
                      data-aos="fade-up" // Apply fade-up animation
                    >
                      {item.navItem}
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* Call-to-action Buttons */}
          <div className="mt-8 space-x-4 flex justify-center bg-opacity-50">
            <div className="text-black transition duration-300 hover:text-red cursor-pointer">
              <button
                onClick={handleClick}
                className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-600 group-hover:to-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                data-aos="fade-right" // Apply fade-right animation
              >
                Get started as Lister
              </button>
            </div>
            <div className="text-black transition duration-300 hover:text-black cursor-pointer">
              <button
                onClick={handleStartClick}
                className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-400 group-hover:to-lime-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-200"
                data-aos="fade-left" // Apply fade-left animation
              >
                Get started as User
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Export the Header component
export default Header;
