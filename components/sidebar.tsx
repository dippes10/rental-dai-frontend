import * as React from "react";
import { useRouter } from "next/router";
import {
  FaTimes,
  FaHome,
  FaBuilding,
  FaInfoCircle,
  FaPhoneAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import SidebarImage from "../public/favicon.png"; // Import your image file
import Image from "next/image";

const items = [
  { label: "Home", icon: <FaHome size={20} />, path: "/" },
  {
    label: "Properties",
    icon: <FaBuilding size={20} />,
    badgeCount: 3,
    path: "../properties/all",
  },
  { label: "About Us", icon: <FaInfoCircle size={20} />, path: "../about-us" },
  { label: "Contact Us", icon: <FaPhoneAlt size={20} />, path: "../contact" },
  { label: "Log Out", icon: <FaSignOutAlt size={20} />, path: "/logout" },
];

export function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    // Close the sidebar before navigating
    setIsOpen(false);

    // Navigate to the specified path
    router.push(path);
  };

  const sideNavRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: any) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      // Clicked outside the side navigation bar, close it
      // Implement your close side navigation bar logic here
      setIsOpen(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div
          onBlur={() => {
            setIsOpen(false);
          }}
          ref={sideNavRef}
          className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-red-gray-900/5 fixed inset-0 top-0 z-50 grid-flow-row auto-rows-max overflow-auto pb-32 animate-in slide-in-from-bottom-80"
        >
          <div className="mb-4 p-4">
            {/* Add an image here */}
            <Image
              src={SidebarImage}
              alt="Sidebar Image"
              className="mb-4 w-full h-auto"
            />

            <h5 className="text-2xl font-sans font-semibold text-gray-900 leading-snug">
              Rental Dai
            </h5>
            <div>
              <FaTimes
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="absolute w-6 h-6 right-4 top-4 text-gray-500 cursor-pointer"
              />
            </div>
          </div>
          <nav className="flex flex-col gap-2 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            {items.map((item, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => handleItemClick(item.path)}
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80
                 focus:bg-red-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none cursor-pointer"
              >
                <div className="grid place-items-center mr-4">{item.icon}</div>
                <span className="flex-1">{item.label}</span>
                {item.badgeCount && (
                  <div className="flex items-center ml-auto">
                    <div
                      className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-1 px-2 text-xs rounded-full"
                      style={{
                        opacity: 1,
                      }}
                    >
                      <span className="">{item.badgeCount}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
