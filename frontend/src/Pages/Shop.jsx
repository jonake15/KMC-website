import React from "react";
import Navbar from "../Components/Navbar";
import c from "../assets/images/c.jpg";
import d from "../assets/images/coat.png";
import Footer from "../Components/Footer";
import autparts from "../assets/images/autoparts.png";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div id="container" className="h-[120vh] ">
        <div className="bg-gray-200 h-[70vh] flex flex-col pt-[2rem] items-center ">
          <h1 className="text-6xl font-bold pt-[7rem]">Shop with us</h1>
          <p className="text-2xl py-4">
            The Kayoola Coach is a novel and innovative public transport <br />{" "}
            solution for comfortable long distance and intercity mobility.
          </p>
        </div>
        <center>
          <span
            style={{
              top: "60%",
              left: "55%",
              transform: "translate(-59%,-59%)",
            }}
            className="absolute top-[25rem] w-[1200px]  inset-0 rounded-xl"
          >
            <img
              className="rounded-2xl w-[1200px] h-[40rem] border-2"
              src={c}
              alt=""
              srcset=""
            />
          </span>
        </center>
      </div>
      <div className="h-[90vh]">
        <div className="mx-[20rem]">
          <h1 className="text-center text-3xl font-bold pb-[2rem]">KMC Shop</h1>
          <div className="flex flex-wrap gap-[10rem]">
            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center ">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Auto parts

export const AutoPart = () => {
  return (
    <>
      <Navbar />
      <div id="container" className="h-[120vh] ">
        <div className="bg-gray-200 h-[70vh] flex flex-col pt-[2rem] items-center ">
          <h1 className="text-6xl font-bold pt-[7rem]">Shop with us</h1>
          <p className="text-2xl py-4">
            The Kayoola Coach is a novel and innovative public transport <br />{" "}
            solution for comfortable long distance and intercity mobility.
          </p>
        </div>
        <center>
          <span
            style={{
              top: "60%",
              left: "55%",
              transform: "translate(-59%,-59%)",
            }}
            className="absolute top-[25rem] w-[1200px]  inset-0 rounded-xl"
          >
            <img
              className="rounded-2xl w-[1200px] h-[40rem] border-2"
              src={c}
              alt=""
              srcset=""
            />
          </span>
        </center>
      </div>
      <div className="h-[90vh]">
        <div className="mx-[20rem]">
          <h1 className="text-center text-3xl font-bold pb-[2rem]">KMC Shop</h1>
          <div className="flex flex-wrap gap-[10rem]">
            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center ">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
