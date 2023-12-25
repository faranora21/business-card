import React from "react";
import profileImage from "./profile.jpeg";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <img className="info--image" src={profileImage} alt="profileImage" />
      <h3 className="info--title">Nur Farah</h3>
      <p className="info--desc">Front-End Developer</p>
      <div className="buttons">
        <button>Email</button>
        <button className="button--link">Linkedin</button>
      </div>
    </div>
  );
}

export default Info;
