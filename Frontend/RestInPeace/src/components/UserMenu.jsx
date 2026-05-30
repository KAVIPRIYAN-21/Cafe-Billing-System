import React, { useState } from "react";
import "../styles/menu.css";

const menuData = {
  "American cuisine": [
    { id: 1, name: "Burger", image: "/public/cafe1.jpg", price: 150 },
    { id: 2, name: "Pizza", image: "/public/Pizza.jpg", price: 250 },
    { id: 3, name: "Fries", image: "/public/Fries.jpg", price: 100 },
    { id: 4, name: "Garlic Bread", image: "/public/garlicBread.jpg", price: 120 }
  ],
  "Fried Chicken": [
    { id: 5, name: "Strips", image: "/public/Strips.jpg", price: 200 },
    { id: 6, name: "Wings", image: "/public/Wings.jpg", price: 280 }
  ],
  "Beverages": [
    { id: 7, name: "Green apple Mocktail", image: "/public/cafe4.jpg", price: 80 },
    { id: 8, name: "Coke Jar", image: "/public/special2.jpg", price: 60 },
    { id: 9, name: "Blue Breeze", image: "/public/blue.jpg", price: 150 }
  ],
  "Desserts": [
    { id: 10, name: "Triple Chocolate Brownie", image: "/public/cafe2.jpg", price: 100 },
    { id: 11, name: "Dessert Platter", image: "/public/dessertplatter.jpg", price: 180 },
    { id: 12, name: "Matilda Cake", image: "/public/special1.jpg", price: 180 }
  ]
};

const UserMenu = () => {
  const categories = ["All", ...Object.keys(menuData)];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? Object.values(menuData).flat()
      : menuData[selectedCategory];

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMenu;
