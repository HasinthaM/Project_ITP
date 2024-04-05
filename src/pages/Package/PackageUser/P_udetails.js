import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../../styles/P_udetails.css'

const PackageDetails = () => {
  const [packageData, setPackageData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${id}`);
        if (response.data.success) {
          setPackageData(response.data.package);
        } else {
          console.error('Error fetching package data:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching package:', error);
      }
    };

    fetchPackage();
  }, [id]);

  const {  packageName, vehicle,  places, meals, activities, accommodation, price } = packageData;

  return (
    <div className="package-details">
      <h2>Customize Package Details</h2>
      {Object.keys(packageData).length > 0 ? (
        <table className="package-table">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Vehicle</th>
              <th>Places</th>
              <th>Meals</th>
              <th>Activities</th>
              <th>Accommodation</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{packageName}</td>
              <td>{vehicle}</td>
              <td>{places}</td>
              <td>{meals}</td>
              <td>{activities}</td>
              <td>{accommodation}</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading Customize Package details...</p>
      )}
      <button className='detail-button' onClick={() => navigate('/udashboard')}>
        Customize Packages </button> 
    </div>
  );
};

export default PackageDetails;
