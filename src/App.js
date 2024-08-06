import React, { useState } from "react";
import "./App.css";
import Card from "./component/card";
import "react-multi-carousel/lib/styles.css";
import M3M_Altitude from "./images/M3M Altitude.webp";
import M3M_Mansion from "./images/M3M Mansion.webp";
import Smartworld from "./images/Smartworld One DXP.webp";
import Whiteland from "./images/Whiteland Urban Resort.webp";
import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const data = [
  {
    image: M3M_Altitude,
    location: "Sector 65, Gurgaon",
    title: "M3M Altitude",
  },
  { image: M3M_Mansion, location: "Sector 113, Gurgaon", title: "M3M Mansion" },
  {
    image: Smartworld,
    location: "Sector 65, Gurgaon",
    title: "DLF The Arbour",
  },
  {
    image: Whiteland,
    location: "Sector 103, Gurgaon",
    title: "Whiteland Urban Resort",
  },
];
const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleBeforeChange = (nextSlide) => {
    console.log(nextSlide);
    setCurrentSlide(nextSlide + 1);
  };

  const CustomLeftArrow = ({ onClick }) => (
    <div
      className="text-3xl absolute top-1/2 left-4 cursor-pointer bg-gray-700 text-white rounded-3xl py-3 px-1"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div
      className="text-3xl absolute top-1/2 right-4 cursor-pointer bg-gray-700 text-white rounded-3xl py-3 px-1"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );

  return (
    <div className="App">
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows
          containerClass="container"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          customTransition="all 0.5s"
          transitionDuration={500}
          beforeChange={handleBeforeChange}
          partialVisible={true}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`carousel-card ${
                currentSlide % 4 === index ? "center" : ""
              }`}
            >
              <Card
                image={item.image}
                location={item.location}
                title={item.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
