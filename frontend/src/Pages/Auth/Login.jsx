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
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/login', {
            username,
            password,
        });

        if (response.data.success) {
            // Handle successful login (redirect to protected page)
            console.log('Login successful!');
            console.log(response.data)
           
            // navigate('/cart');
            console.log(username)
            // Implement logic to redirect to protected page (e.g., HomePage)
        } else {
            setErrorMessage(response.data.message || 'Login failed');
            console.log(response.data);
            
        }
    } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred. Please try again.');
    }
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
              onSubmit={handleSubmit}
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
              <div> {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
                <button
                  className=" text-white w-6/12 bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                  type="submit"
                >
                  Sign in
                </button>
             

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
