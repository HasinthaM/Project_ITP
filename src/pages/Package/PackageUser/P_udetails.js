import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../../styles/P_udetails.css'

const P_udetails = () => {
  const [packageData, setPackageData] = useState(null); // Initialize to null
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${id}`);
        console.log('API Response:', response.data); // Log the response data
        if (response.data.success) {
          setPackageData(response.data);
        } else {
          console.error('Error fetching package data:', response.data.error);
          // Handle error state if needed
        }
      } catch (error) {
        console.error('Error fetching package:', error);
        // Handle error state if needed
      }
    };

    fetchPackage();
  }, [id]);

  return (
    <div className="cpackage-details">
      <div className='cname'>
      <h3>Package Details</h3>
      </div>
      {packageData && packageData.user && (
        <>
          <table className="cpackage-table">
            <thead>
              <tr>
                <th>Province</th>
                <th>Duration</th>
                <th>NPerson</th>
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
                <td>{packageData.user.province}</td>
                <td>{packageData.user.duration}</td>
                <td>{packageData.user.noOfperson}</td>
                <td>{packageData.user.vehicle}</td>
                <td>{packageData.user.places}</td>
                <td>{packageData.user.meals}</td>
                <td>{packageData.user.activities}</td>
                <td>{packageData.user.accommodation}</td>
                <td>{packageData.user.price}</td>
              </tr>
            </tbody>
          </table>
          <div className="cbutton-container">
            <button className='cd-button' onClick={() => navigate('/udashboard')}>
              Customize Packages
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default P_udetails;
