import React from "react";
import "./login.scss";
import LoginSideImg from "../../assets/img/login.svg";
import CollegeIcon from "../../assets/img/anand-logo.webp";
import Back from "../../assets/vid/background.mp4"

export default function Login() {
  return (
    <div className="login-component">
      <video autoPlay muted loop id="myVideo" src={Back} />
      <img src={CollegeIcon} alt="college-icon" className="college-icon" />
      <div className="login-container">
        <div className="login-side-img">
          <img src={LoginSideImg} alt="login" />
        </div>
        <div className="login-form">
          <div className="login-title">Login</div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group"> 
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
}
