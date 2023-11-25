// Import necessary modules
import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";
import Dropdown from "./Dropdown";
import { Header as HeaderData, NavItemProps } from "../../constants";
import { Sidebar } from "../../components/sidebar";
import { FaBars } from "react-icons/fa";

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

  return (
    <header>
      {/* Use Head component to update title and icon */}
      <Head>
        <title>Rental Dai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {/* Navigation */}
      <nav className="fixed z-40 pt-4 flex flex-row justify-center items-center w-full bg-transparent px-2">
        <div className="container px-2 rounded-xl border-2 shadow-lg bg-white mx-auto flex items-center justify-between h-20 text-black">
          <FaBars
            className=" lg:hidden text-black w-6 h-6"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          {/* <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-blue-500 text-white rounded-md p-2 shadow-xl shadow-blue-gray-900/5"
          >
            
            {isSidebarOpen ? "Close" : "Open"}
          </button> */}
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer transition duration-300 hover:opacity-80">
              <Image
                src="/favicon.png"
                alt="Rental-Dai Logo"
                width={120}
                height={40}
              />
            </div>
          </Link>
          {/* Mobile Menu Toggle */}
          <div className={`lg:hidden ${showMenu ? "block" : "hidden"}`}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none transition duration-300 hover:opacity-80"
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
          <ul className="hidden lg:flex items-center space-x-4">
            {HeaderNav.map((item) =>
              item.subNavItems ? (
                <Dropdown displayHoverEffect={true} key={item.id} navItem={item} />
              ) : (
                <li key={item.id} className="relative overflow-hidden">
                  <Link href={item.navLink}>
                    <div
                      // className={`${
                      //   router.pathname === item.navLink
                      //     ? "underline"
                      //     : "hover:underline"
                      // } cursor-pointer text-black transition duration-300 hover:opacity-80`}
                      className={`hover:text-primary-600 transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary-600 after:bottom-0 after:-left-[100%] font-semiBold after:transition-all hover:after:left-0 ${
                        router.pathname === item.navLink &&
                        "after:left-0 text-primary-600"
                      }`}
                    >
                      {item.navItem}
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* Call-to-action Buttons */}
          <div className="flex items-center">
            <div className="text-black transition duration-300 hover:text-red mr-4 cursor-pointer">
              <Button
                containerStyles="py-2 px-2"
                type="outline"
                title="Join Us"
                onClick={handleClick}
              />
            </div>
            <div className="text-black transition duration-300 hover:text-black mr-4 cursor-pointer">
              <Button
                type="outline"
                title="Get started"
                onClick={handleStartClick}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Export the Header component
export default Header;
