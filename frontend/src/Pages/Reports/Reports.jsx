import React from "react";
import Navbar from "../../Components/Navbar";
import UpdateSlider from "./Updates";
import Footer from "../../Components/Footer";
import back from "../Plant/assets/images/back.png"
import Headroom from "react-headroom";

const Reports = () => {
  return (
    <>
       <div className="absolute w-full">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div style={{backgroundImage:`url(${back})`,backgroundPosition:'center',objectFit:'cover'}} className=" flex flex-col justify-around h-[100vh] pt-[5%]   px-[10vw] ">
        <div className="">
        <p className="text-lg font-semibold py-[1rem]">Annual reports</p>
        <h1 className="text-3xl font-bold">2023 Annual Report</h1>
        </div>
        
        <span className=" flex justify-evenly   w-full">


          <div className="flex  w-6/12 flex-col">
            <p className="text-base  py-[1rem]">
              Kiira Motors Corporation is a State Enterprise <br /> established
              to champion value addition in the nascent <br /> Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>

            <p className="text-base  ">
              Kiira Motors Corporation is a State Enterprise  established
              to champion value addition in the nascent  Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>
            <span className="text-left">
              <p>Download this report</p>
              <p className="text-lg font-semibold">2023 Annual report</p>
            </span>
          </div>
          <div className="bg-gray-200 w-[20rem] h-[20rem] rounded-2xl"></div>
        </span>

        <hr className="mt-7" />
      </div>
      
      <div className=" flex flex-col justify-around h-[100vh]   px-[10vw] ">
        <div className="">
        <p className="text-lg font-semibold py-[1rem]">Annual reports</p>
        <h1 className="text-3xl font-bold">2023 Annual Report</h1>
        </div>
        
        <span className=" flex justify-evenly   w-full">


          <div className="flex  w-6/12 flex-col">
            <p className="text-base  py-[1rem]">
              Kiira Motors Corporation is a State Enterprise <br /> established
              to champion value addition in the nascent <br /> Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>

            <p className="text-base  ">
              Kiira Motors Corporation is a State Enterprise  established
              to champion value addition in the nascent  Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>
            <span className="text-left">
              <p>Download this report</p>
              <p className="text-lg font-semibold">2023 Annual report</p>
            </span>
          </div>
          <div className="bg-gray-200 w-[20rem] h-[20rem] rounded-2xl"></div>
        </span>

        <hr className="mt-7" />
      </div>

      <div className=" flex flex-col justify-around h-[100vh]   px-[10vw] ">
        <div className="">
        <p className="text-lg font-semibold py-[1rem]">Annual reports</p>
        <h1 className="text-3xl font-bold">2023 Annual Report</h1>
        </div>
        
        <span className=" flex justify-evenly   w-full">


          <div className="flex  w-6/12 flex-col">
            <p className="text-base  py-[1rem]">
              Kiira Motors Corporation is a State Enterprise <br /> established
              to champion value addition in the nascent <br /> Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>

            <p className="text-base  ">
              Kiira Motors Corporation is a State Enterprise  established
              to champion value addition in the nascent  Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>
            <span className="text-left">
              <p>Download this report</p>
              <p className="text-lg font-semibold">2023 Annual report</p>
            </span>
          </div>
          <div className="bg-gray-200 w-[20rem] h-[20rem] rounded-2xl"></div>
        </span>

        <hr className="mt-7" />
      </div>
      <UpdateSlider />
      <Footer />
    </>
  );
};

export default Reports;
