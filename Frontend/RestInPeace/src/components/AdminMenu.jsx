import React, { useState } from "react";
import "../styles/adminMenu.css";

const menuCategories = [
  {
    category: "French Fries",
    items: [
      { id: 1, name: "CLASSIC CRISPY FRIES", price: 59 },
      { id: 2, name: "PERI PERI FRIES", price: 69 },
      { id: 3, name: "CHILLI CHEESE FRIES", price: 89 },
      { id: 4, name: "CHICKEN LOADED", price: 189 },
      { id: 5, name: "CHEESE CHICKEN LOADED", price: 199 },
      { id: 6, name: "KOREAN CHICKEN LOADED", price: 199 },
      { id: 7, name: "NASHVILLE CHICKEN LOADED", price: 199 }
    ]
  },
  {
    category: "Quick Bites",
    items: [
      { id: 8, name: "CHICKEN NUGGETS", price: 109 },
      { id: 9, name: "CORN CHEESE BALLS", price: 109 },
      { id: 10, name: "CHICKEN CHEESE BALLS", price: 109 }
    ]
  },
  {
    category: "Momos",
    items: [
      { id: 11, name: "MIXED VEG MOMOS", price: 89 },
      { id: 12, name: "MUSHROOM MOMOS", price: 99 },
      { id: 13, name: "CHEESY CORN MOMOS", price: 99 },
      { id: 14, name: "PANEER MOMOS", price: 99 },
      { id: 15, name: "CHICKEN MOMOS", price: 109 },
      { id: 16, name: "CHICKEN CHEESE MOMOS", price: 119 },
      { id: 17, name: "CHICKEN SCHEZWAN MOMOS", price: 129 },
      { id: 18, name: "MOMOS PLATTER", price: 139 }
    ]
  },
  {
    category: "Chicken Pops",
    items: [
      { id: 19, name: "CLASSIC CHICKEN POPS", price: 129 },
      { id: 20, name: "MESSY POPS", price: 149 },
      { id: 21, name: "NASHVILLE POPS", price: 149 },
      { id: 22, name: "KOREAN POPS", price: 149 }
    ]
  },
  {
    category: "Chicken Wings",
    items: [
      { id: 23, name: "FRIED CHICKEN", price: 149 },
      { id: 24, name: "PERI PERI CHICKEN", price: 159 },
      { id: 25, name: "NASHVILLE HOT CHICKEN", price: 159 },
      { id: 26, name: "KOREAN CHICKEN", price: 159 }
    ]
  },
  {
    category: "Wraps",
    items: [
      { id: 27, name: "MEXICAN VEG WRAP", price: 109 },
      { id: 28, name: "SPICY COTTAGE CHEESE WRAP", price: 119 },
      { id: 29, name: "WHITE SAUCE CHICKEN WRAP", price: 149 },
      { id: 30, name: "SPICY CHICKEN WRAP", price: 149 },
      { id: 31, name: "FRIED CHICKEN WRAP", price: 159 }
    ]
  },
  {
    category: "Desserts",
    items: [
      { id: 32, name: "GULAB JAMUN ICE CREAM", price: 99 },
      { id: 33, name: "TRIPLE CHOCOLATE BROWNIE", price: 119 },
      { id: 34, name: "STRAWBERRY CHOCOLATE", price: 129 },
      { id: 35, name: "CHOCOLATE TIKKA", price: 149 },
      { id: 36, name: "SIZZLING BROWNIE", price: 169 },
      { id: 37, name: "COOKIE MAN", price: 189 },
      { id: 38, name: "MATILDA CAKE", price: 189 },
      { id: 39, name: "CHOCOLATE MOUSSE", price: 199 },
      { id: 40, name: "CHOCOLATE BOMB", price: 199 },
      { id: 41, name: "CHOCOLATE FAUNDAE", price: 249 },
      { id: 42, name: "DESSERT PLATTER", price: 249 }
    ]
  },
  {
    category: "Waffles",
    items: [
      { id: 43, name: "TRIPLE CHOCOLATE", price: 139 },
      { id: 44, name: "DEATH BY CHOCOLATE", price: 139 },
      { id: 45, name: "OREO", price: 139 },
      { id: 46, name: "KITKAT", price: 139 },
      { id: 47, name: "NUTELLA", price: 139 }
    ]
  },
  {
    category: "Milk Shakes",
    items: [
      { id: 48, name: "VANILLA SHAKE", price: 99 },
      { id: 49, name: "CHOCOLATE SHAKE", price: 99 },
      { id: 50, name: "BUTTERSCOTCH SHAKE", price: 99 },
      { id: 51, name: "KITKAT SHAKE", price: 119 },
      { id: 52, name: "NUTELLA SHAKE", price: 119 },
      { id: 53, name: "BROWNIE SHAKE", price: 119 },
      { id: 54, name: "OREO SHAKE", price: 119 }
    ]
  },
  {
    category: "Mocktails",
    items: [
      { id: 55, name: "COKE JAR", price: 89 },
      { id: 56, name: "STRAWBERRY BREEZE", price: 89 },
      { id: 57, name: "MYSTIC BERRY SPLASH", price: 89 },
      { id: 58, name: "BLUE CURACAO", price: 89 },
      { id: 59, name: "ORANGE", price: 89 },
      { id: 60, name: "GREEN APPLE", price: 89 },
      { id: 61, name: "RED CURRANT", price: 89 },
      { id: 62, name: "VIRGIN CRANBERRY", price: 89 }
    ]
  },
  {
    category: "Cold & Hot Blends",
    items: [
      { id: 63, name: "COLD COFFEE", price: 79 },
      { id: 64, name: "COLD BOOST", price: 76 },
      { id: 65, name: "COLD MILD", price: 77 },
      { id: 66, name: "COLD CHOCOLATE", price: 85 },
      { id: 67, name: "HOT CHOCOLATE", price: 95 },
      { id: 68, name: "PINK HOT CHOCOLATE", price: 149 }
    ]
  }
];

const AdminMenu = ({ addToCart, selectedTable, setSelectedTable }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].category);

  const filteredItems = menuCategories
    .find(cat => cat.category === selectedCategory)
    ?.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="admin-menu-container">
      <h2 className="menu-title">ADMIN MENU</h2>

      {/* Table Selection */}
      <div className="table-selection">
        <h3 className="section-title">Select Table</h3>
        <div className="table-grid">
          {[1, 2, 3, 4, 5, 6].map(table => (
            <button
              key={table}
              className={`table-btn ${selectedTable === table ? "active" : ""}`}
              onClick={() => setSelectedTable(table)}
            >
              Table {table}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      {selectedTable && (
        <div className="menu-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Category Buttons */}
          <div className="category-scroll">
            {menuCategories.map(category => (
              <button
                key={category.category}
                className={`category-btn ${selectedCategory === category.category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="menu-items-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-item-card">
                <div className="item-details">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">₹{item.price}</p>
                </div>
                <button
                  className="add-btn"
                  onClick={() => addToCart(selectedTable, {
                    id: item.id,
                    name: item.name,
                    price: item.price
                  })}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;