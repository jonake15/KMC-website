import React from "react";
import Carousel from "./CarouselTest2";
import SocialProof from "./SocialProof";
import Partners from "./Partners";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Headroom from "react-headroom";
import UpdateSlider from "./Updates";
import Introduction from "./Section_1";
import Button from "../../Components/Button";
import CardSlider from "./CardSlider";


const Home = () => {


  return (
    <div  className="font-poppins overscroll-y-none">
      <div className="absolute w-full">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <Carousel />
      <CardSlider />
      <Introduction />
      <Partners />
      <SocialProof />
      <UpdateSlider />
      <Footer />
    </div>
  );
};

export default Home;
