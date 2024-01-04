// constants/index.ts
import { Key } from "react";

export const SiteMeta = {
  name: "RentalDai",
  description: "Real-Time House Renting Platform",
  url: "https://www.rentaldai.com",
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
      navLink: "/properties",
      subNavItems: [
        {
          id: "all-properties",
          navItem: "All Properties",
          navLink: "/properties/all",
        },
        {
          id: "featured-properties",
          navItem: "Featured Properties",
          navLink: "/properties/featured",
        },
      ],
    },
    {
      id: "profile",
      navItem: "Pofile",
      navLink: "/profile/lister-profile",
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
          navItem: "rentaldai2023@gmail.com",
          navLink: "mailto:rentaldai2023@gmail.com",
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

export const Homepage = {
  Message: {
    title: "Find Your Perfect Home with RentalDai",
    subTitle:
      "Welcome to RentalDai, your go-to platform for finding the perfect home for your needs. Whether you're looking for an apartment, house, or condo, we've got you covered. Start your search now!",
    cta: "Explore Properties",
    description: "Your dream home is just a click away.",
    featureCards: [
      {
        icon: "search",
        title: "Search Properties",
        description:
          "Browse through a wide range of properties to find the one that suits you.",
      },
      {
        icon: "heart",
        title: "Save Favorites",
        description:
          "Save your favorite properties so you can easily find and compare them later.",
      },
      {
        icon: "user",
        title: "Create an Account",
        description:
          "Sign up to unlock additional features and receive personalized recommendations.",
      },
      {
        icon: "phone",
        title: "Contact Agents",
        description:
          "Connect with real estate agents to get more information about properties.",
      },
    ],
  },

  Testimonial: {
    title: "What Our Users Say",
    subTitle: "",
    testimonials: [
      {
        avatar: "/user1.jpg",
        name: "John Doe",
        designation: "Homeowner",
        testimonial:
          "RentalDai made it easy for me to find the perfect home for my family. The process was smooth, and the platform is user-friendly.",
      },
      {
        avatar: "/user2.jpg",
        name: "Jane Smith",
        designation: "Tenant",
        testimonial:
          "I found my dream apartment on RentalDai. The search filters are powerful, and the property details are comprehensive.",
      },
      {
        avatar: "/user3.jpg",
        name: "Alex Johnson",
        designation: "Investor",
        testimonial:
          "As a real estate investor, RentalDai has been an invaluable tool for discovering profitable investment opportunities.",
      },
    ],
  },
};
