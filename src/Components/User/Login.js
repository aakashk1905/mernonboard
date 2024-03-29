import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Mlogin.css";
import logo from "../../Assests/logo-login.svg";
import cross from "../../Assests/cross-log.svg";
import google from "../../Assests/google.svg";

const Login = ({ setShowLogin, setShowSign }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("https://api.upskillmafia.com/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      alert("Login successful");
      setShowLogin(false);
      Cookies.set("user_name", data.user.name);
      Cookies.set("user_email", data.user.email);
    } else {
      alert("Please check your username and password");
    }
  }
  return (
    <div className="login-cont">
      <form
        onSubmit={(e) => {
          loginUser(e);
        }}
        className="login-inner-cont"
      >
        <div className="l-logo-cont">
          <img src={logo} alt="logo" />
          <div
            className="l-cross-cont"
            onClick={() =>
              (window.location.href = "https://upskillmafia.com/mern")
            }
          >
            <img src={cross} alt="cross" />
          </div>
        </div>
        <div className="login-google-cont">
          <img src={google} alt="google" />
          Continue with Google
        </div>

        <div className="login-or">Or</div>
        <div className="inp-cont">
          <input
            type="email"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="l-inp"
          />
        </div>
        <div className="inp-cont">
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="l-inp"
          />
        </div>
        <div className="forgot-cont">
          <div className="remember-me">
            <input type="checkbox" name="rememberMe" value="rememberMe" />
            <span>Remember me</span>
          </div>
          {/* <div className="forgot">Forgot Password?</div> */}
        </div>
        <button type="submit" className="l-btn">
          Login
        </button>
        <div className="l-new">
          New User?{" "}
          <b
            className="l-sign"
            onClick={() => {
              setShowLogin(false);
              setShowSign(true);
            }}
          >
            Sign Up
          </b>
        </div>
      </form>
    </div>
  );
};

export default Login;
