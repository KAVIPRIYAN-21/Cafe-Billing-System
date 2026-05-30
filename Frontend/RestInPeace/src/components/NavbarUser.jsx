import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/navbarUser.css";

const NavbarUser = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.jpg" alt="Cafe Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
      <div className="cart-login">
        <FaShoppingCart className="icon" />
        <Link to="/login">LOGIN</Link>
      </div>
      <div className="social-icons">
        <a href="#"><FaWhatsapp className="social-icon" /></a>
        <a href="https://www.instagram.com/rest_in_peace_cafe?igsh=MWh2OXhiNG5qaXFzOQ=="><FaInstagram className="social-icon" /></a>
        <a href="#"><FaFacebook className="social-icon" /></a>
      </div>
    </div>
  );
};

export default NavbarUser;