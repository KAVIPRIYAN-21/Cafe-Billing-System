import React, { useState, useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const specials = [
    {
      image: "/public/special1.jpg",
      title: "Signature Dish",
      description: "Our award-winning chef's special creation"
    },
    {
      image: "/public/special2.jpg",
      title: "Today Special",
      description: "Taste It"
    },
    {
      image: "/public/special3.jpg",
      title: "Cozy Ambience",
      description: "Perfect atmosphere for relaxation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [specials.length]);

  return (
    <div className="home-page">
      {/* Fullscreen Video Background */}
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="public/into.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
        
        {/* Centered Cafe Name */}
        <div className="cafe-title">
          <h1>Rest In Peace Cafe</h1>
          <div className="title-divider"></div>
        </div>
      </div>

      {/* Specials Slider */}
      <div className="specials-section">
        <h2>Our Specialties</h2>
        <div className="specials-slider">
          {specials.map((item, index) => (
            <div 
              key={index}
              className={`special-item ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={item.image} alt={item.title} />
              <div className="special-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded by Giri, a Food Technology graduate with a passion for culinary 
            excellence, Rest In Peace Cafe brings together innovative flavors and 
            warm hospitality. What began as a dream has blossomed into a beloved 
            neighborhood destination.
          </p>
          <p>
            Our team of dedicated chefs and staff work tirelessly to create memorable 
            dining experiences using only the freshest local ingredients.
          </p>
          <div className="owner-signature">
            <img src="/images/owner-signature.png" alt="Owner's Signature" />
            <span>Giri, Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;