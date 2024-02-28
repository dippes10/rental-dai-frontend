// constants/index.ts
import { Key } from "react";

export const SiteMeta = {
  name: "RentalDai",
  description: "Real-Time House Renting Platform",
  url: "https://www.RentalDai.com",
};

export type NavItemProps = {
  id: Key | null | undefined;
  navItem: string;
  navLink: string;
  subNavItems?: NavItemProps[];
};

export const Header: { HeaderNav: NavItemProps[] } = {
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
      navLink: "/properties/all",
    },
  ],
};

export const Footer = {
  FooterNav: [
    {
      navTitle: "About us",
      navItems: [
        {
          navItem: "About",
          navLink: "/about-us",
        },
      ],
    },
    {
      navTitle: "Legal",
      navItems: [
        {
          navItem: "Terms & Conditions",
          navLink: "/legal/terms-and-conditions",
        },
        {
          navItem: "Privacy Policy",
          navLink: "/legal/privacy-policy",
        },
      ],
    },
    {
      navTitle: "Contact Us",
      navLink: "/contact-us",
      navItems: [
        {
          navItem: "(+977) 984-7845124",
          navLink: "tel:+9779844585288",
        },
        {
          navItem: "NCCS, paknakol, Kathmandu",
          navLink: "https://maps.app.goo.gl/NAmYnYo9MoxmXbgRA",
        },
        {
          navItem: "RentalDai2023@gmail.com",
          navLink: "mailto:RentalDai2023@gmail.com",
        },
      ],
    },
  ],

  BottomFooterNav: {
    copyright: `©${new Date().getFullYear()} RentalDai. All rights reserved.`,
    socialLinks: [
      {
        icon: "Facebook",
        link: "https://www.facebook.com/RentalDai",
      },
      {
        icon: "Twitter",
        link: "https://twitter.com/RentalDai",
      },
      {
        icon: "Instagram",
        link: "https://instagram.com/RentalDai",
      },
    ],
  },
};
