import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import '../../../styles/Package/P_report.css'

const P_report = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const componentPDF = useRef(); // Move useRef inside the component body

    useEffect(() => {
        const retrievePackage = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/package');
                if (res.data.success) {
                    setPackages(res.data.existingPackage);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };

        retrievePackage();
    }, []);

    const generatePDF = useReactToPrint({
        content: ()=> componentPDF.current,
        documentTitle:"Packagedata",
        onAfterPrint:()=>alert("Data saved in PDF")

    });

    // Filter packages based on search query
    const filteredPackages = packages.filter(packageItem => {
        const query = searchQuery.toLowerCase();
        return (
            packageItem.pID.toLowerCase().includes(query) ||
            packageItem.province.toLowerCase().includes(query) ||
            packageItem.packageName.toLowerCase().includes(query) ||
            packageItem.vehicle.toLowerCase().includes(query) ||
            packageItem.noOfPerson.toString().toLowerCase().includes(query) ||
            packageItem.places.toLowerCase().includes(query) ||
            (Array.isArray(packageItem.meals) ? packageItem.meals.join(', ').toLowerCase().includes(query) : packageItem.meals.toLowerCase().includes(query)) ||
            packageItem.activities.toLowerCase().includes(query) ||
            packageItem.accommodation.toLowerCase().includes(query) ||
            packageItem.price.toString().toLowerCase().includes(query)
        );
    });

    return (
        <div className='dash2'>
            <div className='create-p2'>
                <h2>Generate Report</h2>
            </div>
            <div className="search-bar1">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div ref={componentPDF} style={{width:'5%', left:''}}>
                <div className="table-container4">
                    <table>
                        <thead>
                            <tr>
                                <th>PID</th>
                                <th>Province</th>
                                <th>PName</th>
                                <th>Vehicle</th>
                                <th>NPersons</th>
                                <th>Places</th>
                                <th>Meals</th>
                                <th>Activities</th>
                                <th>Accommodation</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPackages.map(packageItem => (
                                <tr key={packageItem._id}>
                                    <td>{packageItem.pID}</td>
                                    <td>{packageItem.province}</td>
                                    <td>{packageItem.packageName}</td>
                                    <td>{packageItem.vehicle}</td>
                                    <td>{packageItem.noOfPerson}</td>
                                    <td>{packageItem.places}</td>
                                    <td>{packageItem.meals}</td>
                                    <td>{packageItem.activities}</td>
                                    <td>{packageItem.accommodation}</td>
                                    <td>{packageItem.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <button className='create-button2' onClick={generatePDF}>PDF</button>
        </div>
    );
};

export default P_report;
