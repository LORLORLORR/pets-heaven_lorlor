import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth
import './NavBar.css'; // Import the CSS file
import logo from '../images/logo.png';

const NavBar = () => {
  const { authState, logout } = useAuth(); // Get auth state and logout function from context

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" /> {/* Adjust the src path as needed */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/release">Release Pet</Link></li>
        <li><Link to="/adopt">Adopt Pet</Link></li>
        {/* Conditionally render Profile or Login */}
        {authState.isAuthenticated ? (
          <li>
            <span className="welcome-message">Welcome, {authState.user.role}</span>
            <button className="cta-button" onClick={logout}>Logout</button>
          </li>
        ) : (
          <li><Link className="cta-button" to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
