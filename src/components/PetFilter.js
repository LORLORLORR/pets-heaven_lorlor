import React, { useState } from 'react';
import './PetFilter.css';

const PetFilter = ({ onFilterChange }) => {
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ breed, age });
  };

  return (
    <div className="pet-filter">
      <form onSubmit={handleFilterSubmit}>
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Max Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <button type="submit" className="filter-button">Filter</button>
      </form>
    </div>
  );
};

export default PetFilter;
