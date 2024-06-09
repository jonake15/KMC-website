import React from "react";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";

const Clubs = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[100vh] bg-gray-200">
        <span>
          <h1 className="text-[4rem] font-bold">School Mobility Clubs</h1>
          <p className="text-2xl text-center">
            KMC offers short and long-term vehicles hire Clubs to <br />{" "}
            customers. These hire Clubs provide an avenue for lead <br />{" "}
            generation for vehicle orders, boost customer confidence <br /> and
            brand loyalty.
          </p>
        </span>
      </div>

      <div></div>
      <div className="h-[90vh] flex flex-col items-center pt-[4rem] ">
        <h1 className="text-[4rem] font-bold">Why Mobility clubs</h1>
        <div className="flex gap-[5rem] pt-[4rem]">
          <div className="w-[25rem] border p-[2rem] rounded-2xl bg-gray-200">
            <h2 className="text-[2rem] font-semibold">Innovation</h2>
            <p className="text-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur maxime, hic modi est optio laboriosam explicabo quam,
              veniam nemo quos, voluptatibus iure pariatur impedit iste
              mollitia? Ipsum iusto totam similique?
            </p>
          </div>

          <div className="w-[25rem] border p-[2rem] rounded-2xl bg-gray-200">
            <h2 className="text-[2rem] font-semibold">Innovation</h2>
            <p className="text-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur maxime, hic modi est optio laboriosam explicabo quam,
              veniam nemo quos, voluptatibus iure pariatur impedit iste
              mollitia? Ipsum iusto totam similique?
            </p>
          </div>

          <div className="w-[25rem] border p-[2rem] rounded-2xl bg-gray-200">
            <h2 className="text-[1.5rem] font-semibold">Innovation</h2>
            <p className="text-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur maxime, hic modi est optio laboriosam explicabo quam,
              veniam nemo quos, voluptatibus iure pariatur impedit iste
              mollitia? Ipsum iusto totam similique?
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[100vh] bg-gray-200">
        <span>
          <h1 className="text-[4rem] font-bold">
            17 Mobility clubs established
          </h1>
          <p className="text-2xl text-center">
            our impact goes over 17 schools
          </p>
        </span>
      </div>
      <div className="bg-gray-700 h-[150vh]">
        <div className="flex gap-[5rem] pt-[4rem] justify-center items-center">
          <div
            className="w-[25rem] h-[30rem] border  rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${c}`,
            }}
          ></div>

          <div
            className="w-[25rem] h-[30rem] border  rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${c}`,
            }}
          ></div>

          <div
            className="w-[25rem] h-[30rem] border  rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${c}`,
            }}
          ></div>
        </div>

        <div className="bg-white mx-[17rem] my-[4rem] h-[70vh] rounded-2xl flex justify-center items-center">
          <span className="text-center">
            <h2 className="text-4xl font-bold py-6">How to join</h2>
            <p className="text-[1.5rem] py-6">
              You can now register your mobility clubs <br /> and be part of
              great innovations
            </p>
            <button className="bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
              Register today
            </button>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clubs;
