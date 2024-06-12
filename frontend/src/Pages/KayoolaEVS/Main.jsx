import React from "react";
import Navbar from "../../Components/Navbar";
import CarouselProducts from "./CarouselProducts";
import Footer from "../../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
import axios from "axios";
import Video from "./Video";
import { images } from "./data";
import Features from "./Features";


const Products = () => {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        if (!res.data.valid) {
          setUsername(res.data[0].username);
          console.log(res.data);
        } else {
          navigate("/login");
          // console.log(res.data[0].username);
        }
      })
      .catch((err) => console.log(err));
  }, []);


   
  // console.log(images);
  const styles = {
    backgroundImage: `url(${images[6].bus})`,
    backgroundSize: "cover", // Adjust background size as needed
    backgroundRepeat: "no-repeat", // Adjust background repeat as needed
    width: "70vw", // Set desired width
    height: "50vh", // Set desired height
    position: "relative",

    zIndex: -1,
  };
  return (
    <div className="font-poppins">
      <div className="absolute w-full">
        <Headroom className="w-full">
          <Navbar />
        </Headroom>
      </div>

      <CarouselProducts />
      <Video />
      <Features />
      {/* Section */}
      <div class="px-4 w-full bg-[#171717]  h-auto md:px-[8rem] md:py-[3rem]">
        <div id="coach" className="flex  flex-wrap md:flex-nowrap justify-between gap-10  text-white">
          <div>
            <h1 className="lg:text-3xl text-2xl font-medium w-11/12 ">
              Enhancing passenger experiences
            </h1>
            <p className="lg:text-base  py-[2rem] pr-8">
              The Kayoola EVS™ comes equipped with a modern
              <br /> infotainment system designed to enhance the passenger{" "}
              <br /> experience. This system offers a range of entertainment{" "}
              <br /> options, including music, videos, Wi-Fi , USB Charging and{" "}
              <br /> real-time route information, keeping passengers engaged{" "}
              <br /> and informed throughout their journey.
            </p>
          </div>

          <div className=" flex gap-8">
            <img
              className="w-100 h-[200px] md:h-[300px] rounded-2xl relative"
              src={images[0].chair}
              alt=""
            />
            <img
              className="w-full h-[200px] md:h-[300px] rounded-2xl relative mb-[50px] "
              src={images[1].stand}
              alt=""
            />
          </div>
        </div>

        {/* Section */}
        <div
          className="relative h-[25rem]"
          style={{
            backgroundImage: `url(${images[2].seats})`,
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-full h-full px-8 rounded-2xl  z-[1] flex flex-col justify-center items-start"
            style={{
              backgroundImage: `url(${images[7].gradient})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
             
              transform: "rotate(-180deg)",
            }}
          >
            <p
              style={{ transform: "rotate(180deg)" }}
              className="md:text-base text-white "
            >
              The Kayoola Coach is a novel and innovative
              <br /> public transport solution for comfortable long
              <br /> distance and intercity mobility. It is available
              <br /> with either an Internal Combustion Engine
              <br /> (ICE)
            </p>
            <h1
              style={{ transform: "rotate(180deg)" }}
              className="md:text-3xl text-2xl md:w-4/12 text-white font-bold py-6"
            >
              Entertainment and connectivity
            </h1>
          </div>
        </div>
      </div>

      {/* Gallery  */}
      <div className="flex justify-center items-center gap-6 bg-[#171717] md:px-[8rem] md:py-[3rem]">
        <img
          className="w-5/12 h-[250px] md:w-6/12 md:h-[350px] rounded-2xl relative  "
          src={images[3].wheel}
          alt=""
          style={{ objectPosition: "center", objectFit: "cover" }}
        />

        <img
          className="w-5/12 h-[250px] md:w-6/12 md:h-[350px] rounded-2xl relative my-[2rem]"
          src={images[4].man}
          alt=""
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>

      {/* Gallery  2*/}
      <div className="flex flex-wrap md:flex-nowrap gap-8 bg-[#171717] md:px-[6rem] md:py-[3rem] text-white px-2">
        <div className="md:w-6/12  md:h-[500px]  rounded-[50px] relative">
          <h1 className="md:text-3xl text-2xl font-medium">CCTV Cameras</h1>
          <p className="md:text-base md:py-[2rem]">
            The Kayoola EVS™ features a state-of-the-art e-ticketing and
            cashless payment system, making boarding quicker and more efficient.
            Passengers can use contactless cards or mobile payment options,
            reducing the need for cash handling and streamlining the ticketing
            process.
          </p>
        </div>

        <img
          className="md:w-6/12 w-full md:h-[350px] rounded-2xl relative mb-[50px] "
          src={images[5].camera}
          alt=""
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>

      {/* <Card /> */}
      {/* Charging */}
      {/* <div className="flex justify-evenly pt-[4rem]">
        <span>
          <h1 className="text-6xl font-bold pt-[7rem]">Charging</h1>
          <p className="text-[1.3rem]  py-[50px] pr-8">
            The Kayoola Coach is a novel and innovative <br />
            public transport solution for comfortable long
            <br /> distance and intercity mobility. It is available with <br />{" "}
            either an Internal Combustion Engine (ICE)
          </p>
        </span>

        <img
          className="w-[550px] h-[500px] rounded-[50px] relative"
          src="https://images.unsplash.com/photo-1626288321777-4cd7d331ddf3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div> */}
      {/* Order */}
      <div className="bg-[#171717] w-full h-[100vh] flex justify-center md:px-[8rem]  md:py-[3rem]">
        <div
          className=" h-full w-full rounded-2xl flex justify-center items-center"
          style={{
            backgroundImage: `url(${images[6].bus})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover",
            
          }}
        >
          <span className="absolute w-full h-full bg-black/10"></span>
          <div className="text-white text-base relative text-center">
            <p className="py-4">
              Designed for efficiency, comfort, and sustainability,
              <br /> this fully electric bus is perfect for city travel.
            </p>
            <p className="pb-8">
              Order Now and drive the change towards a greener,
              <br /> smarter urban transit system!
            </p>
            <Link to="/orders-evs">
              <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
