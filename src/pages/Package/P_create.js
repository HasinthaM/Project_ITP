import React, { useState } from 'react';
import "../../styles/Package/P_create.css"

const JourneyX = () => {
  const [province, setProvince] = useState('');
  const [packageName, setPackageName] = useState('');
  const [places, setPlaces] = useState('');
  // ... other states for meals, activities, accommodation, price

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the travel plan
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        placeholder="Province"
      />
      <input
        type="text"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        placeholder="Package Name"
      />
      <input
        type="text"
        value={places}
        onChange={(e) => setPlaces(e.target.value)}
        placeholder="Places"
      />
      {/* Inputs for meals, activities, accommodation, price */}
      <button type="submit">Create Travel Plan</button>
    </form>
  );
};

export default JourneyX;
