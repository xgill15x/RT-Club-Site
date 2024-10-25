import React, { useState, useEffect } from "react";

const Gallery = () => {
  const images = ["./slide1.jpg", "./slide2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative max-w-full mx-auto">
      <div className="w-full h-60 flex justify-center items-center bg-gray-200 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          className={`object-cover w-full h-full transition-opacity duration-300 ${
            isTransitioning ? "opacity-50 blur-md" : "opacity-100 blur-0"
          } rounded-lg`}
        />
      </div>
    </div>
  );
};

export default Gallery;
