import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Footer from "./Footerpage/Footer";

function Homepage() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart  from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // ✅ Add to Cart Function
  function addToCart(item) {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  // 🔥 Mobile Data (All IDs Unique)
  const redmi = [
    { id: 1, name: "Redmi Model 1", price: 10000, img: "/image.jpeg" },
    { id: 2, name: "Redmi Model 2", price: 12000, img: "/redmi3.jpeg" },
    { id: 3, name: "Redmi Model 3", price: 11500, img: "/redmi1.jpeg" },
    { id: 4, name: "Redmi Model 4", price: 13000, img: "/redmi2.jpeg" },
    { id: 5, name: "Redmi Model 5", price: 15000, img: "/redmi3.jpeg" },
  ];

  const poco = [
    { id: 6, name: "Poco X", price: 12000, img: "/poco1.jpg" },
    { id: 7, name: "Poco M1", price: 14000, img: "/poco2.jpeg" },
    { id: 8, name: "Poco M2", price: 15000, img: "/poco3.webp" },
    { id: 9, name: "Poco M3", price: 16000, img: "/poco4.webp" },
    { id: 10, name: "Poco M4", price: 18000, img: "/poco5.jpeg" },
  ];

  const samsung = [
    { id: 11, name: "Samsung A1", price: 20000, img: "/samsung1.jpeg" },
    { id: 12, name: "Samsung A2", price: 22000, img: "/samsung2.jpeg" },
    { id: 13, name: "Samsung A3", price: 23000, img: "/samsung-12.jpg" },
    { id: 14, name: "Samsung A4", price: 24000, img: "/samsung-13.jpg" },
  ];

  // 🔹 Section Component
  function MobileSection({ title, items }) {
    return (
      <div className="section">
        <h3>{title}</h3>

        <div className="images">
          {items.map((item) => (
            <div className="mobile-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h6 className="mobile-name">{item.name}</h6>
              <h6 className="mobile-price">Price: ₹{item.price}</h6>

              <button
                className="cart-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===============================

  return (
    <div>
      {/* ✅ NAVBAR */}
      <div className="navbar">
        <Link to="/registrationpage">Registration</Link>
        <Link to="/about">
          Click to know more details and enquiry
        </Link>

        <Link to="/cart">
          <img src="/cart.png" alt="cart" className="cart-icon" />
        </Link>

        {/* ✅ Cart Count */}
        <h6>{cartItems.length}</h6>
      </div>

      {/* ✅ Mobile Sections */}
      <MobileSection title="Redmi - Mobiles" items={redmi} />
      <MobileSection title="Poco - Mobiles" items={poco} />
      <MobileSection title="Samsung - Mobiles" items={samsung} />

      <Footer />
    </div>
  );
}

export default Homepage;