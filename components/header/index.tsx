// Import necessary modules and components
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';
import Dropdown from './Dropdown';
import { Header as HeaderData, NavItemProps } from '../../constants';

// Your existing Header component
interface HeaderProps {
  HeaderNav: NavItemProps[];
}

const Header: React.FC<HeaderProps> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const HeaderNav = HeaderData.HeaderNav;

  const handleClick = () => {
    router.push('/signup-page');
    setShowMenu(false);
  };
  
  return (
    <header>
      <nav className="bg-green-200 text-white p-4">
        <div className="container mx-auto flex items-center justify-between h-20 text-black">
          <Link href="/">
            <div className="flex items-center cursor-pointer transition duration-300 hover:opacity-80">
              <Image src="/next.svg" alt="Rental-Dai Logo" width={120} height={40} />
            </div>
          </Link>
          <div className={`lg:hidden ${showMenu ? 'block' : 'hidden'}`}>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {HeaderNav.map((item) => (
              <div key={item.id} className="relative group">
                {item.subNavItems ? (
                  <Dropdown navItem={item} />
                ) : (
                  <Link href={item.navLink}>
                    <div
                      className={`${
                        router.pathname === item.navLink ? 'underline' : 'hover:underline'
                      } cursor-pointer text-black transition duration-300 hover:opacity-80`}
                    >
                      {item.navItem}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="text-black transition duration-300 hover:text-red mr-4 cursor-pointer">
              <Button type="outline" title="Join RentalDai" onClick={handleClick} />
            </div>
            <div className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300 cursor-pointer">
              Get started
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
