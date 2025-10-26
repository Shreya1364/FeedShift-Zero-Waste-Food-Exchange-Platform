// src/components/DonateMoney.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './DonateMoney.css';
import Navbar from './Navbar';


const DonateMoney = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleDonate = async () => {
    try {
      const response = await axios.post('http://localhost:8000/donate_money.php', {
        amount: amount * 100,
        name,
        email,
      });

      const { order_id, key } = response.data;

      const options = {
        key:"YOUR RAZORPAY KEY ID", // Replace with your Razorpay Key ID
        amount: amount * 100,
        currency: 'INR',
        name: 'Zero-Waste Food Exchange',
        description: 'Donation',
        order_id,
        handler: function (response) {
          alert("✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name,
          email,
        },
        theme: {
          color: '#00796b',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Something went wrong.');
    }
  };

  return (

      <>
      <Navbar />
    <div className="donate-container">
      <div className="donate-box">
        <h2>Donate to Support</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (INR)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleDonate}>Donate Now</button>
        <p className="secure-note">🔒 Secure payment powered by Razorpay</p>
      </div>
    </div>
    </>
  );
};

export default DonateMoney;
