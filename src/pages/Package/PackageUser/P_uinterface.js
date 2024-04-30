import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/Package/P_uinterface.css' 

const P_uinterface = () => {
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
        <div className="flex-container6">
            {packages.map(packageItem => (
                <div key={packageItem._id} className="flex-box6">
                    <div>PID: {packageItem.pID}</div>
                    <div>Province: {packageItem.province}</div>
                    <div>Package Name: {packageItem.packageName}</div>
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
    );
};

export default P_uinterface;
