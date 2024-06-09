import React from "react";
import { Fragment } from "react";
import Navbar from "../../Components/Navbar";

import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import { useState } from "react";
import carousel from "../../assets/images/order/carousel.png";
import back from "../../assets/images/order/back.png";
import fore from "../../assets/images/order/fore.png";

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <Navbar />

      {/* Carousel */}
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className="h-[100vh] relative z-[-1] font-poppins"
      >
        <span className="h-full flex  flex-col items-center  absolute w-full z-[4] top-[4rem]">
          <p className="text-3xl font-bold text-white py-8">
            Create your custom experience
          </p>{" "}
          <div className="flex justify-center w-full gap-8 text-lg">
            <p>Model 2024</p>
            <p>Model 2022</p>
          </div>
        </span>
        <img
          src={carousel}
          alt=""
          className="relative z-[1] left-[6%] overflow-hidden bottom-[25%] w-11/12"
        />
        <img src={fore} alt="" className="absolute  bottom-[25%] w-full" />
      </div>

      {/* Section 1 */}
      <div className="flex justify-between md:px-[8rem] md:py-[3rem] text-base">
        <div className=" py-[1.5rem] px-[1.5rem] rounded-2xl cursor-pointer ">
          <div className="border px-8 py-[1rem] rounded-2xl">
            <p className="text-center font-medium pb-[0.5rem]">12 meter</p>
            <div className="flex gap-[1rem]">
              <p>80 Passengers</p>
              <p>300km Range</p>
            </div>
          </div>

          <div className=" py-[1.5rem] px-8 rounded-2xl cursor-pointer text-center mt-[10rem]">
            <p className="text-center font-medium pb-[0.5rem]">Exterior paint</p>
            <div className="flex gap-[1rem] justify-center">
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#E28000]"
                name="orange"
                id=""
              />
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#C1C1C1]"
                name="orange"
                id=""
              />
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#404040]"
                name="black"
                id=""
              />
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#F1F1F1]"
                name="light-gray"
                id=""
              />
            </div>
          </div>
        </div>

        <div className=" py-[1.5rem] px-[1.5rem] rounded-2xl cursor-pointer ">
          <div className="border px-8 py-[1rem] rounded-2xl">
            <p className="text-center font-medium  pb-[0.5rem]">10 meter</p>
            <div className="flex gap-[1rem]">
              <p>65 Passengers</p>
              <p>250km Range</p>
            </div>
          </div>

          <div className=" py-[1.5rem] px-8 rounded-2xl cursor-pointer text-center mt-[10rem]">
            <p className="text-center font-medium pb-[0.5rem]">Interior paint</p>
            <div className="flex gap-[1rem] justify-center">
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#E28000]"
                name="orange"
                id=""
              />
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#C1C1C1]"
                name="orange"
                id=""
              />
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#404040]"
                name="black"
                id=""
              />
            </div>
          </div>
        </div>

        <div className=" py-[1.5rem]   px-[1.5rem] rounded-2xl cursor-pointer ">
          <div className="border px-8 py-[1rem] rounded-2xl">
            <p className="text-center font-medium pb-[0.5rem]">8 meter</p>
            <div className="flex gap-[1rem]">
              <p>56 Passengers</p>
              <p>200km Range</p>
            </div>
          </div>

          <div className=" py-[1.5rem] px-8 rounded-2xl cursor-pointer text-center mt-[10rem]">
            <p className="text-center font-medium pb-[0.5rem]">Floor trim</p>
            <div className="flex gap-[1rem] justify-center">
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#404040]"
                name="black"
                id=""
              />
              <input
                type="checkbox"
                className="w-10 h-10 rounded-2xl bg-[#643526]"
                name="brown"
                id=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" rounded-2xl flex justify-center text-base">
        <center>
          <p className=" py-[1rem]">Capacity (Seating/Standing)</p>
          <div className="flex justify-between ">
            <div>
              <input type="radio" name="capacity" id="" />
              &nbsp; 90(42/48)
            </div>
            <div>
              <input type="radio" name="capacity" id="" />
              &nbsp; 70(32/38)
            </div>
          </div>
        </center>
      </div>

      {/* Section 2 */}
      <div className=" rounded-2xl flex justify-center text-[1.3rem] py-[3rem] ">
        <center>
          <p className=" py-[2rem]">Customer information</p>
          <div className="flex flex-col gap-4 justify-between w-12/12">
            <div className=" w-[20rem]">
              <input
                className="outline-none bg-[#F3F3F3] border-0 rounded-2xl p-3 w-full"
                type="text"
                name=""
                id=""
                placeholder="Name/Organisation"
              />
            </div>
            <div className=" w-[20rem]">
              <input
                className="outline-none bg-[#F3F3F3] border-0 rounded-2xl p-3 w-full"
                type="text"
                name=""
                id=""
                placeholder="Phone number"
              />
            </div>
            <div className=" w-[20rem]">
              <input
                className="outline-none bg-[#F3F3F3] border-0 rounded-2xl p-3 w-full"
                type="text"
                name=""
                id=""
                placeholder="Email"
              />
            </div>

            <div className="20rem">
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="bg-[#000] items-start text-base w-8/12 text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem]"
              >
                Get Quote
              </button>
              <Modal
                isVisible={showModal}
                onClose={() => {
                  setShowModal(false);
                }}
              />
            </div>
          </div>
        </center>
      </div>
      {/* <div className="flex gap-[5rem]  h-[98vh]">
        <span>
          {" "}
          <img
            style={{ transform: "scaleX(-1)" }}
            className="w-[50vw] relative z-[-1] pt-[5rem]"
            src={c}
            alt="Kayoola Coach"
          />
          <h2 className="text-3xl font-bold ">Kayoola Coach</h2>
        </span>

        <span>
          <h1 className="text-5xl font-bold pt-[7rem] pb-[2rem]">
            Create your custom <br /> experience
          </h1>
          <p className="text-2xl pb-[1rem]">
            The Kayoola EVS is a premium fully Electric Low Entry City <br />
            Bus in the variants of 5-meter length to 12.5 meters, with <br />{" "}
            carrying capacity ranging from
          </p>

          <span>
            <div className="flex py-[1rem]">
              <h2 className="text-3xl font-semibold w-[135px]">
                Size
                <br />
                <p className="text-sm text-gray-400">Meters</p>
              </h2>
              <button
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black "
              >
                12
              </button>
              <button
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black"
              >
                17
              </button>
              <button
                id="color"
                className=" flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black"
              >
                20
              </button>
            </div>

            <div className="flex py-[1rem]">
              <h2 className="text-3xl font-semibold w-[135px]">Color</h2>
              <button
                className="bg-yellow-400  w-[50px] h-[50px]  mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black
 "
              >
                &nbsp;
              </button>
              <button className="bg-black  w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black">
                &nbsp;
              </button>
              <button className="bg-red-700  w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black">
                &nbsp;
              </button>
            </div>

            <div className="flex py-[1rem]">
              <h2 className="text-3xl font-semibold w-[135px]">
                Range
                <br />
                <p className="text-sm text-gray-400">KM per Hr</p>
              </h2>
              <button
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black "
              >
                120
              </button>
              <button
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black"
              >
                200
              </button>
              <button
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg focus:outline-none focus:ring focus:ring-black"
              >
                300
              </button>
            </div>

            <div className="flex py-[1rem]">
              <h2 className="text-3xl font-semibold w-[135px]">Seats</h2>
              <span
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg"
              >
                31
              </span>
              <span
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px] mx-[1rem]  rounded-lg"
              >
                70
              </span>
            </div>

            <div className="flex py-[1rem]">
              <h2 className="text-3xl font-semibold w-[150px]">
                Quantity
                <br />
                <p className="text-sm text-gray-400">Pieces</p>
              </h2>
              <span
                id="color"
                className="flex justify-center items-center border w-[50px] h-[50px]"
              >
                31
              </span>
            </div>

            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="bg-[#000] text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem]"
            >
              Pre order
            </button>
            <Modal
              isVisible={showModal}
              onClose={() => {
                setShowModal(false);
              }}
            />
          </span>
        </span>
      </div> */}
      <Footer />
    </Fragment>
  );
};

export default Order;
