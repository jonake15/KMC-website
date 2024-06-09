import React from "react";
import axios from "axios";

const Login = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000", {
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
  return (
    <form onSubmit={handleFormSubmission} className="pt-8">
      <div className="mb-3">
        <label for="username" className="form-label">
          UserName
        </label>
        <input
          type="username"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          name="username"
        />
      </div>
      <br />
      <div className="mb-3">
        <label for="password" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="emailHelp"
          name="password"
        />
      </div>
      <br />
      <div
        className="alert alert-success"
        role="alert"
        id="success"
        style={{ display: "none" }}
      ></div>
      <br />
      <div
        className="alert alert-danger"
        role="alert"
        id="error"
        style={{ display: "none" }}
      ></div>
      <br />
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
};

export default Login;
