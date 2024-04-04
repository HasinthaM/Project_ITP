import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../styles/P_details.css'

const PackageDetails = () => {
  const [packageData, setPackageData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/package/${id}`);
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

  const { province, packageName, places, meals, activities, accommodation, price } = packageData;

  return (
    <div className="package-details">
      <h2>Package Details</h2>
      {Object.keys(packageData).length > 0 ? (
        <table className="package-table">
          <thead>
            <tr>
              <th>Province</th>
              <th>Package Name</th>
              <th>Places</th>
              <th>Meals</th>
              <th>Activities</th>
              <th>Accommodation</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{province}</td>
              <td>{packageName}</td>
              <td>{places}</td>
              <td>{meals}</td>
              <td>{activities}</td>
              <td>{accommodation}</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading package details...</p>
      )}
      <button className='detail-button' onClick={() => navigate('/pdashboard')}>
        All Packages </button> 
    </div>
  );
};

export default PackageDetails;
