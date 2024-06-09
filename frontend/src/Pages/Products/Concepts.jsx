import React from "react";
import Headroom from "react-headroom";
import Navbar from "../../Components/Navbar";
import coach_concept from "../../assets/images/concepts/coach_concept.png";
import evs from "../../assets/images/concepts/evs_concept.png";
import ev from "../../assets/images/concepts/ev_concept.png";
import gradient from "../../assets/images/order/back.png";
import ev_cover from "../../assets/images/concepts/ev_cover.png";
import evs_cover from "../../assets/images/concepts/evs_cover.png";
import coach_cover from "../../assets/images/concepts/coach_cover.png";
import Footer from "../../Components/Footer";

const Concepts = () => {
  return (
    <div className="font-poppins ">
      <div className="absolute w-full">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div
        className="h-[100vh]   "
        style={{ backgroundImage: `url(${gradient})` }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <div className="flex md:flex-row flex-wrap gap-8 lg:flex-nowrap items-center justify-center  w-full  md:gap-8">
          <p className="text-4xl font-bold pt-[10rem] md:pt-0">
            Pioneering African
            <br /> Innovation
          </p>
          <p className="w-11/12 md:w-4/12 text-lg md:text-[1.25rem] md:py-[9rem] ">
            Discover the Kiira EV, Africa's first electric vehicle, launched on
            November 24, 2011. Experience the luxury of the 4-seater Kiira EVS
            and the eco-friendly innovation of the Kayoola Solar Bus,{" "}
            <span className="hidden md:block">
              Africa's first solar-powered bus. Embrace the future of
              sustainable mobility with Kiira Motors Corporation.
            </span>
          </p>
        </div>
        <div className="flex justify-center items-end  ">
          <div
            className="w-[300px] h-[300px]"
            style={{
              backgroundImage: `url(${coach_concept})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              borderTopLeftRadius: "30px",
              borderEndStartRadius: "30px",
            }}
          ></div>
          <div
            className="w-[300px] h-[300px]"
            style={{
              backgroundImage: `url(${evs})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
          ></div>
          <div
            className="w-[300px] h-[300px]"
            style={{
              backgroundImage: `url(${ev})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              borderTopRightRadius: "30px",
              borderEndEndRadius: "30px",
            }}
          ></div>
        </div>
      </div>

      <div
        className="h-[100vh] bg-black/10 relative "
        // style={{
        //   backgroundImage: `url(${ev_cover})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   objectFit: "cover",
        // }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <img
          src={ev_cover}
          alt=""
          className="absolute z-[-1] w-full h-full border-2 object-cover object-center"
        />
        <div className="flex w-full h-full  gap-8  items-center flex-col pt-[6rem]">
          <p className="text-4xl font-bold">Kiira EV</p>
          <p className="w-11/12  sm:w-9/12 md:w-7/12  md:text-[1.3rem]">
            The Kiira EV is Africa’s first electric vehicle launched on 24th
            November 2011. It employs a simple battery electric vehicle
            powertrain consisting of an Energy storage bank
            <span className="hidden md:block">
              , energy converter and an electric motor. It is powered by
              electricity which is stored in the battery bank through repetitive
              charging.
            </span>
          </p>
        </div>
      </div>

      <div
        className="h-[100vh] "
        style={
          {
            // backgroundImage: `url(${evs_cover})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // objectFit: "cover",
          }
        }
      >
        <img
          src={evs_cover}
          alt=""
          className="absolute z-[-1] w-full h-full border-2 object-cover object-center"
        />
        <div className="flex w-full h-full  gap-8  items-center flex-col pt-[6rem] ">
          <p className="text-4xl font-bold">Kiira EVS</p>
          <p className="w-11/12  sm:w-9/12 md:w-7/12  md:text-[1.3rem]">
            The Kiira EVS is a 4-Seater Executive Vehicle built off the Kiira EV
            SMACK Platform fitted with a 2 liter petrol engine, 5 speed
            automatic transmission and an exquisite beige interior trim.
          </p>
        </div>
      </div>

      <div
        className="h-[100vh] "
        style={
          {
            // backgroundImage: `url(${coach_cover})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // objectFit: "cover",
          }
        }
      >
        <img
          src={coach_cover}
          alt=""
          className="absolute z-[-1] w-full h-full border-2 object-cover object-center"
        />
        <div className="flex    w-full h-full  gap-8  items-center flex-col pt-[6rem]">
          <p className="text-4xl font-bold">Kayoola Solar Bus</p>
          <p className="w-11/12  sm:w-9/12 md:w-7/12  md:text-[1.3rem]">
            The first of its kind on the African continent. It relies on
            lithium-ion batteries to power an electric motor that is coupled to
            a 2-speed pneumatic shift transmission.{" "}
            <span className="hidden md:block">
              This technology serves to conserve the environment and public
              health.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Concepts;
