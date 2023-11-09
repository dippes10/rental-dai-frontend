import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import Button from '../Button';

// Import the Header object
import { Header as HeaderData, NavItemProps } from '../../constants';

interface HeaderProps {
  HeaderNav: NavItemProps[];
}

const handleClick = () => {
  router.push("/contact");
  setShowMenu(true);
};

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter();
    // Use the Header object data
    const HeaderNav = HeaderData.HeaderNav;
  
    return (
      <header>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/next.svg"
                  alt="Rental-Dai Logo"
                  width={120}
                  height={40}
                />
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-4">
              {/* Render navigation links horizontally */}
              {HeaderNav.map((item) => (
                <div key={item.id} className="relative group">
                  <Link href={item.navLink}>
                    <div
                      className={`${
                        router.pathname === item.navLink
                          ? 'underline'
                          : 'hover:underline'
                      } cursor-pointer`}
                    >
                      {item.navItem}
                    </div>
                  </Link>
                  {/* Render sub-navigation links if available */}
                  {item.subNavItems && (
                    <div className="lg:absolute left-0 mt-2 space-y-2 bg-white text-gray-700 lg:group-hover:block transition-all duration-300">
                      {item.subNavItems.map((subItem) => (
                        <Link key={subItem.id} href={subItem.navLink}>
                          <div className="block px-4 py-2 hover:bg-gray-200">
                            {subItem.navItem}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              {/* Your login and signup buttons */}
              <div
                className="text-gray-300 hover:text-white mr-4 transition duration-300 cursor-pointer"
              >
                <Button
                  type="outline"
                  title="Join RentalDai"
                  onClick={handleClick}
                />
              </div>
              <div
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 cursor-pointer"
              >
                Get started
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;

function setShowMenu(arg0: boolean) {
  throw new Error('Function not implemented.');
}
