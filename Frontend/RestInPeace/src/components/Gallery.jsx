import React from "react";
import "../styles/gallery.css";

const Gallery = () => {
  // Sample images (replace with actual image paths)
  const images = [
    "/public/cafe1.jpg",
    "/public/cafe2.jpg",
    "/public/cafe3.jpg",
    "/public/cafe4.jpg",
    "/public/special1.jpg",
    "/public/blue.jpg"
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
