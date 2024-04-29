import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Package/P_create.css';

const P_create = () => {
  const navigate = useNavigate();

  const [pID, setPID] = useState('');
  const [province, setProvince] = useState('');
  const [packageName, setPackageName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [noOfPerson, setNoOfPerson] = useState('');
  const [places, setPlaces] = useState('');
  const [meals, setMeals] = useState([]);
  const [activities, setActivities] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [price, setPrice] = useState('');

  const [errors, setErrors] = useState({
    pID: '',
    province: '',
    packageName: '',
    vehicle:'',
    noOfPerson:'',
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

  const vehicles = ['Car', 'Van', 'Bike', 'Bicycle', 'Luxury Bus'];
  const accommodations = ['3 Star Hotel', '5 Star Hotel', 'Annexe'];
  const mealOptions = ['Breakfast', 'Lunch', 'Tea', 'Dinner'];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;

    if (name === 'activities' || name === 'places') {
      if (/\d/.test(value)) {
        alert("Please enter only English letters.");
        return;
      }
    } else if (name === 'noOfPerson') {
      newValue = value.replace(/\D/g, '');
      if (parseInt(newValue) > 25) {
        newValue = '25';
      }
    } else if (name === 'pID' || name === 'packageName') {
      if (!alphanumericRegex.test(value)) {
        alert("Please enter numeric and letters.");
        return;
      }
    }

    switch (name) {
      case 'pID':
        setPID(newValue);
        break;
      case 'province':
        setProvince(newValue);
        break;
      case 'packageName':
        setPackageName(newValue);
        break;
      case 'vehicle':
        setVehicle(newValue);
        break;
      case 'noOfPerson':
        setNoOfPerson(newValue);
        break;
      case 'places':
        setPlaces(newValue);
        break;
      case 'meals':
        setMeals([...meals, newValue]);
        break;
      case 'activities':
        setActivities(newValue);
        break;
      case 'accommodation':
        setAccommodation(newValue);
        break;
      case 'price':
        setPrice(newValue);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;

    if (pID.trim() === '') {
      newErrors.pID = 'Required';
      valid = false;
    } else if (!alphanumericRegex.test(pID)) {
      newErrors.pID = 'Please enter only English letters.';
      valid = false;
    }

    if (packageName.trim() === '') {
      newErrors.packageName = 'Required';
      valid = false;
    } else if (!alphanumericRegex.test(packageName)) {
      newErrors.packageName = 'Please enter numeric and letters.';
      valid = false;
    }

    if (province.trim() === '') {
      newErrors.province = 'Required';
      valid = false;
    }
    if (places.trim() === '') {
      newErrors.places = 'Required';
      valid = false;
    }
    if (meals.length === 0) {
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

    if (parseInt(noOfPerson) > 25) {
      newErrors.noOfPerson = 'Maximum 25 persons allowed';
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
        pID,
        province,
        packageName,
        vehicle,
        noOfPerson,
        places,
        meals,
        activities,
        accommodation,
        price,
      };

      const response = await axios.post('http://localhost:3001/api/package/save', data);

      if (response.data.success) {
        setPID('');
        setProvince('');
        setPackageName('');
        setVehicle('');
        setNoOfPerson('');
        setPlaces('');
        setMeals([]);
        setActivities('');
        setAccommodation('');
        setPrice('');
        navigate('/pdashboard');
        alert("Package created successfully!");
        navigate('/pdashboard');
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
      <h2>Package Creation</h2>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="flex-container">
          <div>
            <label htmlFor="pID"></label>
            <input
              type="text"
              id="pID"
              value={pID}
              onChange={handleInputChange}
              placeholder="Package ID"
              name="pID"
            />
            {errors.pID && <p className="error-message">{errors.pID}</p>}
          </div>

          <div>
            <label htmlFor="province"></label>
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
            <label htmlFor="packageName"></label>
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
            <label htmlFor="vehicle"></label>
            <select
              id="vehicle"
              value={vehicle}
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
            <label htmlFor="noOfPerson"></label>
            <input
              type="number"
              id="noOfPerson"
              value={noOfPerson}
              onChange={handleInputChange}
              placeholder="Number of Persons"
              name="noOfPerson"
              min="1"
            />
            {errors.noOfPerson && <p className="error-message">{errors.noOfPerson}</p>}
          </div>

          <div>
            <label htmlFor="places"></label>
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
            <label>Meals:</label>
            {mealOptions.map((mealOption, index) => (
              <div key={index} className="meal-option">
                <input
                  type="checkbox"
                  value={mealOption}
                  onChange={handleInputChange}
                  checked={meals.includes(mealOption)}
                  name="meals"
                />
                <label>{mealOption}</label>
              </div>
            ))}
            {errors.meals && <p className="error-message">{errors.meals}</p>}
          </div>

          <div>
            <label htmlFor="activities"></label>
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
            <label htmlFor="accommodation"></label>
            <select
              id="accommodation"
              value={accommodation}
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
            {errors.accommodation && <p className="error-message">{errors.accommodation}</p>}
          </div>

          <div>
            <label htmlFor="price"></label>
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
        </div>

        <button className="package-button" type="submit">
          Create Package
        </button>
      </form>
      <button className='detail-button' onClick={() => navigate('/pdashboard')}>
        All Packages
      </button>
    </div>
  );
};

export default P_create;
