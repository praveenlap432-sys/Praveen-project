import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Registrationpage() {
  const [formData, setFormData] = useState({
    name: "",
    mobilenumber: "",
    email: ""
  });

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // submit form using axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/register/regpost",
        formData
      );

      alert(res.data.message);

      // clear form after success
      setFormData({
        name: "",
        mobilenumber: "",
        email: ""
      });
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
    useNavigate('/');

  };

  return (
    <div className="register-container">
      <h2>Registration Page</h2>

      <form className="register-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="mobilenumber"
          placeholder="Mobile Number"
          className="input"
          value={formData.mobilenumber}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          className="input"
          value={formData.email}
          onChange={handleChange}
        />
<a href="/">
<button type="submit" className="register-btn">
          Register
        </button>
</a>
        

        <p className="forgot">Forgot Password?</p>
        <p className="have-account">Already have an account?</p>
      </form>
    </div>
  );
}

export default Registrationpage;
