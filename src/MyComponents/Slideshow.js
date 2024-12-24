import React, { useState, useEffect } from "react";
import './Slideshow.css';

export const Slideshow = () => {

    const slides = [
        "image1.png",
        "image2.png",
        "image3.png",
        "image4.png",
        "image5.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer); 
    }, [currentIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slideshow-container">
            {/* Slide Content */}
            <div className="slideshow-slide">
              <a href="">
              <img className="slide-image" src={slides[currentIndex]}/>
              </a>
            </div>

            
            <button className="prev-button" onClick={prevSlide}>
                &#10094; 
            </button>
            <button className="next-button" onClick={nextSlide}>
                &#10095; 
            </button>

            
        </div>
    );
};
