import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Headroom from "react-headroom";
import gradient from "./assets/images/back.png";
import fore from "./assets/images/fore.png";
import plant_vid from "./assets/images/plant_vid.png";
import plant from "./assets/images/plant.png";
import map from "./assets/images/map.png";
import UpdateSlider from "./Updates";

const Plants = () => {
  return (
    <div className="font-poppins">
      <div className="absolute w-full">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        className="md:h-[100vh] "
      >
        <p className="absolute px-4 md:px-0 font-medium w-8/12 text-2xl md:w-full top-[15%] md:top-[40%] md:text-3xl md:left-[35%] flex justify-center ">
          Explore the Vehicle Plants
        </p>
        <img
          src={fore}
          alt=""
          className="relative  object-cover md:h-[100vh] w-full object-center"
        />
      </div>
      <div className="md:h-[100vh] px-2 md:flex flex-wrap md:flex-nowrap  md:justify-evenly md:items-center ">
        <span className="md:w-4/12 px-2 ">
          <p className="font-medium md:w-full w-7/12  text-2xl md:text-3xl py-6">Kiira Vehicle Plant (KVP)</p>
          <p className="text-base  md:w-full w-7/12">
            The Kiira Vehicle Plant (KVP) is a state-of-the-art manufacturing
            facility situated on 100 acres in the Jinja Industrial and Business
            Park. Operated by Kiira Motors Corporation (KMC), KVP is dedicated
            to developing, producing, and selling sustainable mobility solutions
            for the region and all of Africa.
          </p>
        </span>

        <span className=" px-2">
          <img className="md:w-[40rem] h-auto w-[15rem]" src={plant_vid} alt="" />
        </span>
      </div>
      <div className="h-[100vh] mb-[10rem]">
        <UpdateSlider />
      </div>
      <div className="h-[50vh] text-white bg-black">
        <div className="flex    w-full h-full justify-center pt-[5%] items-start gap-8 ">
          <p className="text-3xl font-bold">
            Mobility Industrial and <br /> Business Park (MITP)
          </p>
          <p className="w-4/12 text-base">
            Government through Kiira Motors Corporation purchased two (2) square
            miles (1,280 acres) of land for setting up the Uganda Eco -
            Automotive Industrial & Technology Park to support a wide range of
            investments in motor vehicle parts manufacturing, vehicle testing
            and automotive technology innovation enterprises. The MITP is in
            Bbaale, Kayunga District Central Uganda.
          </p>
        </div>
      </div>
      <div
        className="h-[100vh] "
        style={{
          backgroundImage: `url(${plant})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      ></div>
      <div
        className="h-[100vh] "
        style={{
          backgroundImage: `url(${map})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      ></div>
      <div className="h-auto flex justify-center text-center items-center py-[10rem] ">
        {" "}
        Eco - Mobility Industrial and Technology Park (MITP) is one of the
        <br />
        strategic Program Projects in Uganda’s Third National Development Plan
        (NDPIII)
        <br /> 2020/21 - 2024/25 in line with the overall theme of Sustainable
        Industrialization for
        <br /> inclusive growth, employment and sustainable wealth creation.
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
