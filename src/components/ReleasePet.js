import React, { useState } from 'react';
import './ReleasePet.css'; // Import your CSS file

const PetReleaseForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    petBreed: '',
    petAge: '',
    reasonForRelease: '',
    yourName: '',
    yourContact: '',
  });

  const [submitted, setSubmitted] = useState(false); // Add state to track submission
  const [message, setMessage] = useState(''); // Add state for confirmation message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);

    // Update state to show confirmation message
    setSubmitted(true);
    setMessage('Application received. Thank you!');
  };

  return (
    <div className="pet-release-form-container">
      <h1>Pet Release Form</h1>
      {submitted ? (
        <div className="confirmation-message">
          <p>{message}</p>
        </div>
      ) : (
        <form className="pet-release-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="petName">Pet Name</label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petBreed">Pet Breed</label>
            <input
              type="text"
              id="petBreed"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petAge">Pet Age</label>
            <input
              type="text"
              id="petAge"
              name="petAge"
              value={formData.petAge}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reasonForRelease">Reason for Release</label>
            <textarea
              id="reasonForRelease"
              name="reasonForRelease"
              value={formData.reasonForRelease}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="yourName">Your Name</label>
            <input
              type="text"
              id="yourName"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="yourContact">Your Contact Information</label>
            <input
              type="text"
              id="yourContact"
              name="yourContact"
              value={formData.yourContact}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      <footer className="footer">
        {/* Footer content */}
        <p>© 2024 Pet Heaven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PetReleaseForm;
