"use client";
import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import Room from "../components/Room";
import KeyFeatures from "./KeyFeatures";
import axios from "axios";
import { Root } from "../types/Rooms";

type Props = {};

function Page({}: Props) {
  const [roomsData, setRoomsData] = useState<Root>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchRooms = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms`
      );
      const data = await response.data;
      setRoomsData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <>
      <div className="bg-hero pt-20 bg-cover min-h-[70vh] -mt-[115px]">
        <div className="absolute inset-0 bg-opacity-80 bg-gray-900 h-[70vh]" />
        <div className="relative">
          <div className="text-center pt-32">
            <h1 className="text-4xl text-white font-semibold mb-4">
              Nusra Hotel Rooms
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto mb-10">
              Pick a room of your liking from our abundance of options.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8FA] py-6">
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <BookingForm />
          {isLoading && <h2 className="text-xl pt-5">Loading...</h2>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
            {roomsData?.rooms.slice(0, 5).map((room, id) => (
              <Room key={id} {...room} />
            ))}
          </div>
          <div className="pt-20">
            <KeyFeatures />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
