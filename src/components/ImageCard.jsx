import React, { useState } from "react";

// Import local images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

const ImageCard = () => {
  const [isHeaderHovered, setHeaderHovered] = useState(false);

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const containerStyle = {
    display: "flex",
    gap: "16px",
    padding: "20px 0",
    scrollBehavior: "smooth",
    overflow: "hidden", // Remove scrollbar
  };

  const cardStyle = {
    flex: "0 0 auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "400px",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    transition: "transform 0.3s",
  };

  const scrollContainer = (direction) => {
    const container = document.getElementById("scroll-container");
    const scrollAmount = 400;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  // Inline styles for header and hover effects
  const headerStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: isHeaderHovered ? "#0077ff" : "#333",
    transition: "color 0.3s",
    textAlign: "center",
  };

  // Hover effects for the images
  const handleMouseEnter = (event) => {
    event.target.style.transform = "scale(1.2)";
    event.target.parentElement.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.parentElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div style={{ position: "relative", padding: "0 20px" }}>
      {/* Centered Header with hover effect */}
      <h2
        style={headerStyle}
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
      >
        Our Gallery
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scrollContainer("left")}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          border: "none",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          zIndex: "10",
        }}
      >
        &#9664;
      </button>

      <button
        onClick={() => scrollContainer("right")}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          zIndex: "10",
        }}
      >
        &#9654;
      </button>

      {/* Image Container without scrollbar */}
      <div id="scroll-container" style={containerStyle}>
        {images.map((imageSrc, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={imageSrc}
              alt={`Slide ${index + 1}`}
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
