import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6
import axios from 'axios';
import '../../../styles/Package/P_uinterface.css';

const P_uinterface = () => {
    const navigate = useNavigate();
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const retrievePackages = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/package');
                if (res.data.success) {
                    setPackages(res.data.existingPackage);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };

        retrievePackages();
    }, []);

    return (
        <div>
            <h6 className='topic6'>Tour Packages</h6>
            <div className="flex-container6">
                {packages.map(packageItem => (
                    <div key={packageItem._id} className="flex-item6">
                        <h2 className='u-title'>{packageItem.packageName}</h2>
                        <div>Province: {packageItem.province}</div>
                        <div>Vehicle: {packageItem.vehicle}</div>
                        <div>No Person: {packageItem.noOfPerson}</div>
                        <div>Places: {packageItem.places}</div>
                        <div>Meals: {packageItem.meals}</div>
                        <div>Activities: {packageItem.activities}</div>
                        <div>Accommodation: {packageItem.accommodation}</div>
                        <div>Price: {packageItem.price}</div>    
                    </div>
                ))}
            </div>
            <div className="button-customize6">
                <button className='p-customize6' onClick={() => navigate('/ucus')} style={{ backgroundColor: '#000000', fontSize: '18px', color:'white' }}> Customize Packages</button>
            </div>
        </div>
    );
};

export default P_uinterface;
