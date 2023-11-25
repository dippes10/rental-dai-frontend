import React, { useState, useCallback } from "react";
import Link from "next/link";
import { NavItemProps } from "../../constants";

interface DropdownProps {
  navItem: NavItemProps;
  displayHoverEffect?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ navItem, displayHoverEffect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeDropdown = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  }, []);

  return (
    <div className="relative px-4" onBlur={closeDropdown}>
      <button
        className={`text-center inline-flex items-center ${
          displayHoverEffect
            ? "hover:text-primary-500 hover:border-b-2 hover:border-primary-500 focus:outline-none transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] font-semiBold after:transition-all"
            : ""
        }`}
        type="button"
        onClick={toggleDropdown}
      >
        {navItem.navItem}{" "}
        <svg
          className={`w-4 h-4 ml-2 ${isOpen && "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute mt-2 overflow-visible z-20 ${
          !isOpen ? "hidden" : ""
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <ul className="py-2 text-sm text-white">
          {navItem.subNavItems?.map((subNavItem, index) => (
            <li key={index}>
              <Link
                href={subNavItem.navLink}
                passHref
                className="block px-4 py-2 hover:bg-red-50"
              >
                {subNavItem.navItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
