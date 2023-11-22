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
        id: "properties",
        navItem: "Properties",
        navLink: "/properties",
        subNavItems: [
          {
            id: "all-properties",
            navItem: "All Properties",
            navLink: "/PropertiesPage",
          },
          {
            id: "featured-properties",
            navItem: "Featured Properties",
            navLink: "/featured-properties",
          },
          {
            id: "featured-properties",
            navItem: "Featured Properties",
            navLink: "/featured-properties",
          }, 
        ],
      },
      {
        id: "about-us",
        navItem: "About us",
        navLink: "/about-us",
      },
      {
        id: "contact-us",
        navItem: "Contact Us",
        navLink: "/contact",
      },
      {
        id: "sign-up",
        navItem: "Sign Up",
        navLink: "/sign-up",
        subNavItems: [
          {
            id: "signup-lister",
            navItem: "Lister Signup",
            navLink: "/lister-signup",
          },
          {
            id: "signup-user",
            navItem: "User Signup",
            navLink: "/user-signup",
          },
          {
            id: "Lister-Form",
            navItem: "Lister Form",
            navLink: "",
          },
          {
            id: "lister-profile",
            navItem: "Lister Profile",
            navLink: "profile/lister-profile",
          },
        ],
      },
      {
        id: "profile",
        navItem: "Profile",
        navLink: "/[profile]",
        subNavItems: [
          {
            id: "user-profile",
            navItem: "User Profile",
            navLink: "/user-profile",
          },
          {
            id: "lister-profile",
            navItem: "Lister Profile",
            navLink: "/lister-profile",
          },
        ],
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
            navLink: "/terms-and-conditions",
          },
          {
            navItem: "Privacy Policy",
            navLink: "/privacy-policy",
          },
        ],
      },
      {
        navTitle: "Contact Us",
        navLink: "/contact-us",
        navItems: [
          {
            navItem: "(+1) 123-456-7890",
            navLink: "tel:+11234567890",
          },
          {
            navItem: "123 RentalDai St, City",
            navLink: "https://goo.gl/maps/rentaldai-location",
          },
          {
            navItem: "info@rentaldai.com",
            navLink: "mailto:info@rentaldai.com",
          },
        ],
      },
    ],
  
    BottomFooterNav: {
      copyright: `©${new Date().getFullYear()} RentalDai. All rights reserved.`,
      socialLinks: [
        {
          icon: "facebook",
          link: "https://www.facebook.com/RentalDai",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/RentalDai",
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
          description: "Browse through a wide range of properties to find the one that suits you.",
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
          description: "Sign up to unlock additional features and receive personalized recommendations.",
        },
        {
          icon: "phone",
          title: "Contact Agents",
          description: "Connect with real estate agents to get more information about properties.",
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
  
  