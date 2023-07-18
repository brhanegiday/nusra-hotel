"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import { Reviews } from "../types/Reviews";
import urlBuilder from "../utils/urlBuilder";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsData, setReviewsData] = useState<Reviews>();
  const [isLoading, setIsLoading] = useState(false);

  // const reviewsPerPage = window.innerWidth < 640 ? 2 : 3;
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData?.data?.length! / reviewsPerPage);

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

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_API}/reviews?populate=*`
      );
      const data = await response.data;
      setReviewsData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviewsData?.data.slice(startIndex, endIndex);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-semibold mb-2">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Check out the reviews from our satisfied clients
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
        {isLoading && <h2 className="text-xl">Loading...</h2>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentReviews?.map((review, index) => (
            <div key={review.id} className="bg-white rounded-lg p-6 h-72">
              <div className="flex items-center mb-4 space-x-4 justify-between">
                <img
                  src={urlBuilder(review.attributes.avatar.data.attributes.url)}
                  alt={review.attributes.avatar.data.attributes.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <FaQuoteRight className="text-bean-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">
                {review.attributes.name}
              </h3>
              <div className="mb-4">
                <p className="text-gray-700">{`"${review.attributes.comment}"`}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  {review.attributes.rating} Stars
                </p>
                <p className="text-gray-500 text-sm">
                  - {review.attributes.position}
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

export default Reviews;
