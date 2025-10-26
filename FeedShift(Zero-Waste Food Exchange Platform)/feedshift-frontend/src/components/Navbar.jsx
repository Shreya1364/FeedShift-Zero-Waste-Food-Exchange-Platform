import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand-name">🍽️FeedShift</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/donate-food">Donate Food</Link>
        <Link to="/donate-money">Donate Money</Link>
        <Link to="/view-ngos">View NGOs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
