import React, { useEffect } from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Button from "../../Components/Button";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const videos = [
  { id: 1, url: "/src/assets/videos/cover.mp4" },
  { id: 2, url: "/src/assets/videos/KMC.mp4" },
  { id: 3, url: "/src/assets/videos/Website_video.mp4" },
];

const Carousel = () => {
  const CustomNextArrow = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="group-hover:block fixed z-[10] bottom-[20.5vh] left-[85vw]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:scale-150 border mr-[6rem]"
      style={{ transition: "all 0.3s ease" }}
    >
      <BsChevronCompactRight />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="group-hover:block fixed z-[10] bottom-[20.5vh] md:left-[81vw] left-[73vw]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:scale-150 border mr-[6rem]"
      style={{ transition: "all 0.3s ease" }}
    >
      <BsChevronCompactLeft />
    </button>
  );

  const settings = {
    dots: false, // Optional: display navigation dots
    infinite: true, // Optional: enable infinite looping
    arrows: true, // Enable next and previous arrows
    slidesToShow: 1, // Show one video at a time
    slidesToScroll: 1, // Scroll one video at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10000,
    beforeChange: (current, next) =>
      console.log("Changing from", current, "to", next), // Optional for debugging
    nextArrow: <CustomNextArrow />, // Custom component for next arrow
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="h-[100vh] w-full relative  overflow-hidden contrast-100 font-poppins">
      <Slider {...settings}>
        {videos.map((video) => (
          <div className="h-[100vh]  filter brightness-50 " key={video.id}>
            <h2>{video.title}</h2> {/* Display video title (optional) */}
            <video
              className="md:min-w-[100%] h-[100vh]"
              autoPlay
              loop
              muted
              src={video.url}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
      </Slider>

      <div className="absolute md:top-1 bottom-[7rem]  text-white flex justify-around items-center w-full md:h-full h  md:px-[6rem] overflow-hidden">
        <span className=" md:w-5/12 w-9/12">
          <p className="md:text-4xl text-2xl font-bold">
            Deliver the Ultimate Travel Experience to Your Passengers
          </p>
          <button className="md:hidden text-sm flex py-3 items-center font-medium">
            <p>DISCOVER MORE</p>
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
          </button>
        </span>
        <span className=" md:text-base md:w-5/12  md:block hidden">
          <p  className="w-full py-4">
            At KMC, we are dedicated to providing your with the ultimate
            mobility solutions. Our Kayoola EVs and Coach™ offers unparalleled
            comfort, cutting-edge technology
          </p>
          <div className="flex gap-8">
            <Button style="bg-white text-[#D33A54] rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-[#D53A54]">
              Order Now
            </Button>
            <Button style="text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white backdrop:blur-[100px] bg-[#000] opacity-[0.8]">
              Learn More
            </Button>
          </div>
        </span>
      </div>
      {/* socials */}
      <div
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.2)",
        }}
        className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-black cursor-pointer "
      >
        <a href="https://www.facebook.com/kiiramotors/">
          <div className="text-3xl  rounded-md m-1">
            <FaWhatsapp className="text-white p-1 md:p-0 " />
          </div>
        </a>

        <a href="https://www.instagram.com/kiiramotorsofficial?igsh=MWxtanZicnRwcm4wdA==">
          <div className="text-3xl border rounded-full  m-1">
            <MdPhoneInTalk className="text-white p-2 md:p-1" />
          </div>
        </a>
        <a href="https://x.com/KiiraMotors?t=HlSrjtZ-qVARNukxF6r_nA&s=08">
          <div className="text-3xl  rounded-md m-1">
            <FaRegEnvelope className="text-white p-1 md:p-0 " />
          </div>
        </a>
        {/* <a href="https://youtube.com/@kiiramotors?si=463ul-BHodb3ZU8V">
          <div className="text-3xl bg-[#D53A54] rounded-md m-1">
            <FaYoutube className="text-white p-1 " />
          </div>
        </a>

        <a href="https://www.linkedin.com/company/kiira-motors-corporation/">
          <div className="text-3xl bg-[#D53A54] rounded-md m-1">
            <FaLinkedinIn className="text-white p-1 " />
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Carousel;
