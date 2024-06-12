import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import icon from "../assets/images/footer/image.png";

const Footer = () => {
  return (
    <div className="bg-[#333333] font-poppins text-white p-2 h-auto pt-[3rem]">
      <center>
        <div className="flex md:justify-evenly text-left   py-2  w-full mb-9   gap-3">
          <div className="">
            <ul>
              <li className="py-2 ">
                <img src={icon} alt="" srcset="" />
              </li>
              <li className="py-1">
                <p className="md:text-md">
                  Kiira Motors Corporation is a <br />
                  State Enterprise established <br /> to champion value addition
                  <br />
                  in the nascent Motor Vehicle <br />
                  Industry in Uganda through <br /> Technology Transfer
                </p>
              </li>
              <li className="flex">
                <a href="https://www.facebook.com/kiiramotors/" className="text-3xl ">
                  <FaFacebookSquare className="" />
                </a>
                <a href="https://www.instagram.com/kiiramotorsofficial?igsh=MWxtanZicnRwcm4wdA==" className="text-3xl">
                  <FaInstagramSquare />
                </a>
                <a href="https://x.com/KiiraMotors?t=HlSrjtZ-qVARNukxF6r_nA&s=08" className="text-3xl">
                  <FaTwitterSquare />
                </a>
                <a href="https://youtube.com/@kiiramotors?si=463ul-BHodb3ZU8V" className="text-3xl">
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className=" text-sm ">
              <li className="py-2 font-bold ">Products</li>
              <li className="py-1">Kayoola EVS</li>
              <li className="">Kayoola Coach</li>
              <li className="">Banana bus</li>
              <li className="">Chargers</li>
            </ul>
          </div>

          <div>
            <ul className="text-sm">
              <li className="py-2 font-bold ">Services</li>
              <div className="hidden md:block">
                <li className="py-1">Contract Manufacturing</li>
                <li className="">Product Support Services</li>
                <li className="">Engineering Services</li>
                <li className="">Property Lease and Rental Services</li>
                <li className="">Consulting and Advisory Services</li>
                <li className="">Vehicle Hire</li>
              </div>
            </ul>
          </div>

          <div>
            <ul className="text-sm">
              <li className="py-2 font-bold ">Discover</li>
              <div className="hidden md:block">
                <li className="py-1">Events</li>
                <li className="">Articles</li>
                <li className="">Mobility clubs</li>
                <li className="">Annual Report</li>
                <li className="py-1">Investor</li>
                <li className="">Service & maintenance</li>
                <li className="">Become a partner</li>
                <li className="">About Us</li>
                <li className="">Career</li>
                <li className="">Projects</li>
              </div>
            </ul>
          </div>

          <div className="">
            {/* <ul className="text-sm ">
              <li className="py-2 font-bold ">Contact us</li>
              <li className="py-1">P.O Box Jinja Rd Kla Uganda</li>
              <li className="">Tel:+256 750662136</li>
            </ul> */}

            {/* Newsletter */}
            {/* <div>
              <input
                type="text"
                name="text"
                placeholder="Subscribe to our NewsLetter"
                className="my-4 rounded-2xl border-none focus:outline-none w-8/12 focus:ring focus:ring-red-700  bg-gray-200 placeholder:text-xs"
              />
              <button className=" text-white bg-black text-sm rounded-full p-2 m-2 focus:outline-none focus:ring focus:ring-white p-1">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
      </center>

      <center>
        <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 w-11/12" />
      </center>

      <div className="flex justify-around py-3">
        Copyright Kiira Motors Corporation
      </div>
    </div>
  );
};

export default Footer;
