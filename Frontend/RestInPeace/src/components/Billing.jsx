import React, { useState } from "react";
import { saveBill } from "../api/api";
import "../styles/billing.css";

const Billing = ({ cart, setCart, updateBillingSummary }) => {
  const [loadingTable, setLoadingTable] = useState(null);

  const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePrint = async (table) => {
    const items = cart[table];
    if (!items || items.length === 0) return;

    // ✅ Updated bill object with required timestamp field
    const billRecord = {
      tableNumber: parseInt(table),
      totalAmount: calculateTotal(items),
      timestamp: new Date().toISOString(), // ✅ This was missing
      items: items.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    try {
      setLoadingTable(table);
      await saveBill(billRecord);
      alert(`✅ Bill saved for Table ${table}`);

      setCart((prev) => {
        const updated = { ...prev };
        delete updated[table];
        return updated;
      });

      if (updateBillingSummary) {
        updateBillingSummary(); // Optional callback
      }
    } catch (err) {
      console.error("❌ Error saving bill:", err);
      alert(`❌ Failed to save bill for Table ${table}`);
    } finally {
      setLoadingTable(null);
    }
  };

  return (
    <div className="billing-container">
      <h2 className="billing-title">Current Orders</h2>

      {Object.keys(cart).length === 0 ? (
        <p className="no-orders">No active orders</p>
      ) : (
        Object.entries(cart).map(([table, items]) => (
          <div key={table} className="order-card">
            <div className="order-header">
              <h3>Table {table}</h3>
              <button
                className="checkout-btn"
                onClick={() => handlePrint(table)}
                disabled={loadingTable === table}
              >
                {loadingTable === table ? "Saving..." : "Print Bill"}
              </button>
            </div>

            <ul className="order-items">
              {items.map((item, idx) => (
                <li key={idx} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">x {item.quantity}</span>
                  <span className="item-price">
                    ₹{item.quantity * item.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="order-total">
              <strong>Total:</strong>
              <span>₹{calculateTotal(items)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Billing;
