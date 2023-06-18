"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { HiUser, HiMail, HiUserGroup, HiHome, HiPencil } from "react-icons/hi";
import { SiGooglemarketingplatform } from "react-icons/si";
import InputForm from "../components/InputForm";
import Image from "next/image";

type BookingFormProps = {};

const BookingForm: React.FC<BookingFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [guests, setGuests] = useState("1");
  const [rooms, setRooms] = useState("1");
  const [comment, setComment] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleArrivalDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(e.target.value);
  };

  const handleGuestsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGuests(e.target.value);
  };

  const handleRoomsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRooms(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };
  const inputStyle = {
    backgroundColor: "#fff",
    border: "1px solid #dddfe2",
    borderRadius: "8px",
    padding: "10px 12px",
    width: "100%",
    transition: "border-color 0.3s ease-in-out",
    paddingLeft: "2.5rem",
  };

  const inputformData = [
    {
      label: "Name",
      type: "text",
      id: "name",
      placeholder: "Please enter your name",
      Icon: (
        <HiUser size={23} className="absolute text-gray-500 top-3 left-3" />
      ),
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "Enter your email",
      Icon: (
        <HiMail size={23} className="absolute text-gray-500 top-3 left-3" />
      ),
    },
    {
      label: "Arrival Date",
      type: "date",
      id: "arrivalDate",
      Icon: (
        <HiHome size={23} className="absolute text-gray-500 top-3 left-3" />
      ),
    },
  ];

  return (
    <div className="-mt-[200px] bg-white max-w-6xl mx-auto p-10 pt-6 border-[#D8D8D8] rounded-lg shadow-md relative">
      <div className="flex gap-x-2 py-6 w-full border-b items-center mb-10">
        <Image width={30} height={30} src={"/assets/gps.svg"} alt="Booking" />
        <h1 className="text-2xl font-semibold">Booking Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inputformData.map((form, index) => (
            <InputForm key={index} {...form} />
          ))}
          <div>
            <label
              htmlFor="guests"
              className="block text-gray-700 font-medium mb-1"
            >
              Guests
            </label>
            <div className="relative">
              <select
                id="guests"
                className="input-airbnb"
                value={guests}
                onChange={handleGuestsChange}
                style={inputStyle}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
              </select>
              <HiUserGroup
                size={22}
                className="absolute text-gray-500 top-3 left-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="rooms"
              className="block text-gray-700 font-medium mb-1"
            >
              Rooms
            </label>
            <div className="relative">
              <select
                id="rooms"
                className="input-airbnb"
                value={rooms}
                onChange={handleRoomsChange}
                style={inputStyle}
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
              </select>
              <HiHome
                size={22}
                className="absolute text-gray-500 top-3 left-3"
              />
            </div>
          </div>
        </div>
        <div className="my-6">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-medium mb-1"
          >
            Comment
          </label>
          <div className="relative">
            <textarea
              id="comment"
              className="input-airbnb textarea-airbnb"
              rows={5}
              placeholder="Additional info or comment"
              value={comment}
              onChange={handleCommentChange}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #dddfe2",
                borderRadius: "8px",
                padding: "10px 12px",
                width: "100%",
                transition: "border-color 0.3s ease-in-out",
                resize: "vertical",
                paddingLeft: "2.3rem",
              }}
            />
            <HiPencil className="absolute text-gray-500 top-3 left-3" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-bean-500 text-white font-medium py-3 px-12 rounded-md transition duration-300 ease-in-out hover:bg-bean-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
