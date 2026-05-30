import axios from "axios";

const API = "http://localhost:8080/api/bills";

export const saveBill = async (data) => {
  try {
    return await axios.post(`${API}/save`, data);
  } catch (error) {
    console.error("❌ Error saving bill:", error);
    throw error;
  }
};

export const fetchBillsByType = async (type) => {
  try {
    const res = await axios.get(`${API}/${type}`);
    return res.data;
  } catch (error) {
    console.error(`❌ Failed to fetch ${type} bills:`, error);
    throw error;
  }
};

export const fetchHighestBill = async () => {
  try {
    const res = await axios.get(`${API}/highest`);
    return res.data;
  } catch (error) {
    console.error("❌ Failed to fetch highest bill:", error);
    throw error;
  }
};

export const fetchLowestBill = async () => {
  try {
    const res = await axios.get(`${API}/lowest`);
    return res.data;
  } catch (error) {
    console.error("❌ Failed to fetch lowest bill:", error);
    throw error;
  }
};
