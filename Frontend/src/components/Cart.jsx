// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// function Cart() {
//   const [items, setItems] = useState([]);

//   // LOAD CART
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("cart")) || [];

//     // Add quantity field
//     const withQty = saved.map(item => ({ ...item, qty: 1 }));
//     setItems(withQty);
//   }, []);

//   // SAVE TO LOCAL STORAGE
//   function updateStorage(updated) {
//     localStorage.setItem("cart", JSON.stringify(updated));
//   }

//   // INCREASE QTY
//   function increaseQty(id) {
//     const updated = items.map(item =>
//       item.id === id ? { ...item, qty: item.qty + 1 } : item
//     );
//     setItems(updated);
//     updateStorage(updated);
//   }

//   // DECREASE QTY
//   function decreaseQty(id) {
//     const updated = items.map(item =>
//       item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
//     );
//     setItems(updated);
//     updateStorage(updated);
//   }

//   // REMOVE ITEM
//   function removeItem(id) {
//     const updated = items.filter(item => item.id !== id);
//     setItems(updated);
//     updateStorage(updated);
//   }

//   // TOTAL PRICE
//   const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>

//       {items.length === 0 ? (
//         <h3>Cart is Empty</h3>
//       ) : (
//         <div>
//           {items.map(item => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.img} alt={item.name} className="cart-img" />

//               <div className="cart-details">
//                 <h3>{item.name}</h3>
//                 <p>Price: ₹{item.price}</p>

//                 <div className="qty-box">
//                   <button onClick={() => decreaseQty(item.id)} className="qty-btn">−</button>
//                   <span className="qty">{item.qty}</span>
//                   <button onClick={() => increaseQty(item.id)} className="qty-btn">+</button>
//                 </div>

//                 <p>Total: ₹{item.price * item.qty}</p>
//               </div>

//               <button className="remove-btn" onClick={() => removeItem(item.id)}>
//                 Remove
//               </button>
//             </div>
//           ))}

//           <h2 className="total-price">Grand Total: ₹{totalPrice}</h2>
         
//         </div>
//       )}
//      <Link to="/order">
//          <button className="orderconfirm">Click to confirm your order </button>
//       </Link>
//     </div>
//   );
// }

// export default Cart;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];

    const withQty = saved.map(item => ({
      ...item,
      qty: item.qty || 1
    }));

    setItems(withQty);
  }, []);

  function updateStorage(updated) {
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function increaseQty(id) {
    const updated = items.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updated);
    updateStorage(updated);
  }

  function decreaseQty(id) {
    const updated = items.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setItems(updated);
    updateStorage(updated);
  }

  function removeItem(id) {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    updateStorage(updated);
  }

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="cart-img" />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Total: ₹{item.price * item.qty}</p>
              </div>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Grand Total: ₹{totalPrice}</h2>

          <Link to="/order">
            <button className="orderconfirm">
              Proceed to Confirm Order
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
