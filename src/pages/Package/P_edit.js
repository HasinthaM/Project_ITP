import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Package/P_edit.css';

export default function P_edit() {
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
    axios.get(`http://localhost:3001/api/package/${id}`)
      .then(res => {
        const packageData = res.data.package;
        setValues({
          pID: packageData.pID,
          province: packageData.province,
          packageName: packageData.packageName,
          vehicle: packageData.vehicle,
          noOfPerson: packageData.noOfPerson, // Corrected from noOfperson to noOfPerson
          places: packageData.places,
          meals: packageData.meals,
          activities: packageData.activities,
          accommodation: packageData.accommodation,
          price: packageData.price,
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
      await axios.put(`http://localhost:3001/api/package/update/${id}`, values);
      alert('Package updated successfully!');
      navigate('/pdashboard');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update package. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2>Update Package Details</h2>
      {values ? (
        <form className="form-container" onSubmit={onSubmit}>
          <div className="flex-container">
            <div>
              <label htmlFor="pID">Package ID</label>
              <input
                type="text"
                id="pID"
                value={values.pID}
                onChange={handleInputChange}
                name="pID"
                readOnly
              />
            </div>

            <div>
              <label htmlFor="province">Province</label>
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

            <div>
              <label htmlFor="packageName">Package Name</label>
              <input
                type="text"
                id="packageName"
                value={values.packageName}
                onChange={handleInputChange}
                name="packageName"
              />
            </div>

            <div>
              <label htmlFor="vehicle">Vehicle</label>
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

            <div className="person-input-container">
              <label htmlFor="noOfPerson">Number of Persons</label>
              <input
                type="number"
                id="noOfPerson"
                value={values.noOfPerson}
                onChange={handleInputChange}
                name="noOfPerson"
                min="1"
              />
            </div>

            <div>
              <label htmlFor="places">Places</label>
              <input
                type="text"
                id="places"
                value={values.places}
                onChange={handleInputChange}
                name="places"
              />
            </div>

            <div>
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

            <div>
              <label htmlFor="activities">Activities</label>
              <input
                type="text"
                id="activities"
                value={values.activities}
                onChange={handleInputChange}
                name="activities"
              />
            </div>

            <div>
              <label htmlFor="accommodation">Accommodation</label>
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

            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                value={values.price}
                onChange={handleInputChange}
                name="price"
              />
            </div>
          </div>
          <button className="package-button" type="submit">
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      ) : (
        <p>Loading package data...</p>
      )}
      <button className='detail-button' onClick={() => navigate('/pdashboard')}>
        All Packages
      </button>
    </div>
  );
}
