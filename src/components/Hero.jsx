import React from "react";
import image from "../images/img1.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Priority
        </h1>
        <p>
        At Maheshwara Medical College & Hospital in Hyderabad, we are dedicated to providing you with the highest quality care in a compassionate and supportive environment. With our skilled team of medical professionals and advanced facilities, we are committed to ensuring every patient receives personalized treatment and attention.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="HealthBridge Hospital"
        />
      </div>
    </section>
  );
};

export default Hero;
