import Link from "next/link";
import { BsDashLg } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="bg-hero-pattern min-h-screen bg-cover -mt-[112px]">
      <div className="absolute inset-0 bg-opacity-70  bg-gray-900 min-h-screen" />
      <div className="relative overflow-hidden">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-10">
            <div className="text-center pt-20">
              <div className="flex gap-2 items-center justify-center py-6">
                <div className="h-[2px] w-6 bg-[#EDA83B]" />
                <h2 className="text-xl md:text-2xl text-[#EDA83B] font-semibold">
                  Relax Your Mind
                </h2>
                <div className="h-[2px] w-6 bg-[#EDA83B]" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-bold mb-8">
                Nusra Hotel & Spa
              </h1>
              <p className="text-white text-lg sm:text-xl max-w-4xl mx-auto mb-10">
                Welcome to Nusra Hotel & Spa, a sanctuary of luxury and
                tranquility nestled in the heart of a picturesque destination.
                Discover a world where opulence meets serenity, where impeccable
                service and attention to detail are paramount, and where every
                moment is designed to exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center my-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" passHref legacyBehavior>
                  <a className="bg-gradient-to-r from-bean-500 to-carmine-500 hover:bg-opacity-75 text-white hover:text-gray-100 font-semibold py-3 px-8 rounded-lg">
                    Contact Us
                  </a>
                </Link>
                <Link href="/book" passHref legacyBehavior>
                  <a className="bg-gradient-to-r from-bean-500 to-carmine-500 hover:bg-opacity-75 text-white hover:text-gray-100 font-semibold py-3 px-8 rounded-lg">
                    Book Now
                  </a>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center my-10 bg-white px-5 py-10 rounded-md">
                <div className="mb-4 sm:mr-4">
                  <label
                    htmlFor="arrivalDate"
                    className="text-black block mb-2"
                  >
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    id="arrivalDate"
                    className="py-2 px-4 rounded-lg bg-gray-100"
                  />
                </div>
                <div className="mb-4 sm:mr-4">
                  <label
                    htmlFor="departureDate"
                    className="text-black block mb-2"
                  >
                    Departure Date
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    className="py-2 px-4 rounded-lg bg-gray-100"
                  />
                </div>
                <div className="mb-4 sm:mr-4">
                  <label
                    htmlFor="numberOfPeople"
                    className="text-black block mb-2"
                  >
                    Number of People
                  </label>
                  <input
                    type="number"
                    id="numberOfPeople"
                    className="py-2 px-4 rounded-lg bg-gray-100"
                  />
                </div>
                <div>
                  <button className="bg-gradient-to-r from-bean-500 to-carmine-500 hover:bg-opacity-75 text-white hover:text-gray-100 font-semibold py-3 px-8 rounded-lg">
                    Book A Stay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 opacity-80 rounded-2xl px-6 py-8 h-96 absolute right-1 top-[30%] hidden lg:block">
          <div className="relative h-full">
            <div>
              <div className="text-gray-300 text-lg">Up Next</div>
              <h3 className="text-xl sm:text-xl lg:text-3xl text-white py-6">
                View Of the <br />
                Rooms
              </h3>
            </div>
            <div className="text-white absolute left-0 top-[80%]">
              <Link href="/rooms" passHref legacyBehavior>
                <a>
                  <HiOutlineArrowNarrowRight color="#fff" size={32} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
