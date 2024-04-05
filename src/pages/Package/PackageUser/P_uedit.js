// P_uedit.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function P_uedit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState(null); // Initialize as null initially

  useEffect(() => {
    axios.get(`http://localhost:3001/api/user/${id}`)
      .then(res => {
        const userData = res.data.user;
        setValues({
          province: userData.province,
          packageName: userData.packageName,
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

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/user/update/${id}`, values);
      navigate('/udashboard');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className="container">
      {values ? (
        <form className="form-container" onSubmit={onSubmit}>
          <div>
            <label htmlFor="province">Province:</label>
            <input
              type="text"
              id="province"
              name="province"
              value={values.province}
              disabled // Disabling the field
            />
          </div>
          <div>
            <label htmlFor="packageName">Package Name:</label>
            <input
              type="text"
              id="packageName"
              name="packageName"
              value={values.packageName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="vehicle">Vehicle:</label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={values.vehicle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="places">Places:</label>
            <input
              type="text"
              id="places"
              name="places"
              value={values.places}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="meals">Meals:</label>
            <input
              type="text"
              id="meals"
              name="meals"
              value={values.meals}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="activities">Activities:</label>
            <input
              type="text"
              id="activities"
              name="activities"
              value={values.activities}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="accommodation">Accommodation:</label>
            <input
              type="text"
              id="accommodation"
              name="accommodation"
              value={values.accommodation}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={values.price}
              onChange={handleInputChange}
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
        Customize Packages
      </button>
    </div>
  );
}
