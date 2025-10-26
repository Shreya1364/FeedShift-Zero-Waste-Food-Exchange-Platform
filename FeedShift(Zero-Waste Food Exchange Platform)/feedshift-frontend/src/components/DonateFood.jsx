import React, { useState } from 'react';
import './DonateFood.css';
import { Link } from 'react-router-dom';

function DonateFood() {
  const [formData, setFormData] = useState({
    donor_name: '',
    food_item: '',
    quantity: '',
    location: '',
    expiry_time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/feedshift-backend/donate_food.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => alert('Error: ' + err));
  };

   return (
    <>
     {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="logo-text">🍽️FeedShift</Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/donate-food">
            <button className="nav-button">Donate Food</button>
          </Link>
          <Link to="/donate-money">
            <button className="nav-button">Donate Money</button>
          </Link>
          <Link to="/view-ngos">
            <button className="nav-button">View NGOs</button>
          </Link>
        </div>
      </nav>

    <div className="donate-wrapper">
      <h2 className="donate-main-title">Donate Surplus Food</h2>
      <p className="donate-subtitle">
        Thank you for your generosity. Please fill out the form below to list your food donation.
      </p>

    <div className="donate-container">
      <form className="donate-form" onSubmit={handleSubmit}>
        <input type="text" name="donor_name" placeholder="Your Name" onChange={handleChange} required />
        <input type="text" name="food_item" placeholder="Food Item" onChange={handleChange} required />
        <input type="text" name="quantity" placeholder="Quantity" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="datetime-local" name="expiry_time" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default DonateFood;
