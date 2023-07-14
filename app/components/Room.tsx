import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getRandomNumber } from "../utils/getRandomNumber";

type Props = {
  title: string;
  image: any;
  rating: number;
  pricePerNight: number;
  description: string;
};

function Room({ title, image, description, rating, pricePerNight }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <Link href={`/room/${title}`} passHref>
        <div className="overflow-hidden rounded-t-lg h-[14vw]">
          <Image
            src={`/assets/rooms/Standard Deluxe Room-${getRandomNumber(
              1,
              15
            )}.png`}
            alt={title}
            className="rounded-lg"
            width={500}
            height={300}
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-secondary-500 font-semibold">
            ${pricePerNight}/night
          </p>
        </div>
        <div className="flex items-center mb-2 text-secondary-500">
          {Array.from(Array(Math.floor(rating)), (_, index) => (
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
            ({rating.toFixed(1)})
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {description.toString().slice(0, 200)}...
        </p>
        <Link href={`/room/${title}`} passHref>
          <button className="bg-bean-500 hover:bg-opacity-75 text-white font-semibold py-2 px-4 rounded-lg w-full">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Room;
