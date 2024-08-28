import React from 'react';
import './donation.css';

const Donation = () => {
  return (
    <div className="donation-page">
      <section className="donation-header">
        <h1>Support Us</h1>
        <p>Your donation helps us provide better care for abandoned pets.</p>
      </section>
      <section className="donation-form">
        <h2>Make a Donation</h2>
        <form>
          <label htmlFor="amount">Donation Amount:</label>
          <input type="number" id="amount" name="amount" placeholder="$50" required />

          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />

          <button type="submit">Donate Now</button>
        </form>
      </section>
    </div>
  );
};

export default Donation;
