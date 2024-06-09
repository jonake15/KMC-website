import React from "react";
import Navbar from "../Components/Navbar";
import Updates from "../Components/Updates";
import Footer from "../Components/Footer";
import c from "../assets/images/c.jpg";
import d from "../assets/images/coat.png";
import { UpdatesBlog } from "../Components/Updates";
const Blog = () => {
  return (
    <>
      <Navbar />
      <div id="container" className="h-[150vh]  pb-[10rem] ">
        <div className="bg-gray-200 h-[70vh] text-center  pt-[2rem] items-center ">
          <h1 className="text-3xl font-bold pt-[7rem]">
            What's happening at KMC
          </h1>
          <p className="text-base py-4">
            The Kayoola Coach is a novel and innovative public transport <br />{" "}
            solution for comfortable long distance and intercity mobility.
          </p>
        </div>
        <br />
        <center>
          <div
           
            className="bg-white absolute left-0 top-[50vh] mx-[10vw] border-2  rounded-xl"
          >
            <img
              className="rounded-2xl w-7/12 object-cover object-center "
              src={c}
              alt=""
              srcset=""
            />
            {/* <span className="relative left-2">
              <p>Author:KMC Admin</p>
              <p>
                The President of Nigeria Visits <br />
                Kiira motors
              </p>
            </span> */}
          </div>
        </center>
      </div>


      <Footer />
    </>
  );
};
export default Blog;
