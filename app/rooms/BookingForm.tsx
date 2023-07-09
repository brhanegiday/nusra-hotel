"use client";
import { useState } from "react";
import { HiUser, HiMail, HiUserGroup, HiHome } from "react-icons/hi";
import { useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

type BookingFormProps = {};

const BookingForm: React.FC<BookingFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/booking/", data);
      console.log(response.data);
      reset();
      setIsLoading(false);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
      label: "Full name",
      type: "text",
      name: "name",
      placeholder: "Please enter your name",
      Icon: (
        <HiUser size={23} className="absolute text-gray-500 top-3 left-3" />
      ),
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      Icon: (
        <HiMail size={23} className="absolute text-gray-500 top-3 left-3" />
      ),
    },
    {
      label: "Arrival Date",
      type: "date",
      name: "arrivalDate",
      Icon: (
        <HiHome size={23} className="absolute text-gray-500 top-3 left-3" />
      ),
    },
  ];

  return (
    <div className="-mt-[200px] bg-white max-w-6xl mx-auto p-10 pt-6 border-[#D8D8D8] rounded-lg shadow-md relative">
      <ToastContainer />
      <div className="flex gap-x-2 py-6 w-full border-b items-center mb-10">
        <Image width={30} height={30} src={"/assets/gps.svg"} alt="Booking" />
        <h1 className="text-2xl font-semibold">Booking Form</h1>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inputformData.map((form, index) => (
            <InputForm
              key={index}
              {...form}
              name={form.name}
              register={register}
              errors={errors}
            />
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
                {...register("guests")}
                name="guests"
                className="input-airbnb"
                style={inputStyle}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
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
                {...register("rooms")}
                name="rooms"
                className="input-airbnb"
                style={inputStyle}
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
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
              {...register("comment")}
              name="comment"
              className="input-airbnb textarea-airbnb text-gray-800"
              rows={5}
              placeholder="Additional info or comment"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #dddfe2",
                borderRadius: "8px",
                padding: "10px 12px",
                width: "100%",
                transition: "border-color 0.3s ease-in-out",
                resize: "vertical",
                paddingLeft: "1rem",
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-bean-500 text-white font-medium py-3 px-12 rounded-md transition duration-300 ease-in-out hover:bg-bean-600"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <ClipLoader
                size={14}
                color="white"
                loading={true}
                className="mr-2"
              />
              Submitting...
            </>
          ) : (
            "Book Now"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
