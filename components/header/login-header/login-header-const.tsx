// constants/index.ts
import { Key } from "react";
export type NavItemProps = {
  id: Key | null | undefined;
  navItem: string;
  navLink: string;
  subNavItems?: NavItemProps[];
};

export const loginHeader: { HeaderNav: NavItemProps[] } = {
  HeaderNav: [
    {
      id: "home",
      navItem: "Home",
      navLink: "/",
    },
    {
      id: "about-us",
      navItem: "About Us",
      navLink: "/about-us",
    },
    {
      id: "contact-us",
      navItem: "Contact Us",
      navLink: "/contact",
    },

    {
      id: "properties",
      navItem: "Properties",
      navLink: "/properties",
      subNavItems: [
        {
          id: "all-properties",
          navItem: "All Properties",
          navLink: "/properties/all",
        },
        
      ],
    },
    
  ],
};