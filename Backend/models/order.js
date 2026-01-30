// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: String,
//   items: [{ productId: String, name: String, quantity: Number, price: Number }],
//   totalAmount: Number,
//   address: String,
//   paymentMethod: String,
//   status: { type: String, default: "Confirmed" },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Order", orderSchema);


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        qty: {
          type: Number,
          required: true
        },
        image: String
      }
    ],

    totalAmount: {
      type: Number,
      required: true
    },

    paymentMethod: {
      type: String,
      default: "COD"
    },

    orderStatus: {
      type: String,
      default: "Confirmed"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);

