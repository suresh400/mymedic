import React from "react";
import image from "../images/about.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="Maheshwara Medical College"
            />
          </div>
          <div className="hero-content">
            <p>
              Welcome to <strong>Maheshwara Medical College & Hospital in Hyderabad</strong>, where our commitment is to your health and well-being. For over 25 years, we have been serving the community with compassionate care and advanced medical expertise. Our state-of-the-art facility is equipped with the latest in diagnostic and treatment technology, providing comprehensive care across a wide range of specialties.
            </p>
            <p>
              Maheshwara Medical College brings together a team of highly qualified doctors, nurses, and healthcare professionals dedicated to creating a patient-centered environment. Our departments cover various medical needs, including cardiology, oncology, orthopedics, pediatrics, and emergency care, ensuring that every aspect of your health is attended to.
            </p>
            <p>
              Our mission is to deliver high-quality healthcare with empathy, innovation, and integrity. We prioritize patient comfort and privacy, offering personalized treatment plans tailored to individual needs. With round-the-clock emergency services, Maheshwara Medical College is here for you when you need us the most, providing exceptional care with the utmost respect and professionalism.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
