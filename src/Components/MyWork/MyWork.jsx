import React from "react";
import "./MyWork.css";
import proj1 from "../../assets/proj2.jpg";
import proj2 from "../../assets/proj1.jpg";
function MyWork() {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My projects</h1>
      </div>
      <div className="mywork-container">
        <div className="mywork-item">
          <p>Search and select your favorite books</p>
          <img className="mywork-img" src={proj1} alt="Project 1" />
        </div>
        <div className="mywork-item">
          <p>Family expense tracker</p>
          <img className="mywork-img" src={proj2} alt="Project 2" />
        </div>
      </div>
      <div className="mywork-footer">
        <p>Check out my projects on GitHub</p>
        <a href="https://github.com/Autishnick/Portfolio.git"></a>
      </div>
    </div>
  );
}

export default MyWork;
