// import React, { useState } from "react";
// import "./index.css";
// import { Link } from "react-router-dom";

// function Homepage() {

// const [count,setCount]=useState(0)
// const [ value,setValue]=useState({

// })

// function inc (){
// setCount(prev=> prev + 1)
// }

//   return (
//     <div>
//       {/* <h1>welcome to the mobile service shop!</h1> */}
// {/* <button onClick={inc}>increase</button> */}
//       {/* NAVBAR */}
//       <div className="navbar">
//         <a href="registrationpage">Registration</a>
//         <a href="About">click to know about more details and enquiry</a>
//        <Link to="/cart"> <img src="/cart.png" alt="cart"/></Link>
//        {/* <h6>{count}</h6> */}
//       </div>

//       {/* REDMI SECTION */}
//       <div className="section">
//         <h3>Redmi - Mobiles</h3>

//         <div className="images">

//           <div className="mobile-card">
//             <img src="/image.jpeg" alt="redmi" />
//             <h6 className="mobile-name">Redmi Model 1</h6>
//             <h6 className="mobile-price">Price : 10,000 </h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/redmi3.jpeg" alt="redmi" />
//             <h6 className="mobile-name">Redmi Model 2</h6>
//             <h6 className="mobile-price">Price : 12,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/redmi1.jpeg" alt="redmi" />
//             <h6 className="mobile-name">Redmi Model 3</h6>
//             <h6 className="mobile-price">Price : 11,500</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/redmi2.jpeg" alt="redmi" />
//             <h6 className="mobile-name">Redmi Model 4</h6>
//             <h6 className="mobile-price">Price : 13,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//         </div>
//       </div>

//       {/* POCO SECTION */}
//       <div className="section">
//         <h3>Poco - mobiles</h3>

//         <div className="images">

//           <div className="mobile-card">
//             <img src="/poco1.jpg" alt="poco" />
//             <h6 className="mobile-name">Poco X</h6>
//             <h6 className="mobile-price">Price : 12,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/poco2.jpeg" alt="poco-1" />
//             <h6 className="mobile-name">Poco M1</h6>
//             <h6 className="mobile-price">Price : 14,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/poco3.webp" alt="poco-2" />
//             <h6 className="mobile-name">Poco M2</h6>
//             <h6 className="mobile-price">Price : 15,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/poco4.webp" alt="poco-3" />
//             <h6 className="mobile-name">Poco M3</h6>
//             <h6 className="mobile-price">Price : 16,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/poco5.jpeg" alt="poco-4" />
//             <h6 className="mobile-name">Poco M4</h6>
//             <h6 className="mobile-price">Price : 18,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//         </div>
//       </div>

//       {/* SAMSUNG SECTION */}
//       <div className="section">
//         <h3>Samsung - Mobiles</h3>

//         <div className="images">

//           <div className="mobile-card">
//             <img src="/samsung1.jpeg" alt="samsung" />
//             <h6 className="mobile-name">Samsung A1</h6>
//             <h6 className="mobile-price">Price : 20,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//           <div className="mobile-card">
//             <img src="/samsung2.jpeg" alt="samsung-1" />
//             <h6 className="mobile-name">Samsung A2</h6>
//             <h6 className="mobile-price">Price : 22,000</h6>
//             <button className="cart-btn" onClick={inc}>Add to Cart</button>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default Homepage;
// import React, { useState } from "react";
// import "./index.css";
// import { Link } from "react-router-dom";

// function Homepage() {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   function addToCart(item) {
//   const updated = [...cartItems, item];
//   setCartItems(updated);
//   setCartCount(updated.length);

//   // SAVE TO LOCAL STORAGE
//   localStorage.setItem("cart", JSON.stringify(updated));
// }



//   const redmi = [
//     { id: 1, name: "Redmi Model 1", price: 10000, img: "/image.jpeg" },
//     { id: 2, name: "Redmi Model 2", price: 12000, img: "/redmi3.jpeg" },
//     { id: 3, name: "Redmi Model 3", price: 11500, img: "/redmi1.jpeg" },
//     { id: 4, name: "Redmi Model 4", price: 13000, img: "/redmi2.jpeg" },
//   ];

//   const poco = [
//     { id: 5, name: "Poco X", price: 12000, img: "/poco1.jpg" },
//     { id: 6, name: "Poco M1", price: 14000, img: "/poco2.jpeg" },
//     { id: 7, name: "Poco M2", price: 15000, img: "/poco3.webp" },
//     { id: 8, name: "Poco M3", price: 16000, img: "/poco4.webp" },
//     { id: 9, name: "Poco M4", price: 18000, img: "/poco5.jpeg" },
//   ];

//   const samsung = [
//     { id: 10, name: "Samsung A1", price: 20000, img: "/samsung1.jpeg" },
//     { id: 11, name: "Samsung A2", price: 22000, img: "/samsung2.jpeg" },
//   ];


//   function addToCart(item) {
//   function addToCart(item) {
//   const updated = [...cartItems, item];
//   setCartItems(updated);
//   setCartCount(updated.length);

//   // SAVE TO LOCAL STORAGE
//   localStorage.setItem("cart", JSON.stringify(updated));
// }

//   }



//   function MobileSection({ title, items }) {
//     return (
//       <div className="section">
//         <h3>{title}</h3>
//         <div className="images">
//           {items.map((item) => (
//             <div className="mobile-card" key={item.id}>
//               <img src={item.img} alt={item.name}/>

//               <h6 className="mobile-name">{item.name}</h6>
//               <h6 className="mobile-price">Price: ₹{item.price}</h6>

//               <button className="cart-btn" onClick={() => addToCart(item)}>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // ===========================================

//   return (
//     <div>
//       {/* NAVBAR */}
//       <div className="navbar">
//         <a href="registrationpage">Registration</a>
//         <a href="About">click to know about more details and enquiry</a>

//         <Link to="/cart">
//           <img src="/cart.png" alt="cart" className="cart-icon" />
//         </Link>

//         <h6>{cartCount}</h6>
//       </div>

//       {/* SECTIONS */}
//       <MobileSection title="Redmi - Mobiles" items={redmi}/>
//       <MobileSection title="Poco - Mobiles" items={poco} />
//       <MobileSection title="Samsung - Mobiles" items={samsung}/>
//     </div>
//   );
// }

// export default Homepage;

import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Footer from "./Footerpage/Footer";


function Homepage() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // ✅ LOAD CART FROM LOCAL STORAGE WHEN PAGE OPENS
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saved);
    setCartCount(saved.length);
  }, []);

  // ✅ ADD TO CART
  function addToCart(item) {
    const updated = [...cartItems, item];
    setCartItems(updated);
    setCartCount(updated.length);

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  // 🔥 MOBILE DATA
  const redmi = [
    { id: 1, name: "Redmi Model 1", price: 10000, img: "/image.jpeg" },
    { id: 2, name: "Redmi Model 2", price: 12000, img: "/redmi3.jpeg" },
    { id: 3, name: "Redmi Model 3", price: 11500, img: "/redmi1.jpeg" },
    { id: 4, name: "Redmi Model 4", price: 13000, img: "/redmi2.jpeg" },
    { id: 4, name: "Redmi Model 4", price: 15000, img: "/samsung2.jpeg"},
  ];

  const poco = [
    { id: 5, name: "Poco X", price: 12000, img: "/poco1.jpg" },
    { id: 6, name: "Poco M1", price: 14000, img: "/poco2.jpeg" },
    { id: 7, name: "Poco M2", price: 15000, img: "/poco3.webp" },
    { id: 8, name: "Poco M3", price: 16000, img: "/poco4.webp" },
    { id: 9, name: "Poco M4", price: 18000, img: "/poco5.jpeg" },
  ];

  const samsung = [
    { id: 10, name: "Samsung A1", price: 20000, img: "/samsung1.jpeg"},
    { id: 11, name: "Samsung A2", price: 22000, img: "/samsung2.jpeg"},
    { id: 11, name: "Samsung A3", price: 22000, img: "/samsung-12.jpg"},
    { id: 11, name: "Samsung A3", price: 22000, img: "/samsung-13.jpg"},
    { id: 11, name: "Samsung A3", price: 22000, img: "/samsung-12.jpg"},
  ];

  // 🔹 COMPONENT FOR SECTIONS
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

              <button className="cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =============================

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <a href="registrationpage">Registration</a>
        <a href="About">click to know about more details and enquiry</a>

        <Link to="/cart">
          <img src="/cart.png" alt="cart" className="cart-icon" />
        </Link>

        <h6>{cartCount}</h6>
      </div>

      {/* SECTIONS */}
      <MobileSection title="Redmi - Mobiles" items={redmi} />
      <MobileSection title="Poco - Mobiles" items={poco} />
      <MobileSection title="Samsung - Mobiles" items={samsung} />
      <Footer/>
    </div>
  );
}

export default Homepage;
