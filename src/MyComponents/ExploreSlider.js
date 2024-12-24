import React, { useState } from "react";
import "./ExploreSlider.css";

export const Slider = ({ visibleCount = 3 }) => {
    const images = [
       "image.png","image.png","image.png","image.png","image.png",
       "image.png","image.png","image.png","image.png","image.png",
       "image.png","image.png","image.png","image.png","image.png",
       "image.png","image.png","image.png","image.png","image.png","image.png"
    ]
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex((prevIndex) => prevIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (currentIndex - visibleCount >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - visibleCount);
    }
  };

  
  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="explore-slider-container" >
      
      {currentIndex > 0 && (
        <button className="explore-arrow explore-left-arrow" onClick={prevSlide}>
          &#10094; 
        </button>
      )}

      
      <div className="explore-slider-images">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className="explore-slider-image"
          />
        ))}
      </div>

      
      {currentIndex + visibleCount < images.length && (
        <button className="explore-arrow explore-right-arrow" onClick={nextSlide}>
          &#10095; 
        </button>
      )}
    </div>
  );
};


