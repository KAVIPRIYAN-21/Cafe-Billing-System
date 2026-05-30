import React from "react";
import "../styles/contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><FaMapMarkerAlt /> Location: Coimbatore, Tamil Nadu</p>
        <p><FaEnvelope /> Email: <a href="mailto:support@restinpeacecafe.com">support@restinpeacecafe.com</a></p>
        <p><FaPhone /> Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
      </div>

      <div className="social-icons">
        <a href="#" target="_blank"><FaWhatsapp className="social-icon" /></a>
        <a href="https://www.instagram.com/rest_in_peace_cafe?igsh=MWh2OXhiNG5qaXFzOQ==" target="_blank"><FaInstagram className="social-icon" /></a>
        <a href="#" target="_blank"><FaFacebook className="social-icon" /></a>
      </div>

      <h2>Send us a Message</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
