import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard"; // Import the ImageCard component

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />

      {/* Add ImageCard component */}
      <ImageCard />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
