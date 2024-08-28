import React, { useState } from 'react';
import './Pets.css';
import PetCard from './PetCard';
import PetFilter from './PetFilter';
import Pagination from './Pagination';

const PetsListing = () => {
  // Sample data for pets
  const petsData = [
    { id: 1, name: 'Buddy', image: require('../images/dogs1.jpeg'), breed: 'Golden Retriever', age: 3, description: 'Friendly and playful.' },
    { id: 2, name: 'Bella', image: require('../images/dogs2.jpeg'), breed: 'Beagle', age: 2, description: 'Sweet and affectionate.' },
    { id: 3, name: 'Max', image: require('../images/dogs3.jpeg'), breed: 'Pit Bull', age: 4, description: 'Loyal and energetic.' },
    { id: 4, name: 'Rex', image: require('../images/dogs4.jpeg'), breed: 'Labrador', age: 5, description: 'Gentle and playful.' },
    // Add more pet data
  ];

  const [filteredPets, setFilteredPets] = useState(petsData);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 4;

  // Filter function
  const handleFilterChange = (filter) => {
    const filtered = petsData.filter(pet => 
      (filter.breed ? pet.breed === filter.breed : true) &&
      (filter.age ? pet.age <= filter.age : true)
    );
    setFilteredPets(filtered);
  };

  // Pagination logic
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="pets-listing">
      <h2>Available Pets for Adoption</h2>

      {/* Filter Section */}
      <PetFilter onFilterChange={handleFilterChange} />

      {/* Pets Display Section */}
      <div className="pets-grid">
        {currentPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}

      </div>

      {/* Pagination */}
      <Pagination
        petsPerPage={petsPerPage}
        totalPets={filteredPets.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PetsListing;
