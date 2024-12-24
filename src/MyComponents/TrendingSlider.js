import React, { useState } from "react";
import "./TrendingSlider.css";

export const Slider = ({ visibleCount = 5 }) => {
    const images = [
       "image.png","image.png","image.png","image.png","image.png",
       "image.png","image.png","image.png","image.png","image.png",
       "image.png","image.png","image.png","image.png","image.png",
       "image.png","image.png","image.png","image.png","image.png"
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
    <div className="trending-slider-container" >
      
      {currentIndex > 0 && (
        <button className="trending-arrow trending-left-arrow" onClick={prevSlide}>
          &#10094; 
        </button>
      )}

      
      <div className="trending-slider-images">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className="trending-slider-image"
          />
        ))}
      </div>

      
      {currentIndex + visibleCount < images.length && (
        <button className="trending-arrow trending-right-arrow" onClick={nextSlide}>
          &#10095; 
        </button>
      )}
    </div>
  );
};


