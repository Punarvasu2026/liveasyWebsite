import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "./assets/404_illustration.webp"; // Replace with your actual image path

const Error404Page = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFC] flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <img
          src={ErrorImage}
          alt="404 Illustration"
          className="w-full max-w-xs mx-auto mb-8"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-[#121212] mb-4">
          Whoops!! Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          The page that you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404Page;
