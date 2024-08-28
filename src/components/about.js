import React from 'react';
import './About.css'; // Import your CSS file

const About = () => {
    return (
      <div className="about-us">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Dedicated to giving pets a second chance at happiness.</p>
          </div>
        </section>
  
        {/* Our Mission & Story Section */}
        <section className="mission-story">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              At Pet Heaven, we are committed to rescuing abandoned pets and finding them loving, permanent homes.
              Our mission is to ensure every animal in our care receives the love, medical attention, and opportunity
              they deserve to thrive in a new home.
            </p>
          </div>
          <div className="story">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Pet Heaven began with a small team of passionate animal lovers determined to make a
              difference. Over the years, we have grown into a thriving community dedicated to improving the lives of
              abandoned pets. Our journey has been filled with countless success stories, and we continue to strive
              towards creating a better future for every animal in our care.
            </p>
          </div>
        </section>
  
        {/* Meet the Team Section */}
        <section className="meet-team">
          <h2>Meet the Team</h2>
          <div className="team">
            <div className="team-member">
              <div className="profile-picture"></div>
              <h3>Jane Doe</h3>
              <p>Founder & Director</p>
              <p>Jane is the heart behind Pet Heaven, working tirelessly to ensure every pet finds a loving home.</p>
            </div>
            <div className="team-member">
              <div className="profile-picture"></div>
              <h3>John Smith</h3>
              <p>Adoption Coordinator</p>
              <p>John manages the adoption process and helps match pets with their perfect families.</p>
            </div>
          </div>
        </section>
  
        {/* Our Impact Section */}
        <section className="impact">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>200+</h3>
              <p>Pets Adopted</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Volunteers</p>
            </div>
          </div>
        </section>
  
        {/* Get Involved Section */}
        <section className="get-involved">
          <h2>Get Involved</h2>
          <p>
            Support our mission by donating, volunteering, or simply spreading the word. Your help makes a difference!
          </p>
          <div className="buttons">
            <a href="/donate" className="btn">Donate</a>
            <a href="/volunteer" className="btn">Volunteer</a>
          </div>
        </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>123 Telok Ayer Street, Animal City, SG 670589</p>
        <p>Email: info@petheaven.org | Phone: (65) 12345678</p>
      </section>
    </div>
  );
}

export default About;
