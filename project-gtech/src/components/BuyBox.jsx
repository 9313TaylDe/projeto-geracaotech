import React, { useState } from "react";

const ImageModal = ({ image, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full"
        >
          &#8592;
        </button>
        <img
          src={image[currentIndex].src}
          alt={image[currentIndex].alt}
          className="w-full h-auto object-cover"
        />
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full"
        >
          &#8594;
        </button>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
