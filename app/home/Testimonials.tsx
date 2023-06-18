"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    avatar: "/assets/Avatar-1.png",
    name: "John Doe",
    position: "CEO, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.5,
  },
  {
    id: 2,
    avatar: "/assets/Avatar-2.png",
    name: "Jane Smith",
    position: "CTO, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 5.0,
  },
  {
    id: 3,
    avatar: "/assets/Avatar-3.png",
    name: "Michael Johnson",
    position: "Marketing Manager, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.2,
  },
  {
    id: 4,
    avatar: "/assets/Avatar-1.png",
    name: "Emily Davis",
    position: "Product Manager, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.8,
  },
  {
    id: 5,
    avatar: "/assets/Avatar-2.png",
    name: "David Thompson",
    position: "Software Engineer, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.7,
  },
  {
    id: 6,
    avatar: "/assets/Avatar-3.png",
    name: "Sarah Wilson",
    position: "Graphic Designer, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.3,
  },
  {
    id: 7,
    avatar: "/assets/Avatar-1.png",
    name: "Robert Anderson",
    position: "Sales Manager, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.6,
  },
  {
    id: 8,
    avatar: "/assets/Avatar-2.png",
    name: "Olivia Moore",
    position: "HR Manager, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.9,
  },
  {
    id: 9,
    avatar: "/assets/Avatar-3.png",
    name: "Daniel Harris",
    position: "Operations Manager, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.4,
  },
  {
    id: 10,
    avatar: "/assets/Avatar-1.png",
    name: "Sophia Martinez",
    position: "Finance Manager, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.7,
  },
  {
    id: 11,
    avatar: "/assets/Avatar-2.png",
    name: "William Turner",
    position: "Customer Support, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.2,
  },
  {
    id: 12,
    avatar: "/assets/Avatar-3.png",
    name: "Isabella Adams",
    position: "Marketing Coordinator, Company Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et.",
    rating: 4.6,
  },
  // Add more testimonials as needed
];
const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // const testimonialsPerPage = window.innerWidth < 640 ? 2 : 3;
  const testimonialsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const handleDotClick = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = currentPage * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-semibold mb-2">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Check out the testimonials from our satisfied clients
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="bg-bean-500 text-white rounded-full p-2 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <BsChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="bg-bean-500 text-white rounded-full p-2 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <BsChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 h-72">
              <div className="flex items-center mb-4 space-x-4 justify-between">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <FaQuoteRight className="text-bean-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <div className="mb-4">
                <p className="text-gray-700">{`"${testimonial.description}"`}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  {testimonial.rating} Stars
                </p>
                <p className="text-gray-500 text-sm">
                  - {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, page) => (
            <button
              key={page}
              className={`h-3 w-3 rounded-full mx-1 ${
                page === currentPage ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(page)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
