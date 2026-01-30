import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SHOP INFO */}
        <div className="footer-box">
          <h3>Mobile Shop</h3>
          <p>
            Buy best quality mobiles like Redmi, Poco & Samsung at affordable
            prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/registrationpage">Register</Link>
          <Link to="/about">About</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h4>Contact Us</h4>
          <p>Email: mobileshop@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Coimbatore,Tamil Nadu, India</p>
        </div>

        {/* SUPPORT */}
        <div className="footer-box">
          <h4>Support</h4>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 Mobile Service Shop | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
