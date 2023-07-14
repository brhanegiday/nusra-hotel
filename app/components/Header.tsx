"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-10 py-5 px-6">
      <div className="container mx-auto max-w-7xl border-b-[#ddd] pb-7">
        <div className="flex justify-between items-center">
          <div className="lg:flex items-center">
            <div className="lg:hidden">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Image
                    src="/assets/logo/Nusra Logo.png"
                    alt="Nusra Logo"
                    width={120}
                    height={45}
                    className="mr-3"
                  />
                </a>
              </Link>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:block lg:flex-grow lg:items-center lg:w-auto`}
            >
              <div className="flex flex-col lg:flex-row">
                <Link href="/" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/" ? "text-secondary-500" : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/rooms" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/rooms"
                        ? "text-secondary-500"
                        : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Rooms
                  </a>
                </Link>
                <Link href="/restaurants" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/restaurants"
                        ? "text-secondary-500"
                        : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Restaurants
                  </a>
                </Link>
                <Link href="/spa" passHref legacyBehavior>
                  <a
                    className={`text-white hover:text-gray-300 text-md mx-3 py-2 px-4`}
                  >
                    Spa
                  </a>
                </Link>
                <Link href="/events" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/events"
                        ? "text-secondary-500"
                        : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Events
                  </a>
                </Link>
                {!isMenuOpen && (
                  <Link href="/" passHref legacyBehavior>
                    <a>
                      <Image
                        src="/assets/logo/Nusra Logo.png"
                        alt="Nusra Logo"
                        width={120}
                        height={45}
                        className="mr-3"
                      />
                    </a>
                  </Link>
                )}
                <Link href="/experiences" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/experiences"
                        ? "text-secondary-500"
                        : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Experiences
                  </a>
                </Link>
                <Link href="/gallery" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/gallery"
                        ? "text-secondary-500"
                        : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Gallery
                  </a>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                  <a
                    className={`${
                      pathname === "/contact"
                        ? "text-secondary-500"
                        : "text-white"
                    } hover:text-secondary-500 text-md mx-3 py-2 px-4`}
                  >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              className="text-white hover:text-gray-300"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r nowrap from-bean-500 to-carmine-500 hover:bg-opacity-75 text-white hover:text-gray-100  py-2 px-4 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
