import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import icon from "../assets/images/icon.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.jpg";
import chargers from "../assets/images/Picture8.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Header from "react-headroom";
import Headroom from "react-headroom";
import axios from "axios";

const Navbar = () => {
  const [username, setUsername] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        if (!res.data.valid && isLoggedIn) {
          setUsername(res.data[0].username);
        } else {
          navigate("/login");
          // console.log(res.data[0].username);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isDiscoverMore, setIsDiscoverMore] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  // products
  const handleMouseEnter = () => {
    setIsHovered(true);
    // console.log(isHovered);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    // console.log(isHovered);
  };

  // services
  const handleMouseEnterServices = () => {
    setIsServices(true);
  };
  const handleMouseLeaveServices = () => {
    setIsServices(false);
  };

  // services
  const handleMouseEnterDiscover = () => {
    setIsDiscoverMore(!isDiscoverMore);
    setIsServices(false);
    setIsHovered(false);
  };
  const handleMouseLeaveDiscover = () => {
    setIsDiscoverMore(false);
  };

  // auth
  const handleMouseEnterAuth = () => {
    setIsAuth(true);
  };
  const handleMouseLeaveAuth = () => {
    setIsAuth(false);
  };

  const handleLoggedOut = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="w-full flex justify-center text-[1.3rem] relative float-start bg-pink">
      <div
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.2)",
        }}
        className="  text-white flex justify-between   w-11/12 items-center rounded-full mt-3"
      >
        {/* LOGO */}
        <div className="px-4">
          {" "}
          <Link to="/">
            <span className=" text-white text-[1.3rem]">
              <img className="w-10 h-10" src={icon} alt="KMC" />
            </span>
          </Link>
        </div>
        {/* SiteMap */}
        <div>
          <ul className="flex align-middle">
            <Link
              className="px-2 cursor-pointer hover:text-white-500 hover:underline text-xl py-4 hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c] active:underline "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Products
              <div className="absolute top-[3.5rem] left-1  bg-white md:w-full">
                {isHovered && (
                  <div
                    style={isHovered ? { transition: "0.3s" } : ""}
                    className="shadow-lg p-4 rounded-lg text-black"
                  >
                    <ul className="flex justify-center items-center">
                      <NavLink
                        to="/kayoola-evs"
                        className="px-6 active:underline"
                      >
                        <li className="px-6">
                          {" "}
                          <img className="w-40 h-30 py-3" src={b} alt="" />
                          <p>Kayoola EVS</p>
                        </li>
                      </NavLink>
                      <NavLink
                        to="/kayoola-coach"
                        className="px-6 active:underline"
                      >
                        {" "}
                        <img
                          style={{ transform: "scaleX(-1)" }}
                          className="w-40 h-30"
                          src={c}
                          alt=""
                        />
                        <p>Kayoola Coach</p>
                      </NavLink>
                      <li className="px-6">
                        {" "}
                        <img
                          className="w-40 h-30  py-6"
                          src={chargers}
                          alt=""
                        />
                        <p>Chargers</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </Link>
            <li
              className="px-2 cursor-pointer hover:text-white-500 hover:underline text-xl py-4 hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c]"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
              // onMouseLeave={handleMouseLeaveServices}
            >
              Services
              {/* services */}
              <div className="absolute top-[3.5rem] left-1  bg-white md:w-full text-black">
                {isServices && (
                  <div
                    style={isServices ? { transition: "0.3s" } : ""}
                    className="shadow-lg p-4 rounded-lg"
                  >
                    <ul className="flex justify-center items-center  py-4">
                      <li className="px-6 ">
                        <p>Contract Manufacturing</p>
                      </li>
                      <span className="border-r-2 border-gray-400">&nbsp;</span>
                      <li className="px-6">
                        <p>Product Support Services</p>
                      </li>
                      <span className="border-r-2 border-gray-400">&nbsp;</span>
                      <li className="px-6">
                        <p>Engineering Services</p>
                      </li>
                      <span className="border-r-2 border-gray-400">&nbsp;</span>
                      <li className="px-6">
                        <p>
                          Product Lease and <br />
                          Rental Services
                        </p>
                      </li>
                      <span className="border-r-2 border-gray-400">&nbsp;</span>
                      <li className="px-6">
                        <p>
                          Consulting and <br />
                          Advisory Services
                        </p>
                      </li>
                      <span className="border-r-2 border-gray-400">&nbsp;</span>
                      <li className="px-6">
                        <Link className="hover:underline" to="/vehicle-hire">
                          Vehicle Hire
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li
              className="px-2 cursor-pointer hover:text-white-500 hover:underline text-xl py-4 hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c] transition-duration: 200ms transition-timing-function: ease-in-out;"
              onMouseEnter={handleMouseEnterDiscover}
              onMouseLeave={handleMouseLeaveDiscover}
            >
              Discover More
              {/* Discover More */}
              <div className="absolute top-[3.5rem] left-4  bg-white md:w-full text-black">
                {isDiscoverMore && (
                  <div
                    style={isDiscoverMore ? { transition: "0.3s" } : ""}
                    className="shadow-lg p-4 rounded-lg"
                  >
                    <ul className="flex justify-center items-center">
                      <li className="px-6 ">
                        {/* <img
                  className="w-40 h-30"
                  src="https://images.unsplash.com/photo-1527058918112-6e17a8213943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                /> */}
                        <ul>
                          <li className="font-bold">Our company</li>
                          <Link className="hover:underline" to="/about">
                            About Us
                          </Link>
                          <li>Careers</li>
                          <Link className="hover:underline" to="/projects">
                            Projects
                          </Link>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li className="px-6">
                        <ul>
                          <li className="font-bold">Media Center</li>
                          <Link className="hover:underline" to="/blog">
                            Event
                          </Link>
                          <li>Articles</li>
                          <Link className="hover:underline" to="/clubs">
                            Mobility Clubs
                          </Link>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li className="px-6">
                        <ul>
                          <li className="font-bold">Resources</li>
                          <Link className="hover:underline" to="/reports">
                            Annual Reports
                          </Link>
                          <li>Investor</li>
                          <li>&nbsp;</li>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li className="px-6">
                        <ul>
                          <li className="font-bold">Support</li>
                          <li>Service & Maintenance</li>
                          <li>Become a partner</li>
                          <li>&nbsp;</li>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                      <li className="px-6">
                        <ul>
                          <li className="font-bold">Shop</li>
                          <Link className="hover:underline" to="/shop">
                            KMC Shop
                          </Link>
                          <br />
                          <Link to="/auto-parts">My Spare Parts</Link>
                          <li>&nbsp;</li>
                        </ul>
                      </li>
                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className="mx-4  ">
          <div
            onMouseEnter={handleMouseEnterAuth}
            onMouseLeave={handleMouseLeaveAuth}
          >
            <button
              style={{
                backdropFilter: "blur(10px)",
                background: "rgba(0,0,0,0.2)",
              }}
              className="  p-4 rounded-full"
            >
              <FaRegUser className="text-white " />
            </button>
            {/* services */}
            <div className="absolute top-[3.5rem] right-1  bg-white md:w-1/12 text-black">
              {isAuth && (
                <div
                  style={isAuth ? { transition: "0.3s" } : ""}
                  className="shadow-lg p-4 rounded-lg"
                >
                  <ul className="flex flex-col justify-center items-center  ">
                    <Link className="mb-4">
                      <button>{username}</button>
                    </Link>
                    {/* <span className="border-b-2 w-full border-gray-400"></span> */}
                    <button
                      onClick={handleLoggedOut}
                      className="px-6 active:underline bg-red-500 text-white rounded-2xl"
                    >
                      <NavLink to="/sign-up">SignOut</NavLink>
                    </button>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
    </div>
  );
};

export default Navbar;
