import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function P_uedit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState(null);

  const provinces = [
    'Western Province',
    'Central Province',
    'Southern Province',
    'Northern Province',
    'Eastern Province',
    'North Western Province',
    'North Central Province',
    'Uva Province',
    'Sabaragamuwa Province',
  ];

  const vehicles = ['Car', 'Van', 'Bike', 'Bicycle', 'Luxury Bus'];
  const accommodations = ['3 Star Hotel', '5 Star Hotel', 'Annexe'];
  const mealOptions = ['Breakfast', 'Lunch', 'Tea', 'Dinner'];

  useEffect(() => {
    axios.get(`http://localhost:3001/api/user/${id}`)
      .then(res => {
        const userData = res.data.user;
        setValues({
          province: userData.province,
          duration: userData.duration,
          noOfperson: userData.noOfperson,
          vehicle: userData.vehicle,
          places: userData.places,
          meals: userData.meals,
          activities: userData.activities,
          accommodation: userData.accommodation,
          price: userData.price,
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleMealSelection = (event) => {
    const { value } = event.target;
    const index = values.meals.indexOf(value);
    if (index === -1) {
      setValues(prevState => ({
        ...prevState,
        meals: [...prevState.meals, value]
      }));
    } else {
      const updatedMeals = [...values.meals];
      updatedMeals.splice(index, 1);
      setValues(prevState => ({
        ...prevState,
        meals: updatedMeals
      }));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/user/update/${id}`, values);
      alert('Package customization updated successfully!');
      navigate('/udashboard');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update package customization. Please try again later.');
    }
  };

  return (
    <div className="flexcus-container">
      <div className="customize-container">
      <div className='pc'>
        <h3>Update Package Customization</h3>
      </div>
      {values ? (
        <form className="form-customize" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="province">Province:</label>
            <select
              id="province"
              value={values.province}
              onChange={handleInputChange}
              name="province"
            >
              <option value="">Select Province</option>
              {provinces.map((provinceName, index) => (
                <option key={index} value={provinceName}>
                  {provinceName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              value={values.duration}
              onChange={handleInputChange}
              placeholder="Duration"
              name="duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfperson">No of Persons:</label>
            <input
              type="number"
              id="noOfperson"
              value={values.noOfperson}
              onChange={handleInputChange}
              placeholder="No of Persons"
              name="noOfperson"
              min="1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicle">Vehicle:</label>
            <select
              id="vehicle"
              value={values.vehicle}
              onChange={handleInputChange}
              name="vehicle"
            >
              <option value="">Select Vehicle</option>
              {vehicles.map((vehicleOption, index) => (
                <option key={index} value={vehicleOption}>
                  {vehicleOption}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="places">Places:</label>
            <input
              type="text"
              id="places"
              value={values.places}
              onChange={handleInputChange}
              placeholder="Places"
              name="places"
            />
          </div>
          <div className="form-group">
            <label>Meals:</label>
            {mealOptions.map((mealOption, index) => (
              <div key={index} className="meal-option">
                <input
                  type="checkbox"
                  value={mealOption}
                  onChange={handleMealSelection}
                  checked={values.meals.includes(mealOption)}
                />
                <label>{mealOption}</label>
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="activities">Activities:</label>
            <input
              type="text"
              id="activities"
              value={values.activities}
              onChange={handleInputChange}
              placeholder="Activities"
              name="activities"
            />
          </div>
          <div className="form-group">
            <label htmlFor="accommodation">Accommodation:</label>
            <select
              id="accommodation"
              value={values.accommodation}
              onChange={handleInputChange}
              name="accommodation"
            >
              <option value="">Select Accommodation</option>
              {accommodations.map((accommodationOption, index) => (
                <option key={index} value={accommodationOption}>
                  {accommodationOption}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={values.price}
              onChange={handleInputChange}
              placeholder="Price"
              name="price"
              disabled
            />
          </div>
          <button className="package-button" type="submit">
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      ) : (
        <p>Loading package data...</p>
      )}
      <button className='detail-button' onClick={() => navigate('/udashboard')}>
        User Dashboard
      </button>
      </div>
    </div>
  );
}
