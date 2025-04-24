import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 items-center">
        {/* Left Section - Text */}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-32 space-y-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>

          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300">
          Whether you're a curious reader, a passionate learner, or someone just starting their journey, our platform is here to inspire and educate. With a handpicked collection of both free and premium books, we aim to bring knowledge right to your fingertips. Dive into classics, explore new genres, or build skills through carefully curated reads. Because every page turned is a step towards growth!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="h-5 w-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                className="grow text-white"
                placeholder="mail@site.com"
                required
              />
            </label>
            <button className="btn btn-secondary w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="Banner.jpg"
            alt="book images"
            className="max-w-full h-auto sm:h-[350px] md:h-[420px] lg:h-[486px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
