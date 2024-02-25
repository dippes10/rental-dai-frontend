/* eslint-disable react-hooks/rules-of-hooks */
// Import necessary modules
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import Dropdown from "./../Dropdown";
import { loginHeader as HeaderData, NavItemProps } from "./login-header-const";
import { Sidebar } from "../../../components/sidebar";

// Interface for HeaderProps
interface HeaderProps {
  HeaderNav: NavItemProps[];
}

// Header component
const loginHeader: React.FC<HeaderProps> = () => {
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
        <title>Home Rental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {/* Navigation */}
      <nav
        className="fixed z-40 pt-4 flex flex-row justify-center items-center w-full bg-transparent px-2"
        data-aos="fade-down" // Apply fade-down animation
      >
        <div className="container md:px-2 rounded-xl border-2 shadow-lg bg-white flex items-center justify-between h-20 text-black">
          <div className="flex flex-row items-center space-x-2">
            <FaBars
              className="md:hidden ml-2 w-6 h-6 text-red-500 hover:red-900"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center cursor-pointer transition duration-300 hover:opacity-80">
                <Image
                  src="/favicon.png"
                  alt="rental-dai Logo"
                  width={120}
                  height={40}
                  data-aos="fade-right" // Apply fade-right animation
                />
              </div>
            </Link>
          </div>
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
        </div>
      </nav>
    </header>
  );
};

// Export the Header component
export default loginHeader;