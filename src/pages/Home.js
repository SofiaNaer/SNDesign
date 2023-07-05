import React from "react";
import "../App.css";
export default function Home() {
  return (
    <div className="home-container">
      <img
        className="background-img-home"
        src="./images/home.jpg"
        alt="home-logo"
      />
      <div className="Welcome">
        <h2>Welcome to SNDisign store!</h2>
        <div className="intro">
          <h4>
            {" "}
            Here you will find stylish products for modern living rooms. Make
            your house a home with us.
          </h4>
        </div>
      </div>
    </div>
  );
}
