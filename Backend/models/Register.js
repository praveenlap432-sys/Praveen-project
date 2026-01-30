const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
        name: {
          type: String,
          required: true
        },
        mobilenumber: {
          type: Number,
          required: true
        },
        email: {
            type:String,
            required:true,
            unique:true
        }
      }
);

module.exports = mongoose.model("Register", registerSchema);

