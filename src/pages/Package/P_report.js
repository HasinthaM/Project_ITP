import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import '../../styles/Package/P_report.css';
import Psidebar from '../../components/Package/PSidebar';

const P_report = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery] = useState('');

    const componentPDF = useRef();

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
        content: () => componentPDF.current,
        documentTitle: "Packagedata",
        onAfterPrint: () => alert("Data saved in PDF"),
        pageStyle: `
            @page {
                size: A3;
                margin: 0;
            }
        `
    });

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
            <Psidebar />
            <div className='create-p2'>
                <div ref={componentPDF}>
                    <h2 className='r-title'> Packages Report</h2>
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
        </div>
    );
};

export default P_report;
