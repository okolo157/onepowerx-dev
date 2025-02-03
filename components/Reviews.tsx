"use client";

import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const reviews = [
  {
    id: 1,
    text: "This service is amazing! It has made my life so much easier.",
    author: "Mr Jude",
  },
  {
    id: 2,
    text: "I love how secure and convenient the payment process is.",
    author: "Praise",
  },
  {
    id: 3,
    text: "Excellent customer service and easy to use.",
    author: "David Ola",
  },
  {
    id: 4,
    text: "Highly recommended! The platform is intuitive and reliable.",
    author: "Samuel Ade",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-12 flex flex-col mt-24 items-center justify-center gap-7 relative">
      <h2 className="font-bold text-[50px] text-center text-white mb-8">
        What Our Users Say About Us
      </h2>
      <div className="w-full max-w-4xl relative">
        <div className="bg-white p-8 px-14 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
          <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />
          <p className="text-lg text-gray-800 italic">
            {reviews[currentReview].text}
          </p>
          <FaQuoteRight className="text-gray-400 text-2xl mt-4 ml-auto" />
          <p className="text-right text-gray-600 mt-4 font-semibold">
            - {reviews[currentReview].author}
          </p>
        </div>
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <IoIosArrowBack className="text-[#1B5383]" />
        </button>
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <IoIosArrowForward className="text-[#1B5383]" />
        </button>
      </div>
      <div className="flex gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReview(index)}
            className={`w-3 h-3 rounded-full ${
              currentReview === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
