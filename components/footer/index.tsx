import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
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
    icon: <FaFacebook />,
  },
  {
    link: "https://twitter.com/RentalDai",
    icon: <FaTwitter />,
  },
  {
    link: "https://instagram.com/RentalDai",
    icon: <FaInstagram />,
  },
  {
    link: "https://tiktok.com/RentalDai",
    icon: <FaTiktok />,
  },
  {
    link: "https://linkedin.com/RentalDai",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  const { BottomFooterNav, FooterNav } = FooterConst;

  return (
    <footer className="bg-neutral-100 text-black">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="self-start flex-shrink-0">
            <Image
              src="/favicon.png"
              alt="Rental Dai Logo"
              width={160}
              height={40}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-around md:justify-start gap-4 md:gap-20 mt-4 md:mt-0">
            {FooterNav.map((item, i) => (
              <div key={i} className="mb-4 md:mb-0">
                <h6 className="mb-2 text-black font-semibold text-lg">
                  {item.navTitle}
                </h6>
                <ul className="flex flex-col gap-y-2">
                  {item.navItems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.navLink} className="transition-colors text-black hover:text-red-500">
                          {item.navItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-black border-opacity-25 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-black mb-4 md:mb-0 text-center md:text-left">
            {BottomFooterNav.copyright}
          </div>
          <ul className="flex gap-x-4">
            {SocialMediaLinks.map((link, index) => (
              <li key={index} className="text-red-500 hover:text-blue-500">
                {link.link ? (
                  <Link href={link.link} passHref>
                    {link.icon}
                  </Link>
                ) : (
                  <>{link.icon}</>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
