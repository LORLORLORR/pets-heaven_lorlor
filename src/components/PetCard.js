import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetCard.css';

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate(`/adopt/${pet.id}`, { state: { petName: pet.name } });
  };

  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <h3>{pet.name}</h3>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age} years</p>
        <p>{pet.description}</p>
        <button className="adopt-button" onClick={handleAdoptClick}>
          Adopt {pet.name}
        </button>
      </div>
    </div>
  );
};

export default PetCard;
