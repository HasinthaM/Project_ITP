import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function P_edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    pID: '',
    province: '',
    packageName: '',
    places: '',
    meals: '',
    activities: '',
    accommodation: '',
    price: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/api/package/${id}`)
      .then(res => {
        const packageData = res.data.package;
        setValues({
          pID: packageData.pID,
          province: packageData.province,
          packageName: packageData.packageName,
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

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/package/update/${id}`, values);
      navigate('/pdashboard');
    } catch (error) {
      console.error('Update failed:', error);
      // Handle error here, e.g., show an error message
    }
  };

  return (
    <div className="container">
      {Object.keys(values).length > 0 ? (
        <form className="form-container" onSubmit={onSubmit}>
          <div>
            <label htmlFor="pID">Package ID:</label>
            <input
              type="text"
              id="pID"
              name="pID"
              value={values.pID}
              onChange={handleInputChange}
            />
          </div>
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
      <button className='detail-button' onClick={() => navigate('/pdashboard')}>
        All Packages
      </button>
    </div>
  );
}
