import React from "react";
import "./Hero.css";
import portfolio from "../../assets/portfolio.jpg";
function Hero() {
  return (
    <div id="home" className="Hero">
      <img src={portfolio} alt="Portfolio" className="hero-image" />
      <h1 className="Hero-h1">
        I am Vladyslav Shevchuk, frontend developer from Ukraine
      </h1>
      <p className="Hero-p">
        I am a front-end developer and a first-year student at Lviv Polytechnic
        University, majoring in computer science.
      </p>
    </div>
  );
}

export default Hero;
