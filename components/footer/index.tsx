import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Footer as FooterConst } from "../../constants";
import { UrlObject } from "url";

const Footer = () => {
  const { BottomFooterNav, FooterNav } = FooterConst;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="self-start">
            <Image
              src="/rental-dai-logo.png" // Update with your Rental Dai logo
              alt="Rental Dai Logo"
              width="75"
              height="75"
            />
          </div>
          <div className="flex flex-wrap justify-around md:justify-start">
            {FooterNav.map(
              (
                item: {
                  navTitle: string;
                  navItems: { navLink: string | UrlObject; navItem: string }[];
                },
                i: React.Key | null | undefined
              ) => (
                <div key={i} className="mb-4 md:mb-0">
                  <h6 className="mb-2 font-semibold text-lg">{item.navTitle}</h6>
                  <ul className="flex flex-col gap-y-2">
                    {item.navItems.map(
                      (
                        item: {
                          navLink: string | UrlObject;
                          navItem: string;
                        },
                        i: React.Key | null | undefined
                      ) => (
                        <li key={i}>
                          <Link href={item.navLink}>
                            <a className="transition-colors hover:text-primary-500">
                              {item.navItem}
                            </a>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        <div className="border-t border-white border-opacity-25 mt-8 pt-4">
          <p className="text-sm text-gray-500">{BottomFooterNav.copyright}</p>
          <ul className="flex gap-x-4 mt-4">
            {BottomFooterNav.socialLinks.map(
              (
                link: { link: string | undefined; icon: string },
                index: React.Key | null | undefined
              ) => (
                <li key={index}>
                  <a href={link.link} target="_blank" rel="noreferrer">
                    <i className={`fab ${link.icon} text-white hover:text-blue-800`} />
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
