import React from "react";
import me from "../../assets/ya.jpg";
import "./About.css";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={me} alt="myself" />
        </div>
        <div className="about-left">
          <div className="about-para">
            <p>
              I am a front-end developer and a first-year student at Lviv
              Polytechnic University, majoring in computer science. I want
              creating beautiful and functional web applications.
            </p>
            <p>
              I want to find an internship in this field to gain more experience
              and do even better projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills">
              <p className="about-skills-p">HTML&CSS</p>
              <p className="about-skills-p">Java Script</p>
              <p className="about-skills-p">React JS</p>
              <p className="about-skills-p">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
