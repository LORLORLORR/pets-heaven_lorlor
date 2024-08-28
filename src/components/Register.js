// src/pages/MembershipRegistration.js
import React, { useState } from 'react';
import './Register.css'; // Import CSS for styling

const MembershipRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Registration form submitted:', formData);
    
    // Here you would typically send data to your backend API or email service.
    // For example: fetch('/api/submit-registration', { method: 'POST', body: JSON.stringify(formData) });

    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="membership-registration">
      <h1>Join Pet Heaven</h1>
      
      {/* Benefits List */}
      <div className="benefits-list">
        <h2>Membership Benefits</h2>
        <ul>
          <li>Receive exclusive updates and newsletters</li>
          <li>Get early access to adoption events</li>
          <li>Enjoy discounts on pet supplies and services</li>
          <li>Support the welfare of abandoned pets</li>
        </ul>
      </div>

      {/* Registration Form */}
      {!submitted ? (
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your registration has been received. We will get back to you soon.</p>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Pet Heaven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MembershipRegistration;
