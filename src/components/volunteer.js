import React from 'react';
import './Volunteer.css';

const Volunteer = () => {
  return (
    <div className="volunteer-page">
      <section className="volunteer-header">
        <h1>Join Our Team</h1>
        <p>Help us make a difference by volunteering with Pet Heaven.</p>
      </section>
      <section className="volunteer-form">
        <h2>Volunteer Application</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Jane Doe" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="jane@example.com" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />

          <label htmlFor="availability">Availability:</label>
          <textarea id="availability" name="availability" rows="4" placeholder="E.g., Weekends, Evenings" required></textarea>

          <button type="submit">Apply Now</button>
        </form>
      </section>
    </div>
  );
};

export default Volunteer;
