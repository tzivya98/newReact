import React, { useState } from 'react';

const Image = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevImage}>&lt;</button>
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ borderRadius: '10px', maxWidth: '100%' }}
        />
        <button onClick={handleNextImage}>&gt;</button>
      </div>
      <div>
        {imageUrls.map((url, index) => (
          <input
            key={index}
            type="radio"
            name="imageRadio"
            id={`imageRadio${index}`}
            checked={currentImageIndex === index}
            onChange={() => handleImageChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Image;