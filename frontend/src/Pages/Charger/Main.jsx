import React from "react";
import cover from "./assets/images/cover.png";
import charger_1 from "./assets/images/charger_1.png";
import charger_2 from "./assets/images/charger_2.png";
import charger_3 from "./assets/images/charger_3.png";
import order from "./assets/images/order.png";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Headroom from "react-headroom";

const Main = () => {
  return (
    <div className="font-poppins">
      <div className="absolute w-full">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div
        id="hero"
        className="h-[100vh] relative"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <span className="absolute top-[10rem] left-[6rem] text-white text-3xl font-bold">
          <h1>
            Charger with <br />
            ease
          </h1>
        </span>
        <span className="absolute w-full h-full bg-black/10"></span>
        <span className="absolute bottom-[10rem]  left-[6rem]  text-white text-2xl font-bold">
          <h1>Electric Charger</h1>
          <p className="text-lg py-2 font-normal">
            Our charger is engineered for efficiency, reliability, and
            <br />
            convenience, ensuring that your vehicle is always ready to go.
          </p>
        </span>
      </div>

      <div
        id="chargers"
        className="h-[100vh]"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1100"
      >
        <center>
          <span className="relative top-[12rem]">
            <h1 className=" font-bold text-3xl py-2">EV Chargers</h1>
            <p className="text-lg">
              Our charger is engineered for efficiency, reliability, and
              <br />
              convenience, ensuring that your vehicle is always ready to go.
            </p>
          </span>
        </center>

        <div className="flex justify-evenly items-center h-full">
          <span className="w-2/12">
            <img
              src={charger_1}
              className="object-cover object-center"
              alt=""
            />
            <h3 className="text-center">60kW Charger</h3>
          </span>
          <span className="w-2/12">
            <img
              src={charger_2}
              className="object-cover object-center"
              alt=""
            />
            <h3 className="text-center">360kW Charger</h3>
          </span>
          <span className="w-3/12">
            <img
              src={charger_3}
              className="object-cover object-center"
              alt=""
            />
            <h3 className="text-center">240kW Charger</h3>
          </span>
        </div>
      </div>

      <div
        id="order"
        className="h-[100vh]"
        style={{
          backgroundImage: `url(${order})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1100"
      >
        <span className="absolute w-full h-full bg-black/10"></span>

        <span className="relative">
          <center className="pt-16">
            <p className="text-white">
              Join us in driving sustainable mobility forward with <br />{" "}
              KMC'selectric charging solutions.
            </p>
          </center>
        </span>
        <Link to="/login">
          <center className="py-10 relative">
            <button className="bg-black hover:bg-gray-700 text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black   ">
              Order Now
            </button>
          </center>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
