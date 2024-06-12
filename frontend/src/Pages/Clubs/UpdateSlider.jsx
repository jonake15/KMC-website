import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import slider_1 from "./assets/images/slider.png"



const UpdateSlider = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const [isDesktop, setIsDesktop] = useState(true); // State to track mobile view

  // return () => window.removeEventListener("resize", handleResize); // Cleanup
  function logWindowWidth() {
    if (window.innerWidth < 800) {
      setIsMobile(true); // Adjust breakpoint for mobile as needed
    } else {
      setIsMobile(false);
    }
  }

  function logWindowWidthDesktop() {
    if (window.innerWidth > 800) {
      setIsDesktop(true); // Adjust breakpoint for mobile as needed
    } else {
      setIsDesktop(false);
    }
  }
  // console.log("Window width:", window.innerWidth);

  window.addEventListener("resize", logWindowWidth);
  window.addEventListener("resize", logWindowWidthDesktop);
  //data
  const data = [
    {
      id: 1,
      headline: "Collaborate to learn and grow",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 2,
      headline: "Focus on the customer",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 3,
      headline: "Innovate sustainable",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 4,
      headline: "Empower teams",
      date: "2 days ago",
      image_url: slider_1,
    },
  ];

  // settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };
  // settings-mobile
  const settingsMob = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div
        className="w-full py-[3rem]"
        // data-aos="fade-up"
        // data-aos-once="true"
        // data-aos-duration="800"
      >
        <center>
         
        </center>{" "}
        {isDesktop && (
          <div className="w-full overflow-hidden">
            <center>
              <Slider {...settings} className="w-[120vw] ">
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer  flex justify-center items-center filter brightness-90 hover:brightness-100   "
                  >
                    <div className=" w-[20rem] overflow-hidden rounded-2xl">
                      <img
                        className="hover:scale-105 rounded-2xl overflow-hidden object-cover object-center h-[350px]"
                        src={p.image_url}
                        alt=""
                        style={{ transition: "all 0.3s" }}
                      />
                     
                     
                    </div>
                  </div>
                ))}
              </Slider>
            </center>
          </div>
        )}
        {/* Mobile */}
        <div
          onResize={logWindowWidth}
          className=" flex  flex-row justify-center items-center "
        >
          {isMobile && (
            <Slider {...settingsMob} className="w-full">
              {data.map((p) => (
                <div
                  key={p.id}
                  className="cursor-pointer filter brightness-90 hover:brightness-100   "
                >
                  <div className=" md:w-[500px]  overflow-hidden rounded-2xl  w-full">
                    <img
                      className="hover:scale-105 overflow-hidden w-full "
                      src={p.image_url}
                      alt=""
                      style={{ transition: "all 0.3s" }}
                    />

                  
                    <div className="text-center md:text-base ">
                      {p.headline}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateSlider;
