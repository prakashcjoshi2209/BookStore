import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
// import list from "../../public/list.json";
import Card from "./Card";

const Freebook = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("https://bookstore-3ch5.onrender.com/book");
        console.log(res.data);
        setbook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log("error", error);
      }
    };

    getbook();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0, // Make sure this is explicitly 0
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0, // Set for mobile as well
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0, // Set for mobile as well
        },
      },
    ],
  };


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            We offer a wide range of expertly crafted courses completely free of
            cost. These courses are designed to help you learn at your own pace,
            enhance your skills, and grow your knowledge without any financial
            barriers.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
