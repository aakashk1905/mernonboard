import React from "react";

import "./Dashboard.css";
import logo from "../Assests/logo.svg";
import Cookies from "js-cookie";

const Dashboard = () => {
  const name = Cookies.get("user_name") || "User";

  return (
    <>
      <div className={`db-mob-cont`}>
        <div className="mob-nav">
          <img src={logo} alt="logo" />
          <div className="reg-name">{name}</div>
        </div>
        <div className="mob-rem-cont">
          <div className="mob-rem-head-cont">
            <div className="mob-rem-head">
              Kick Start your Development Journey with our Onboarding Session
            </div>
            <div className="mob-head-chip-cont"></div>
          </div>
          <div className="mob-rem-line"></div>
          <div className="mob-rem-desc">
            Make Sure to attend Our onboarding session in the virtual campus.
            Date, Time And link Will be provided in the official group so make
            sure to join below. <br />
            (Watch Campus Explanation Video To get Whole info.)
          </div>

          <div
            className="st-wp-join"
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/K5khC7yDykQ4uue9g2UZKX",
                "_blank"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M22.2967 18.7469C21.9561 18.5719 20.2592 17.7406 19.9436 17.6281C19.6279 17.5094 19.3967 17.4531 19.1686 17.8031C18.9373 18.15 18.2811 18.9219 18.0748 19.1562C17.8748 19.3875 17.6717 19.4156 17.3311 19.2437C15.3061 18.2312 13.9779 17.4375 12.6436 15.1469C12.2904 14.5375 12.9967 14.5812 13.6561 13.2656C13.7686 13.0344 13.7123 12.8375 13.6248 12.6625C13.5373 12.4875 12.8498 10.7937 12.5623 10.1031C12.2842 9.43125 11.9967 9.525 11.7873 9.5125C11.5873 9.5 11.3592 9.5 11.1279 9.5C10.8967 9.5 10.5248 9.5875 10.2092 9.92813C9.89355 10.275 9.00293 11.1094 9.00293 12.8031C9.00293 14.4969 10.2373 16.1375 10.4061 16.3687C10.5811 16.6 12.8342 20.075 16.2936 21.5719C18.4811 22.5156 19.3373 22.5969 20.4311 22.4344C21.0967 22.3344 22.4686 21.6031 22.7529 20.7938C23.0373 19.9875 23.0373 19.2969 22.9529 19.1531C22.8686 19 22.6373 18.9125 22.2967 18.7469Z"
                fill="white"
              />
              <path
                d="M28.9127 10.575C28.2064 8.89687 27.1939 7.39063 25.9033 6.09688C24.6127 4.80625 23.1064 3.79063 21.4252 3.0875C19.7064 2.36563 17.8814 2 16.0002 2H15.9377C14.0439 2.00938 12.2096 2.38438 10.4846 3.12188C8.81893 3.83438 7.32518 4.84687 6.04705 6.1375C4.76893 7.42812 3.7658 8.92813 3.07205 10.6C2.3533 12.3313 1.9908 14.1719 2.00018 16.0656C2.00955 18.2344 2.5283 20.3875 3.50018 22.3125V27.0625C3.50018 27.8562 4.14393 28.5 4.93768 28.5H9.6908C11.6158 29.4719 13.7689 29.9906 15.9377 30H16.0033C17.8752 30 19.6908 29.6375 21.4002 28.9281C23.0721 28.2313 24.5752 27.2313 25.8627 25.9531C27.1533 24.675 28.1689 23.1812 28.8783 21.5156C29.6158 19.7906 29.9908 17.9562 30.0002 16.0625C30.0096 14.1594 29.6408 12.3125 28.9127 10.575ZM24.1908 24.2625C22.0002 26.4313 19.0939 27.625 16.0002 27.625H15.9471C14.0627 27.6156 12.1908 27.1469 10.5377 26.2656L10.2752 26.125H5.87518V21.725L5.73455 21.4625C4.8533 19.8094 4.38455 17.9375 4.37518 16.0531C4.36268 12.9375 5.5533 10.0125 7.73768 7.80937C9.91893 5.60625 12.8346 4.3875 15.9502 4.375H16.0033C17.5658 4.375 19.0814 4.67812 20.5096 5.27812C21.9033 5.8625 23.1533 6.70312 24.2283 7.77812C25.3002 8.85 26.1439 10.1031 26.7283 11.4969C27.3346 12.9406 27.6377 14.4719 27.6314 16.0531C27.6127 19.1656 26.3908 22.0813 24.1908 24.2625Z"
                fill="white"
              />
            </svg>
            Join Whatsapp Group
          </div>
        </div>
        <div className="mob-campus-cont">
          <div className="mob-campus-vid-cont">
            <video
              src="https://s3.ap-south-1.amazonaws.com/upskillmafia.com/intro.mp4"
              loop
              autoPlay
              controls
            ></video>
          </div>
          <div className="mob-rem-line"></div>
          <div className="mob-campus-desc-cont">
            <div className="mob-campus-desc-head">
              Explore Virtually on Your Laptop/PC !!
            </div>

            <div className="mob-rem-line"></div>
            <div
              className="mob-campus-cta"
              onClick={() =>
                window.open("https://upskillmafia.com/mern/campus", "_blank")
              }
            >
              <span>Join Campus</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17.061 10.385L13.475 6.79899C13.1936 6.51773 12.812 6.35977 12.4141 6.35986C12.0163 6.35996 11.6348 6.5181 11.3535 6.79949C11.0722 7.08088 10.9143 7.46249 10.9144 7.86034C10.9145 8.2582 11.0726 8.63973 11.354 8.92099L13.793 11.36H5C4.60218 11.36 4.22064 11.518 3.93934 11.7993C3.65804 12.0806 3.5 12.4622 3.5 12.86C3.5 13.2578 3.65804 13.6393 3.93934 13.9207C4.22064 14.202 4.60218 14.36 5 14.36H13.793L11.354 16.799C11.0726 17.0803 10.9145 17.4618 10.9144 17.8596C10.9143 18.2575 11.0722 18.6391 11.3535 18.9205C11.6348 19.2019 12.0163 19.36 12.4141 19.3601C12.812 19.3602 13.1936 19.2023 13.475 18.921L17.061 15.335C17.7162 14.678 18.0842 13.7879 18.0842 12.86C18.0842 11.9321 17.7162 11.042 17.061 10.385Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
