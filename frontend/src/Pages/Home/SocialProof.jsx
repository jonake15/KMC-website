import React from "react";
import proof1 from "./assets/images/social_proof/katumaba.png";
import proof2 from "./assets/images/social_proof/monica.png";
import { ImQuotesLeft } from "react-icons/im";

const SocialProof = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
      className="px-4 bg-[#515151]  h-auto  md:px-[6rem] py-[3rem]"
    >
      <div className="md:text-3xl text-3xl font-medium py-3  mb-4 text-white px-[3rem]">
        What people say <br />
        about our solutions
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
        <div class=" rounded-xl overflow-hidden shadow-2xl px-[20px] w-[600px] h-[340px]   bg-white my-6">
          <div className="relative flex flex-col h-full ">
            {/* flex */}
            <div className="md:text-5xl pt-6 text-xl text-[#D53A54] font-bold  ">
              <ImQuotesLeft />
            </div>
            <div className="font-semibold   md:text-lg flex  ">
              <p className="w-8/12 text-lg">
                It is very evident that mass transport is the answer to the
                future of the city
              </p>
              <img
                class="  absolute object-cover object-center bottom-[0px]  w-6/12  z-[100] right-1   ml-[0px]"
                src={proof1}
                alt="Sunset in the mountains"
              />
            </div>

            <div className="  mt-[1rem] relative top-[1rem] text-md font-semibold  w-[350px] ">
              Gen Katumba Wamala
            </div>
            <div className="font-normal relative top-4  text-base">
              Minister of Works and Transport Ug <br />
              <button
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.2)",
                }}
                className="text-sm  border-4 mt-7 rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
              >
                Watch
              </button>
            </div>
          </div>
        </div>

        {/* 2 */}

        <div class=" rounded-xl overflow-hidden shadow-2xl px-[20px] w-[600px] h-[340px]   bg-white my-6">
          <div className="relative flex flex-col h-full ">
            {/* flex */}
            <div className="md:text-5xl pt-6 text-xl text-[#D53A54] font-bold  ">
              <ImQuotesLeft />
            </div>
            <div className="font-semibold   md:text-lg flex  ">
              <p className="w-8/12 text-lg">
                Uganda Airlines becomes the first Client to buy a Kayoola Bus
                from Kiira Motors Corporation
              </p>
              <img
                class="  absolute object-cover object-center bottom-[0px]  w-6/12  z-[100] right-1   ml-[0px]"
                src={proof2}
                alt="Sunset in the mountains"
              />
            </div>

            <div className=" mt-[1rem] relative top-[1rem] text-md font-semibold  w-[350px] ">
              Dr. Monica Musenero
            </div>
            <div className="font-normal      relative top-4  text-md  ">
              Presidential Advisor <br />
              <button
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.2)",
                }}
                className="text-sm  border-4 mt-7 rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
