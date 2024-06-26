
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import AOS from "aos";
import Dropdown from "./Dropdown";
import { Header as HeaderData, NavItemProps } from "../../constants";
import { Sidebar } from "../../components/sidebar";

interface HeaderProps {
  HeaderNav: NavItemProps[];
}

const Header: React.FC<HeaderProps> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const HeaderNav = HeaderData.HeaderNav;
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const isLoggedIn = () => {
    if (typeof window !== "undefined") {
      const isLoggedIn = Boolean(localStorage.getItem("access_token"));
      return isLoggedIn;
    }
    return false;
  };

  const handleClick = () => {
    router.push("/signup");
    setShowMenu(false);
  };

  const handleStartClick = () => {
    router.push("/login");
    setShowMenu(false);
  };

  const handleProfileClick = () => {
    router.push("/profile/lister-profile");
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/login");
  };

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      easing: "ease-out",
    });
    const loggedIn = isLoggedIn();
    setUserLoggedIn(loggedIn);
  }, []);

  return (
    <header>
      <Head>
        <title>Home Rental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <nav
        className="fixed z-40 pt-4 flex flex-row justify-center items-center w-full bg-transparent px-2"
        data-aos="fade-down"
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
                  data-aos="fade-right"
                />
              </div>
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className={`lg:hidden ${showMenu ? "block" : "hidden"}`}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none transition duration-300 hover:opacity-80"
              data-aos="fade-left"
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
          <ul className="hidden lg:flex md:flex items-center space-x-4 gap-2">
            {HeaderNav.filter((item) => {
              if (item.requireAuthentication === undefined) return true;
              if (item.requireAuthentication) return userLoggedIn;
              return true;
            }).map((item) =>
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
                      data-aos="fade-up" 
                    >
                      {item.navItem}
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* Call-to-action Buttons */}
          <div className="space-x-4 flex justify-center items-center bg-opacity-50">
            {userLoggedIn ? (
              <div  className="grid grid-cols-2 gap-2">

                <button
                  onClick={handleProfileClick}
                  className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-blue-500 to-gray-400 group-hover:from-blue-600 group-hover:to-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200"
                >
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                 className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-red-500 to-gray-400 group-hover:from-red-600 group-hover:to-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <div className="text-black transition duration-300 hover:text-red cursor-pointer">
                  <button
                    onClick={handleClick}
                    className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-600 group-hover:to-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                  >
                    Register
                  </button>
                </div>
                <div className="gap-2 text-black transition duration-300 hover:text-black cursor-pointer">
                  <button
                    onClick={handleStartClick}
                    className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-600 group-hover:to-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                  >
                    LogIn
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
