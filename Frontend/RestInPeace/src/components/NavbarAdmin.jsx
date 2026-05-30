import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbarAdmin.css";

const NavbarAdmin = ({ setIsAdmin }) => {
  return (
    <nav className="admin-navbar">
      <div className="admin-nav-logo">Cafe Admin</div>
      <div className="admin-nav-links">
        <Link to="/admin/menu" className="admin-nav-link">Menu</Link>
        <Link to="/admin/billing" className="admin-nav-link">Billing</Link>
        <Link to="/admin/billing-summary" className="admin-nav-link">Reports</Link>
      </div>
      <button 
        className="admin-logout-btn"
        onClick={() => setIsAdmin(false)}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavbarAdmin;