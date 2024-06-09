import React from "react";
import Navbar from "../Components/Navbar";
import c from "../assets/images/c.jpg";
import Footer from "../Components/Footer";

const Discover = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Shop with us</h1>
        <p>
          The Kayoola Coach is a novel and innovative public transport <br />{" "}
          solution for comfortable long distance and intercity mobility.
        </p>
        <img src={c} alt="" srcset="" />

        <div>
          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>

          <span>
            <img src={c} alt="" />
            <h3>Caps</h3>
            <h3>UGX 10,000</h3>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
