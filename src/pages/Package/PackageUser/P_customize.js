import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/P_customize.css';





const P_customize = () => {
    const navigate = useNavigate();

  const [province, setProvince] = useState('');
  const [packageName, setPackageName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [places, setPlaces] = useState('');
  const [meals, setMeals] = useState('');
  const [activities, setActivities] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [price, setPrice] = useState('');

  const [errors, setErrors] = useState({
    province: '',
    packageName: '',
    vehicle: '',
    places: '',
    meals: '',
    activities: '',
    accommodation: '',
    price: '',
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'province':
        setProvince(value);
        break;
      case 'packageName':
        setPackageName(value);
        break;
        case 'vehicle':
        setVehicle(value);
        break;
      case 'places':
        setPlaces(value);
        break;
      case 'meals':
        setMeals(value);
        break;
      case 'activities':
        setActivities(value);
        break;
      case 'accommodation':
        setAccommodation(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Check for empty fields
    if (province.trim() === '') {
      newErrors.province = 'Required';
      valid = false;
    }
    if (packageName.trim() === '') {
      newErrors.packageName = 'Required';
      valid = false;
    }
    if (vehicle.trim() === '') {
      newErrors.vehicle = 'Required';
      valid = false;
    }
    if (places.trim() === '') {
      newErrors.places = 'Required';
      valid = false;
    }
    if (meals.trim() === '') {
      newErrors.meals = 'Required';
      valid = false;
    }
    if (activities.trim() === '') {
      newErrors.activities = 'Required';
      valid = false;
    }
    if (accommodation.trim() === '') {
      newErrors.accommodation = 'Required';
      valid = false;
    }
    if (price.trim() === '') {
      newErrors.price = 'Required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const data = {
        province,
        packageName,
        vehicle,
        places,
        meals,
        activities,
        accommodation,
        price,
      };

      const response = await axios.post('http://localhost:3001/api/user/save', data);

      if (response.data.success) {
        setProvince('');
        setPackageName('');
        setVehicle('');
        setPlaces('');
        setMeals('');
        setActivities('');
        setAccommodation('');
        setPrice('');
        navigate('/udashboard');
        alert("Failed!");
      } else {
        alert("Package created successfully!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the package. Please try again later.");
    }
  };

  return (
    <div className="container">
        <h2>Package Customization</h2>
        <form className="form-container" onSubmit={onSubmit}>
        <div>
          <label htmlFor="province">Province:</label>
          <select
            id="province"
            value={province}
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
          {errors.province && <p className="error-message">{errors.province}</p>}
        </div>

        <div>
          <label htmlFor="packageName">Package Name:</label>
          <input
            type="text"
            id="packageName"
            value={packageName}
            onChange={handleInputChange}
            placeholder="Package Name"
            name="packageName"
          />
          {errors.packageName && <p className="error-message">{errors.packageName}</p>}
        </div>
        <div>
          <label htmlFor="vehicle">vehicle:</label>
          <input
            type="text"
            id="vehicle"
            value={vehicle}
            onChange={handleInputChange}
            placeholder="Vehicle"
            name="vehicle"
          />
          {errors.pID && <p className="error-message">{errors.vehicle}</p>}
        </div>

        <div>
          <label htmlFor="places">Places:</label>
          <input
            type="text"
            id="places"
            value={places}
            onChange={handleInputChange}
            placeholder="Places"
            name="places"
          />
          {errors.places && <p className="error-message">{errors.places}</p>}
        </div>

        <div>
          <label htmlFor="meals">Meals:</label>
          <input
            type="text"
            id="meals"
            value={meals}
            onChange={handleInputChange}
            placeholder="Meals"
            name="meals"
          />
          {errors.meals && <p className="error-message">{errors.meals}</p>}
        </div>

        <div>
          <label htmlFor="activities">Activities:</label>
          <input
            type="text"
            id="activities"
            value={activities}
            onChange={handleInputChange}
            placeholder="Activities"
            name="activities"
          />
          {errors.activities && <p className="error-message">{errors.activities}</p>}
        </div>

        <div>
          <label htmlFor="accommodation">Accommodation:</label>
          <input
            type="text"
            id="accommodation"
            value={accommodation}
            onChange={handleInputChange}
            placeholder="Accommodation"
            name="accommodation"
          />
          {errors.accommodation && <p className="error-message">{errors.accommodation}</p>}
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handleInputChange}
            placeholder="Price"
            name="price"
          />
          {errors.price && <p className="error-message">{errors.price}</p>}
        </div>

        <button className="package-button" type="submit">
          <i className="far fa-check-square"></i>
          &nbsp; Customize Package
        </button>
      </form>
        <button className='detail-button' onClick={() => navigate('/udashboard')}> User Dashboard </button>
    </div>
  )
}































































































export default P_customize;