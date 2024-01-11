"use client";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import urlBuilder from "../utils/urlBuilder";

// const images = [
//   "/assets/images/hero-pattern.jpg",
//   "/assets/images/1666000424slide1.jpg",
//   "/assets/images/1666000471slide2.jpg",
//   "/assets/images/1666000518slide3.jpg",
//   "/assets/images/1666000549slide4.jpg",
// ];

const HeroSection = () => {
  const [backgroundClass, setBackgroundClass] = useState("bg-slide1");
  const [backgroundImages, setBackgroundImages] = useState(["bg-slide1"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const backgroundClasses = [
    "bg-slide1",
    "bg-slide2",
    "bg-slide3",
    "bg-slide4",
    "bg-slide5",
  ];

  useEffect(() => {
    const fetchBackgroundImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios(
          `${process.env.NEXT_PUBLIC_API_URL}/headers`
        );
        const data = await response.data;
        const images = data.data[0].attributes.sliders.data.map(
          (slide: any) => slide.attributes.url
        );

        setBackgroundImages(images);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBackgroundImages();
  }, []);

  const handleNextImage = () => {
    const currentIndex = backgroundClasses.indexOf(backgroundClass);
    const nextIndex = (currentIndex + 1) % backgroundClasses.length;
    setBackgroundClass(backgroundClasses[nextIndex]);
  };
  // const handleNextImage = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex + 1) % backgroundImages.length
  //   );
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    const today = new Date();
    const selectedArrivalDate = new Date(data.arrivalDate);
    const selectedDepartureDate = new Date(data.departureDate);

    if (selectedArrivalDate < today || selectedDepartureDate < today) {
      toast.error("Please select dates that are not in the past.");
      return;
    }

    if (selectedArrivalDate >= selectedDepartureDate) {
      toast.error(
        "Arrival date cannot be later than or equal to the departure date."
      );
      return;
    }

    reset();
  };

  return (
    <div
      className="bg-gradient-to-r from-bean-500 to-primary-500 min-h-screen bg-opacity-80 -mt-[115px] 
    transition-all duration-500 ease-in-out filter backdrop-brightness-110 contrast-200"
    >
      <ToastContainer />
      <div className="relative overflow-hidden">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-10">
            <div className="text-center pt-20">
              <div className="flex gap-2 items-center justify-center py-6">
                <div className="h-[2px] w-6 bg-secondary-500" />
                <h2 className="text-xl md:text-2xl text-secondary-500 font-semibold">
                  Relax Your Mind
                </h2>
                <div className="h-[2px] w-6 bg-secondary-500" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl text-white font-bold mb-8">
                Nusra Hotel & Spa
              </h1>
              <p className="text-white text-md max-w-4xl mx-auto mb-10">
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
              <div className="bg-white p-5 my-10  rounded-md">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex sm:flex-row justify-center items-center"
                >
                  <div className="mb-4 sm:mr-4">
                    <label
                      htmlFor="arrivalDate"
                      className="text-black block mb-2"
                    >
                      Arrival Date
                    </label>
                    <input
                      type="datetime-local"
                      id="arrivalDate"
                      className="py-2 px-4 rounded-lg bg-white border border-gray-400"
                      {...register("arrivalDate", { required: true })}
                    />
                    {errors.arrivalDate && (
                      <p className="text-red-500">Arrival date is required.</p>
                    )}
                  </div>
                  <div className="mb-4 sm:mr-4">
                    <label
                      htmlFor="departureDate"
                      className="text-black block mb-2"
                    >
                      Departure Date
                    </label>
                    <input
                      type="datetime-local"
                      id="departureDate"
                      className="py-2 px-4 rounded-lg bg-white border border-gray-400"
                      {...register("departureDate", { required: true })}
                    />
                    {errors.departureDate && (
                      <p className="text-red-500">
                        Departure date is required.
                      </p>
                    )}
                  </div>
                  <div className="mb-4 sm:mr-4">
                    <label
                      htmlFor="numberOfPeople"
                      className="text-black block mb-2"
                    >
                      Number of People
                    </label>
                    <input
                      defaultValue={1}
                      type="number"
                      id="numberOfPeople"
                      className="py-2 px-4 rounded-lg bg-white border border-gray-400"
                      {...register("numberOfPeople", {
                        required: true,
                        min: 1,
                      })}
                    />
                    {errors.numberOfPeople && (
                      <p className="text-red-500">
                        Number of people must be at least 1.
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-bean-500 to-carmine-500 hover:bg-opacity-75 text-white hover:text-gray-100 font-semibold py-3 px-8 rounded-lg"
                    >
                      Book A Stay
                    </button>
                  </div>
                </form>
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
            <div
              className="text-white absolute left-0 top-[80%] cursor-pointer"
              onClick={handleNextImage}
            >
              <HiOutlineArrowNarrowRight color="#fff" size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
