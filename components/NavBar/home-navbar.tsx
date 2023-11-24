import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FaHome, FaCaretDown, FaUser, FaAddressBook, FaQuestion, FaMoon, FaSun, FaSearch } from 'react-icons/fa';

// Replace this with your actual Dropdown component
const Dropdown = () => {
  // Placeholder content for the user dropdown
  return (
    <div className="bg-white p-2 absolute top-12 right-0 shadow-md rounded-md">
      <p className="text-gray-800">User dropdown content here...</p>
    </div>
  );
};

export default function BigNav() {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Your other useEffect logic
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setDark(!dark);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <FaHome className="w-6 h-6" />
          </button>
          <button className="text-white">
            <FaCaretDown className="w-6 h-6" />
          </button>
          <button className="text-white">
            <FaUser className="w-6 h-6" />
          </button>
          <button className="text-white">
            <FaAddressBook className="w-6 h-6" />
          </button>
          <button className="text-white">
            <FaQuestion className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center space-x-4 relative">
          <form>
            <input
              type="search"
              id="default-search"
              className="bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none"
              placeholder="Search..."
              required
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <FaSearch className="w-5 h-5 text-white" />
            </button>
          </form>

          {/* User Dropdown */}
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}
