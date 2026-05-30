import React, { useEffect, useState } from "react";
import {
  fetchBillsByType,
  fetchHighestBill,
  fetchLowestBill,
} from "../api/api";
import "../styles/billing.css";

const BillingSummary = () => {
  const [bills, setBills] = useState([]);
  const [filter, setFilter] = useState("daily");
  const [highest, setHighest] = useState(null);
  const [lowest, setLowest] = useState(null);

  useEffect(() => {
    fetchBillsByType(filter).then(setBills).catch(console.error);
    fetchHighestBill().then(setHighest);
    fetchLowestBill().then(setLowest);
  }, [filter]);

  return (
    <div className="billing-summary-container">
      <h2 className="billing-title">Billing Summary</h2>

      <div className="filter-section">
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="billing-table-section">
        <table className="billing-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Table No</th>
              
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(bills) && bills.length > 0 ? (
              bills.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.tableNumber}</td>
                 
                  <td>{b.totalAmount.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Bills Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="summary-section">
        <div className="summary-box">
          <h4>Highest Bill</h4>
          {highest ? (
            <>
              <p>Order ID: {highest.id}</p>
              <p>Table No: {highest.tableNumber}</p>
              <p>Total: ₹{highest.totalAmount.toFixed(2)}</p>
            </>
          ) : (
            <p>N/A</p>
          )}
        </div>

        <div className="summary-box">
          <h4>Lowest Bill</h4>
          {lowest ? (
            <>
              <p>Order ID: {lowest.id}</p>
              <p>Table No: {lowest.tableNumber}</p>
              <p>Total: ₹{lowest.totalAmount.toFixed(2)}</p>
            </>
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingSummary;
