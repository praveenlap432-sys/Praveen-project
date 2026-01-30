const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod } = req.body;

    // Validation
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    if (!totalAmount) {
      return res.status(400).json({ message: "Total amount missing" });
    }

    const order = new Order({
      items,
      totalAmount,
      paymentMethod: paymentMethod || "COD",
      orderStatus: "Confirmed"
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      orderId: order._id
    });

  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ message: "Order failed" });
  }
};
