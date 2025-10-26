import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

<>
  <Navbar />
  {/* rest of your Home component */}
</>




function Home() {
  return (
    
    <>
      {/* Hero Section with Image */}
      <div className="home-container">
        
        {/* Top-left logo and name */}
        <div className="top-left-logo">
          <span className="logo-text"> 🍽️ FeedShift</span>
        </div>

        {/* Top-right buttons */}
        <div className="top-right-buttons">
           <Link to="/">
           <button className="home-button">Home</button>
           </Link>
          <Link to="/donate-food">
            <button className="home-button">Donate Food</button>
          </Link>
          <Link to="/donate-money">
            <button className="home-button">Donate Money</button>
          </Link>
          <Link to="/view-ngos">
            <button className="home-button">View NGOs</button>
          </Link>
        </div>


        {/* Center overlay */}
        <div className="overlay">
          <p>Empowering communities through food donations — every bite counts.</p>
        </div>
      </div>

      {/* How It Works Section */}
<div className="how-it-works">
  <h2>How It Works</h2>
  <div className="steps-container">
    <div className="step">
      <h3>1. Donate Food</h3>
      <Link to="/donate-food" style={{ textDecoration: 'none', color: 'inherit' }}></Link>
      <p style={{ cursor: 'pointer' }}>Restaurants, homes, or hostels can fill out a simple form with food details, location, and expiry time.</p>
    </div>
    <div className="step">
      <h3>2. Match with NGOs</h3>
      <p>Nearby NGOs are notified based on location, and they can accept donations immediately.</p>
    </div>
    <div className="step">
      <h3>3. Pickup & Deliver</h3>
      <p>NGOs or volunteers pick up the food and distribute it to shelters, ensuring it reaches those in need.</p>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 FeedShift | Follow us on</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
