// Import necessary icons
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Footer as FooterConst } from "../../constants";
import { UrlObject } from "url";
import { ReactElement } from "react";

// Define a type for social link
type SocialLink = {
  link?: string;
  icon: ReactElement;
};

const Footer = () => {
  const { BottomFooterNav, FooterNav } = FooterConst;

  return (
    <footer className="bg-neutral-100 text-black">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="self-start">
            <Image
              src="/favicon.png"
              alt="Rental Dai Logo"
              width="160"
              height="40"
            />
          </div>
          <div className="flex flex-wrap justify-around md:justify-start gap-20">
            {FooterNav.map((item, i) => (
              <div key={i} className="mb-4 md:mb-0">
                <h6 className="mb-2 text-black font-semibold text-lg">{item.navTitle}</h6>
                <ul className="flex flex-col gap-y-2">
                  {item.navItems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.navLink}>
                        <div className="transition-colors text-black hover:text-red-500">
                          {item.navItem}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-black border-opacity-25 mt-8 pt-4">
          <p className="text-sm text-black">{BottomFooterNav.copyright}</p>
          <ul className="flex gap-x-4 mt-4">
            {BottomFooterNav.socialLinks.map((link, index) => (
              <li key={index}>
                {link.link ? (
                  <Link href={link.link} passHref>
                    <div rel="noreferrer">
                      {link.icon}
                    </div>
                  </Link>
                ) : (
                  <div>
                    {link.icon}
                  </div>
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
