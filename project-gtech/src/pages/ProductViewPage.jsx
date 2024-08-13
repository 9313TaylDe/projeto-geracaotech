// src/components/ImageDetail.jsx
import React, { useState } from "react";

const ImageDetail = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="image-detail-overlay">
      <div className="image-detail-box">
        <button onClick={handlePrev} className="nav-button prev-button">
          ◀
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="large-image"
        />
        <button onClick={handleNext} className="nav-button next-button">
          ▶
        </button>
        <button onClick={onClose} className="close-button">
          ✖
        </button>
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
