import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaShuttleVan,
  FaSpa,
  FaDumbbell,
  FaUtensils,
  FaBed,
  FaParking,
  FaBan,
  FaGlassCheers,
  FaCoffee,
} from "react-icons/fa";

type RoomData = {
  id: string;
  title: string;
  image: string;
  rating: number;
  pricePerNight: number;
  description: string;
  location: string;
  houseRules: string[];
  additionalPhotos: string[];
  services: Services[];
};
type Services = {
  icon: any;
  title: string;
};

type RoomPageProps = {
  roomData: RoomData;
};

function Room() {
  const roomData = {
    title: "Standard Deluxe Room",
    image: `/assets/rooms/Standard Deluxe Room-${
      Math.floor(Math.random() * (11 - 1 + 1)) + 1
    }.png`,
    rating: 4.5,
    pricePerNight: 170,
    description:
      "Located in Addis Ababa, a 6-minute walk from UNECA Conference Center, The Grand Palace Hotel provides accommodations with a fitness center, free private parking, a shared lounge and a restaurant. This 5-star hotel offers an ATM and a concierge service. The property has a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.",
    location:
      "The Grand Palace Hotel Guinea Conakry St, Kirkos, 5710 Addis Ababa, Ethiopia",
    services: [
      { icon: FaWifi, title: "Free WiFi" },
      { icon: FaShuttleVan, title: "Airport shuttle (free)" },
      { icon: FaSpa, title: "Spa" },
      { icon: FaDumbbell, title: "Fitness center" },
      { icon: FaUtensils, title: "Restaurant" },
      { icon: FaBed, title: "Family rooms" },
      { icon: FaParking, title: "Free parking" },
      { icon: FaBan, title: "Non-smoking rooms" },
      { icon: FaGlassCheers, title: "Bar" },
      { icon: FaCoffee, title: "Good Breakfast" },
    ],
    houseRules: ["No smoking", "No pets", "No parties"],
    additionalPhotos: [
      `/assets/rooms/Standard Deluxe Room-${
        Math.floor(Math.random() * (11 - 1 + 1)) + 1
      }.png`,
      `/assets/rooms/Standard Deluxe Room-${
        Math.floor(Math.random() * (11 - 1 + 1)) + 1
      }.png`,
      `/assets/rooms/Standard Deluxe Room-${
        Math.floor(Math.random() * (11 - 1 + 1)) + 1
      }.png`,
      `/assets/rooms/Standard Deluxe Room-${
        Math.floor(Math.random() * (11 - 1 + 1)) + 1
      }.png`,
    ],
  };

  return (
    <>
      <div className="bg-gradient-to-r from-bean-700 to-primary-400 bg-opacity-80 min-h-[80px] -mt-[112px]"></div>

      <div className="container mx-auto max-w-7xl px-4 py-16 pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src={roomData.image}
            alt={roomData.title}
            width={1200}
            height={1200}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {roomData.additionalPhotos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`Additional Photo ${index + 1}`}
                width={640}
                height={500}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 my-8 gap-28">
          <div className="col-span-3">
            <h2 className="text-2xl font-semibold">{roomData.title}</h2>

            <p className="text-md mt-2">{roomData.description}</p>
            <br />
            <p>
              Popular points of interest near the accommodation include UN
              Conference Centre Addis Ababa, Addis Ababa Museum and National
              Palace. The nearest airport is Addis Ababa Bole International
              Airport, 3.7 miles from The Grand Palace Hotel.
            </p>
            <h2 className="text-xl mt-8 font-semibold">
              Most popular facilities
            </h2>

            <div className="flex flex-wrap mt-3">
              {roomData.services.map((service, index) => (
                <div key={index} className="flex items-center mb-2 mr-6">
                  {React.createElement(service.icon, {
                    className: "text-md text-bean-500 mr-2",
                  })}
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <Link href={"/rooms"} passHref>
              <button className="bg-gradient-to-r from-bean-500 to-carmine-500 hover:bg-opacity-75 text-white hover:text-gray-100 font-semibold py-3 px-8 rounded-lg">
                Reserve
              </button>
            </Link>
            <div className="flex gap-x-2 mt-5">
              <p className="font-semibold">Rating:</p>
              <div className="flex items-center mb-2 text-yellow-500">
                {Array.from(Array(Math.floor(roomData.rating)), (_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.47 7.53h7.77L16.97 14l2.47 7.47-6.47-4.98L5.53 21.47 8 14 2 9.53h7.77z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  ({roomData.rating.toFixed(1)})
                </span>
              </div>
            </div>
            <div className="flex gap-x-2 mt-2">
              <p className="font-semibold">Guest reviews:</p>
              <p>467</p>
            </div>
            <div className="flex gap-x-2 mt-2">
              <p className="font-semibold">Price:</p>
              <p>${roomData.pricePerNight}/night</p>
            </div>

            <div className="flex gap-x-2 mt-2">
              <p className="font-semibold">Location:</p>
              <p>{roomData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;
