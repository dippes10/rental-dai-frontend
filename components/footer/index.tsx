import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,

  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Footer as FooterConst } from "../../constants";
import { ReactElement } from "react";

type SocialLink = {
  link?: string;
  icon: ReactElement;
};

const SocialMediaLinks: SocialLink[] = [
  {
    link: "https://www.facebook.com/RentalDai",
    icon: <FaFacebook className="text-xl hover:text-blue-600" />,
  },
  {
    link: "https://twitter.com/RentalDai",
    icon: <FaTwitter className="text-xl hover:text-blue-300" />,
  },
  {
    link: "https://instagram.com/RentalDai",
    icon: <FaInstagram className="text-xl hover:text-pink-600" />,
  },
  {
    link: "https://linkedin.com/RentalDai",
    icon: <FaLinkedin className="text-xl hover:text-blue-700" />,
  },
];

const Footer = () => {
  const { BottomFooterNav, FooterNav } = FooterConst;

  return (
    <footer className="bg-neutral-100 text-black pt-8 pb-6 bg-gradient-to-r from-gray-200 via-blue-300 to-red-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="w-full lg:w-auto">
            <Link
              href="/"
              passHref
              className="flex items-center justify-center lg:justify-start"
            >
              <Image
                src="/favicon.png"
                alt="Home Rental Logo"
                width={160}
                height={40}
                className="h-20"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-around gap-4 lg:gap-20 mt-4 lg:mt-0 w-full lg:w-auto">
            {FooterNav.map((item, i) => (
              <div key={i} className="w-full md:w-auto">
                <h6 className="mb-2 font-semibold text-lg">{item.navTitle}</h6>
                <ul className="list-none mb-0">
                  {item.navItems.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.navLink}
                        className="text-sm text-black hover:text-red-500 transition-colors"
                      >
                        {item.navItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4">
          <div className="flex flex-wrap items-center  justify-between">
            <div className="w-full lg:w-auto mb-4 lg:mb-0 text-center lg:text-left">
              <p className="text-sm">{BottomFooterNav.copyright}</p>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              {SocialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-gray-900 hover:text-blue-500 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
