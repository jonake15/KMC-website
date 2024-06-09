import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Headroom from "react-headroom";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";

//Login Form
const Login = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/login", {
        username,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.Login) {
          navigate("/kayoola-evs");
        } else {
          navigate("/sign-up");
          alert("You are not yet registered");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleInput = () => {
    console.log("Input Changed");
  };
  return (
    <div className="">
      <div className="absolute w-full ">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div
        className="absolute z-[-1] flex font-poppins  w-[100vw]  border-none"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[40rem] h-[100vh] border-none  ">
          <center>
            <form
              onSubmit={handleFormSubmission}
              className="relative md:top-[14rem] top-[5rem] grid w-8/12 p-8  rounded-2xl"
            >
              <h1 className="text-3xl font-bold text-left text-white py-5">
                Welcome back
              </h1>
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required="required"
                className="my-4 rounded-2xl border-none   "
              />
              {/* <input
            type="email"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Email"
          /> */}
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required="required"
                className="my-4 rounded-2xl border-none  "
              />
              {/* <span>Show Password</span> */}
              <Link to="/cart">
                <button
                  className=" text-white w-6/12 bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                  type="submit"
                >
                  Sign in
                </button>
              </Link>

              {/* <Link to="/sign-up">
                Don't have an account?
                <div className="text-blue-800">Register Now</div>
              </Link> */}
            </form>
          </center>
        </div>

        <img
          src={main}
          className="md:w-[52rem] w-[20rem]  absolute z-[-1]  right-0 bottom-0 object-cover object-center overflow-x-hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
