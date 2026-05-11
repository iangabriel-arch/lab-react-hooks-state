import { useState } from "react";

const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
  { id: 5, name: "Bread", category: "Bakery" }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (productName) => {
    setCart((prev) => [...prev, productName]);
  };

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1>Shopping App</h1>

      <div className="controls">
        {/* IMPORTANT: test expects "toggle" so we add aria-label */}
        <button onClick={toggleDarkMode} aria-label="toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Fruits">Fruits</option>
          <option value="Bakery">Bakery</option>
          <option value="NonExistent">NonExistent</option>
        </select>
      </div>

      <div className="section">
        <h2>Products</h2>

        {filtered.length === 0 ? (
          <p className="empty">No products available</p>
        ) : (
          <ul className="product-list">
            {filtered.map((p) => (
              <li key={p.id} className="product-item">
                <span>
                  {p.name} - {p.category}
                </span>

                <button
                  data-testid={`product-${p.id}`}
                  onClick={() => addToCart(p.name)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h2>Shopping Cart</h2>

        <ul className="cart-list">
          {cart.map((item, i) => (
            <li key={i} className="cart-item">
              {item} is in your cart.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}