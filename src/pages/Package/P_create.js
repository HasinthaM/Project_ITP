import React, { useState } from 'react';
import '../../styles/Package/P_create.css';

const CreatePackage = () => {
  const [province, setProvince] = useState('');
  const [packageName, setPackageName] = useState('');
  const [packageID, setPackageID] = useState('');
  const [places, setPlaces] = useState('');
  const [meals, setMeals] = useState([]);
  const [activities, setActivities] = useState('');
  const [accommodations, setAccomodations] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({
    province: '',
    packageName: '',
    packageID: '',
    places: '',
    meals: '',
    activities: '',
    accommodations: '',
    price: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check each field for empty value
    if (!province) newErrors.province = 'Required';
    if (!packageName) newErrors.packageName = 'Required';
    if (!packageID) newErrors.packageID = 'Required';
    if (!places) newErrors.places = 'Required';
    if (meals.length === 0) newErrors.meals = 'Required';
    if (!activities) newErrors.activities = 'Required';
    if (!accommodations) newErrors.accommodations = 'Required';
    if (!price) newErrors.price = 'Required';

    // Set errors object with newErrors
    setErrors(newErrors);

    // If there are no errors, proceed with package creation
    if (Object.keys(newErrors).length === 0) {
      // Handle the submission of the travel plan
    }
  };

  const handleMealChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMeals([...meals, value]);
    } else {
      setMeals(meals.filter((meal) => meal !== value));
    }
  };

  return (
    <div className="create-package-container">
      <form className="create-package-form" onSubmit={handleSubmit}>
        <h2>Create Package</h2>
        <div className="form-group">
          <label htmlFor="packageID">Package ID:</label>
          <input
            type="text"
            id="pID"
            value={packageID}
            onChange={(e) => setPackageID(e.target.value)}
            placeholder="Package ID"
          />
          {errors.packageID && <span className="error-message">{errors.packageID}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="province">Province:</label>
          <select
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value="">Select Province</option>
            <option value="Central">Central</option>
            <option value="Eastern">Eastern</option>
            <option value="North Central">North Central</option>
            <option value="Northern">Northern</option>
            <option value="North Western">North Western</option>
            <option value="Sabaragamuwa">Sabaragamuwa</option>
            <option value="Southern">Southern</option>
            <option value="Uva">Uva</option>
            <option value="Western">Western</option>
          </select>
          {errors.province && <span className="error-message">{errors.province}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="packageName">Package Name:</label>
          <input
            type="text"
            id="packageName"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            placeholder="Package Name"
          />
          {errors.packageName && <span className="error-message">{errors.packageName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="places">Places:</label>
          <input
            type="text"
            id="places"
            value={places}
            onChange={(e) => setPlaces(e.target.value)}
            placeholder="Places"
          />
          {errors.places && <span className="error-message">{errors.places}</span>}
        </div>

        <div className="form-group">
          <label>Meals:</label>
          <div className="meal-options">
            <div className="meal-option">
              <input
                type="checkbox"
                id="meals"
                value="Breakfast"
                checked={meals.includes('Breakfast')}
                onChange={handleMealChange}
              />
              <label htmlFor="breakfastCheckbox">Breakfast</label>
            </div>
            <div className="meal-option">
              <input
                type="checkbox"
                id="meals"
                value="Lunch"
                checked={meals.includes('Lunch')}
                onChange={handleMealChange}
              />
              <label htmlFor="lunchCheckbox">Lunch</label>
            </div>
            <div className="meal-option">
              <input
                type="checkbox"
                id="meals"
                value="Tea"
                checked={meals.includes('Tea')}
                onChange={handleMealChange}
              />
              <label htmlFor="teaCheckbox">Tea</label>
            </div>
            <div className="meal-option">
              <input
                type="checkbox"
                id="meals"
                value="Dinner"
                checked={meals.includes('Dinner')}
                onChange={handleMealChange}
              />
              <label htmlFor="dinnerCheckbox">Dinner</label>
            </div>
          </div>
          {errors.meals && <span className="error-message">{errors.meals}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="activities">Activities:</label>
          <input
            type="text"
            id="activities"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
            placeholder="Activities"
          />
          {errors.activities && <span className="error-message">{errors.activities}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="accommodation">Accommodation:</label>
          <select
            id="accommodation"
            value={accommodations}
            onChange={(e) => setAccomodations(e.target.value)}
          >
            <option value="">Select Accommodation</option>
            <option value="3 Star Hotels">3 Star Hotels</option>
            <option value="5 Star Hotels">5 Star Hotels</option>
            <option value="Annexes">Annexes</option>
          </select>
          {errors.accommodations && <span className="error-message">{errors.accommodations}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>

        <button type="submit">Create Package</button>
      </form>
    </div>
  );
};

export default CreatePackage;
