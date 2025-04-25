import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setbook(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getbook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div className="mt-16 pt-20 items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-200 mx-auto max-w-3xl">
          Books are more than just pages—they are portals to other worlds,
          ideas, and adventures. Whether it's unraveling mysteries with Sherlock
          Holmes or exploring societal truths in 1984, every book holds a treasure
          of wisdom. Classic novels like Pride and Prejudice stir emotions, while
          thrillers like Dracula send chills down your spine. From fantasy to
          philosophy, our collection of books caters to every curious mind. Let a
          good book be your best companion—anytime, anywhere.
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300 mt-8">
            Back
          </button>
        </Link>
      </div>

      {/* Book Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {book.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Course;
