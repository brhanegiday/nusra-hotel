import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-bean-500 py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white py-3">
              Hotel Nusra
            </h2>
            <div className="items-center space-x-4 hidden lg:flex">
              <Link href="#" passHref legacyBehavior>
                <a href="#" className="text-white text-3xl hover:text-gray-200">
                  <FaFacebook size={20} />
                </a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <a href="#" className="text-white text-3xl hover:text-gray-200">
                  <FaTwitter size={20} />
                </a>
              </Link>

              <Link href="#" passHref legacyBehavior>
                <a href="#" className="text-white text-3xl hover:text-gray-200">
                  <FaInstagram size={20} />
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="md:w-3/5 mb-8 sm:mb-0">
              <p className="text-gray-300 mb-6">
                Our hotel has express check-in and checkout working 24 hours a
                day at the front desk. We outshine others with our dazzling
                restaurants and refreshing cafés. We also provide a separate
                smoking area for our smoking guests, ensuring their comfort
                while respecting the needs of our non-smoking guests.
              </p>
            </div>
            <div className="hidden lg:block">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Image
                    src="/assets/logo/Nusra Logo.png"
                    alt="Nusra Logo"
                    width={120}
                    height={45}
                    className="ml-auto"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#242424] py-5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-white">
              &copy; {new Date().getFullYear()} Nusra Hotel All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <div className="flex space-x-4">
                <Link legacyBehavior href="/privacy">
                  <a className="text-white bg-slate-black px-3 py-2 rounded-md hover:text-secondary-500">
                    Privacy
                  </a>
                </Link>
                <Link legacyBehavior href="/security">
                  <a className="text-white bg-slate-black px-3 py-2 rounded-md hover:text-secondary-500">
                    Security
                  </a>
                </Link>
                <Link legacyBehavior href="/terms">
                  <a className="text-white bg-slate-black px-3 py-2 rounded-md hover:text-secondary-500">
                    Terms
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
