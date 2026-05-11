import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Cheese", category: "Dairy" },
    { id: 3, name: "Apple", category: "Fruit" },
    { id: 4, name: "Banana", category: "Fruit" },
    { id: 5, name: "Bread", category: "Bakery" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
  <div className={darkMode ? "app dark" : "app"}>
    <h1>🛒 Shopping App</h1>

    <div className="controls">
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruit">Fruit</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>

    <div className="section">
      <h2>Products</h2>

      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <strong>{product.name}</strong>
              <span className="category">{product.category}</span>
            </div>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div className="section">
      <h2>Cart</h2>

      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

export default App;