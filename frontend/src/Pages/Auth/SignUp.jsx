import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Headroom from "react-headroom";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";

//Login Form
const SignUp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState({}); // State for storing validation errors
  const navigate = useNavigate();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/register", {
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log("Cannot connect"));
  };

  const handleValidationUsername = (e) => {
    setUsername(e.target.value);
    console.log("Input Changed");
    // validation
    const validationErrors = {}; // Object to store validation errors

    if (username.trim().length < 3) {
      validationErrors.username = "Name must be at least 3 characters long.";
    }

    console.log(validationErrors);
    setErrors(validationErrors); // Update errors state with validation results

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data if no validation errors
      console.log("Form data:", { username });
      // Replace with your actual form submission logic (e.g., API call)
    }
  };

  const handleValidationEmail = (e) => {
    setEmail(e.target.value);
    console.log("Input Changed");
    // validation
    const validationErrors = {}; // Object to store validation errors

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = "Invalid email format.";
    }

    console.log(validationErrors);
    setErrors(validationErrors); // Update errors state with validation results

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data if no validation errors
      console.log("Form data:", { email });
      // Replace with your actual form submission logic (e.g., API call)
    }
  };

  const handleValidationPassword = (e) => {
    setPassword(e.target.value);
    console.log("Input Changed");
    // validation
    const validationErrors = {}; // Object to store validation errors

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      validationErrors.password =
        "Password must be at least 8 characters long and contain a lowercase letter, an uppercase letter, a number, and a special symbol.";
    }

    console.log(validationErrors);
    setErrors(validationErrors); // Update errors state with validation results

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data if no validation errors
      console.log("Form data:", { password });
      // Replace with your actual form submission logic (e.g., API call)
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="absolute w-full ">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>

      <div
        className="absolute z-[-1] flex font-poppins bg-black w-[100vw]  border-none"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[40rem]  h-[100vh] border-none  ">
          <center>
            <form className="relative md:top-[14rem] top-[5rem] grid w-8/12 p-8  rounded-2xl">
              <h1 className="text-3xl font-bold text-left text-white py-5">
                Create new account
              </h1>
              <input
                type="text"
                name="username"
                onChange={handleValidationUsername}
                placeholder="Username"
                required="required"
                className="my-4 rounded-2xl border-none "
              />
              {errors.username && (
                <span className="error text-red-600 text-sm">
                  {errors.username}
                </span>
              )}
              {/* <input
                type="email"
                name="email"
                required
                onChange={handleValidationEmail}
                placeholder="Enter Email"
                className="my-4 rounded-2xl border-none "
              />
              {errors.email && (
                <span className="error text-red-600 text-sm">
                  {errors.email}
                </span>
              )} */}
              <input
                type="password"
                name="password"
                required
                onChange={handleValidationPassword}
                placeholder="Enter Password"
                className="my-4 rounded-2xl border-none "
              />
              {errors.password && (
                <span className="error text-red-600 text-sm">
                  {errors.password}
                </span>
              )}
              <input
                type="password"
                name="password"
                required
                onChange={handleValidationPassword}
                placeholder="Confirm Password"
                className="my-4 rounded-2xl border-none focus:outline-none "
              />
              {/* <button onClick={handleToggle}>
                {showPassword ? "Hide Password" : "Show Password"}
              </button> */}
              <br />
              <button
                onClick={handleFormSubmission}
                className=" text-white w-6/12 bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
              >
                Sign Up
              </button>
              <div>
                {/* <Link to="/login">
                  Already have an account?
                  <div className="text-blue-800">Login</div>
                </Link> */}
              </div>
            </form>
          </center>
        </div>

        <img
          src={main}
          className="md:w-[52rem] w-[20rem]  absolute z-[-1]  right-0 bottom-0 object-cover object-center overflow-x-hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default SignUp;
