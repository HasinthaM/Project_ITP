import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/P_customize.css';

const P_customize = () => {
    const navigate = useNavigate();

    const [province, setProvince] = useState('');
    const [duration, setDuration] = useState('');
    const [noOfperson, setNoOfPerson] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [places, setPlaces] = useState('');
    const [meals, setMeals] = useState([]);
    const [activities, setActivities] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [price, setPrice] = useState('');

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

        if (name === 'activities' || name === 'places') {
            newValue = value.replace(/[0-9]/g, '');
        } else if (name === 'noOfperson') {
            newValue = value.replace(/\D/g, '');
            if (parseInt(newValue) > 25) {
                newValue = '25';
            }
        }

        switch (name) {
            case 'province':
                setProvince(newValue);
                break;
            case 'duration':
                setDuration(newValue);
                break;
            case 'noOfperson':
                setNoOfPerson(newValue);
                break;
            case 'vehicle':
                setVehicle(newValue);
                break;
            case 'places':
                setPlaces(newValue);
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

    const handleMealSelection = (event) => {
        const { value } = event.target;
        const index = meals.indexOf(value);
        if (index === -1) {
            setMeals([...meals, value]);
        } else {
            const updatedMeals = [...meals];
            updatedMeals.splice(index, 1);
            setMeals(updatedMeals);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = {
                province,
                duration,
                noOfperson,
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
                setDuration('');
                setNoOfPerson('');
                setVehicle('');
                setPlaces('');
                setMeals([]);
                setActivities('');
                setAccommodation('');
                setPrice('');
                navigate('/udashboard');
                alert("Failed!");
            } else {
                alert("Package customized successfully!");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while customizing the package. Please try again later.");
        }
    };

    return (
        <div className="flexcus-container">
            <div className="customize-container">
                <div className='pc'>
                    <h3>Package Customization</h3>
                </div>
                <form className="form-customize" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="province"></label>
                        <select
                            id="province"
                            value={province}
                            onChange={handleInputChange}
                            placeholder="Province"
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
                        <label htmlFor="duration"></label>
                        <input
                            type="text"
                            id="duration"
                            value={duration}
                            onChange={handleInputChange}
                            placeholder="Duration"
                            name="duration"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="noOfperson"></label>
                        <input
                            type="number"
                            id="noOfperson"
                            value={noOfperson}
                            onChange={handleInputChange}
                            placeholder="No of Persons"
                            name="noOfperson"
                            min="1"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicle"></label>
                        <select
                            id="vehicle"
                            value={vehicle}
                            onChange={handleInputChange}
                            placeholder="Vehicle"
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
                        <label htmlFor="places"></label>
                        <input
                            type="text"
                            id="places"
                            value={places}
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
                                    checked={meals.includes(mealOption)}
                                />
                                <label>{mealOption}</label>
                            </div>
                        ))}
                    </div>
                    <div className="form-group">
                        <label htmlFor="activities"></label>
                        <input
                            type="text"
                            id="activities"
                            value={activities}
                            onChange={handleInputChange}
                            placeholder="Activities"
                            name="activities"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accommodation"></label>
                        <select
                            id="accommodation"
                            value={accommodation}
                            onChange={handleInputChange}
                            placeholder="Accommodation"
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
                        <label htmlFor="price"></label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={handleInputChange}
                            placeholder="Price"
                            name="price"
                        />
                    </div>
                    <button className="c-button" type="submit">
                        <i className="far fa-check-square"></i>
                        &nbsp; Customize Package
                    </button>
                </form>
                <button className='detail-button' onClick={() => navigate('/udashboard')}> User Dashboard </button>
            </div>
        </div>
    );
}

export default P_customize;
