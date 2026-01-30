// // import React from 'react'

// // function Order() {
    
// //   return (
// //     <div>Order</div>
// //   )
// // }

//  // export default Order



// import React from "react";
// import axios from "axios";

// function Order() {

//     // Function to confirm order
//   const confirmOrder = async () => {
//     try {
//       const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//       if (cartItems.length === 0) {
//         alert("Cart is empty");
//         return;
//       }

//       const totalAmount = cartItems.reduce(
//         (total, item) => total + item.price * (item.qty || 1),
//         0
//       );

//       const orderData = {
//         products: cartItems,
//         totalAmount: totalAmount,
//         paymentMethod: "COD",
//         orderStatus: "Confirmed"
//       };

//       const res = await axios.post(
//         "http://localhost:3000/api/orders/confirm",
//         orderData
//       );

//       alert("Order Confirmed Successfully!");

//       // Clear cart after success
//       localStorage.removeItem("cart");

//     } catch (error) {
//       console.log(error);
//       alert("Order Failed");
//     }
//   };

//   return (
//     <div className="order-page">
//       <h2>Order Page</h2>
//       <p>Click the button below to confirm your order.</p>

//       {/* Confirm Order Button */}
//       <button className="orderconfirm" onClick={confirmOrder}>
//         Confirm Order
//       </button>
//     </div>
//   );
// }

// export default Order;


import React from "react";
import axios from "axios";

function Order() {

  const confirmOrder = async () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      if (cartItems.length === 0) {
        alert("Cart is empty");
        return;
      }

      const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );

      const orderData = {
        items: cartItems,
        totalAmount: totalAmount,
        paymentMethod: "COD"
      };

      const res = await axios.post(
        "http://localhost:3000/api/orders/create",
        orderData
      );

      if (res.status === 201 || res.status === 200) {
        alert("Order Confirmed Successfully ✅");
        localStorage.removeItem("cart");
      }

    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Order Failed ❌");
    }
  };

  return (
    <div className="order-page">
      <h2>Confirm Your Order</h2>
      <p>Click below to place your order</p>

      <button className="orderconfirm" onClick={confirmOrder}>
        Confirm Order
      </button>
    </div>
  );
}

export default Order;

