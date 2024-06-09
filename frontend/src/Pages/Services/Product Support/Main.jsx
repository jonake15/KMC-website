import React from "react";
import cover from "./assets/images/cover.png";
import background from "./assets/images/background.png";
import map from "./assets/images/map.png";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Headroom from "react-headroom";

const Main = () => {
  return (
    <>
      <div className="absolute w-full ">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div
        className="h-[100vh] gap-[4rem] w-full flex justify-center pt-[15rem] font-poppins"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div id="main">
          <div className="w-[22rem] h-[29rem] text-white bg-[#555555] p-8 rounded-2xl">
            <h1 className="text-3xl font-medium">Product Support</h1>
            <p className="text-[1.25rem] py-8">
              Kiira Motors Corporation provides product support services to
              clients and customers using KMC products. Contact us to get the
              support you need.
            </p>
          </div>
        </div>
        <div className="w-[50rem]">
          <img
            src={cover}
            className="w-full object-cover object-center"
            alt=""
          />
        </div>
      </div>

      <div id="form" className="flex justify-center w-full py-[5rem]">
        <div className="w-8/12">
          <img src={map} className="w-full object-cover object-center" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
