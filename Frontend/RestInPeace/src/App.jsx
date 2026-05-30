import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// User Components
import NavbarUser from "./components/NavbarUser";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import UserMenu from "./components/UserMenu";
import Contact from "./components/Contact";
import Login from "./components/Login";

// Admin Components
import NavbarAdmin from "./components/NavbarAdmin";
import AdminMenu from "./components/AdminMenu";
import Billing from "./components/Billing";
import BillingSummary from "./components/BillingSummary";

import "./styles/index.css";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState({}); // Tracks items per table
  const [selectedTable, setSelectedTable] = useState(null);

  // Add items to cart by table
  const addToCart = (table, item) => {
    setCart(prevCart => {
      const tableCart = prevCart[table] || [];
      const existingItemIndex = tableCart.findIndex(i => i.id === item.id);

      if (existingItemIndex >= 0) {
        const updatedCart = [...tableCart];
        updatedCart[existingItemIndex].quantity += 1;
        return { ...prevCart, [table]: updatedCart };
      } else {
        return {
          ...prevCart,
          [table]: [...tableCart, { ...item, quantity: 1 }]
        };
      }
    });
  };

  return (
    <Router>
      <Routes>
        {/* User Side Routes */}
        <Route path="/" element={<><NavbarUser /><Home /></>} />
        <Route path="/gallery" element={<><NavbarUser /><Gallery /></>} />
        <Route path="/menu" element={<><NavbarUser /><UserMenu /></>} />
        <Route path="/contact" element={<><NavbarUser /><Contact /></>} />
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />

        {/* Admin Route Redirection */}
        <Route
          path="/admin"
          element={isAdmin ? <Navigate to="/admin/menu" replace /> : <Navigate to="/login" replace />}
        />

        {/* Admin Protected Routes */}
        {isAdmin && (
          <>
            <Route
              path="/admin/menu"
              element={
                <>
                  <NavbarAdmin setIsAdmin={setIsAdmin} />
                  <AdminMenu
                    addToCart={addToCart}
                    selectedTable={selectedTable}
                    setSelectedTable={setSelectedTable}
                  />
                </>
              }
            />
            <Route
              path="/admin/billing"
              element={
                <>
                  <NavbarAdmin setIsAdmin={setIsAdmin} />
                  <Billing
                    cart={cart}
                    setCart={setCart}
                  />
                </>
              }
            />
            <Route
              path="/admin/billing-summary"
              element={
                <>
                  <NavbarAdmin setIsAdmin={setIsAdmin} />
                  <BillingSummary />
                </>
              }
            />
          </>
        )}

        {/* Fallback */}
        <Route path="/admin/*" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
