import React from "react";
import cover from "../../assets/images/introduction/cover.png";


const Introduction = () => {
  return (
    <div
      className="w-full h-auto md:h-[100vh] justify-start flex items-center md:pt-[2rem] flex-col "
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <h1 className="text-3xl md:px-0 px-9 font-medium py-8">
        Mobility solution for Africa
      </h1>
      <p className="md:text-base text-lg p-7 md:p-0">
        Welcome to Kiira Motors Corporation (KMC), where innovation meets
        sustainability in the
        <br /> heart of Africa's mobility revolution. We're more than just a
        mobility enterprise -<br /> we're pioneers of progress, champions of
        innovation, and architects of change.
      </p>
      <button
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.2)",
        }}
        className=" border-2 border-black my-8 rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
      >
        Learn More
      </button>
    </div>
  );
};

export default Introduction;
