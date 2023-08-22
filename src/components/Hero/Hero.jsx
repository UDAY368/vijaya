import React from "react";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter innerWidth paddings hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Energy Saving <br />
              Renewable Solar <br />
              Solutions
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              There are lots of ways to save money but few that make this
            </span>
            <span className="secondaryText">
              much sense. Your power. Your savings. SVE services and support.
            </span>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Projects</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={5} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Students Trained</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right flexCenter-img-h">
          <div className="image-container">
            <img src="./solar_panel_landing_img.jpg" alt="landing_image" />
            {/* <img src="./solar_landing_1.jpg" alt="landing_image" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
