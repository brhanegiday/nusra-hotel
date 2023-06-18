"use client";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Room from "../components/Room";
import { rooms } from "../utils/roomsData";

const RoomsServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const roomsPerPage = window.innerWidth < 640 ? 4 : 6;
  const roomsPerPage = 6;
  const totalPages = Math.ceil(rooms.length / roomsPerPage);
  const startIndex = (currentPage - 1) * roomsPerPage;
  const endIndex = startIndex + roomsPerPage;
  const currentRooms = rooms.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="pt-20 bg-[#F8F8FA]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Rooms & Services</h2>
            <p className="text-lg text-gray-600">
              When you check in to our hotel rooms, you will check into your
              home miles and miles away from your house.{" "}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-bean-500 text-white rounded-full p-2 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <BsChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-bean-500 text-white rounded-full p-2 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <BsChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentRooms.map((room) => (
            <Room key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsServices;
