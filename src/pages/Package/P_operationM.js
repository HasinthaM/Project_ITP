import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Package/P_operationM.css';

const P_operationM = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const retrievePackage = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/package');
                if (res.data.success) {
                    const packagesWithStatus = res.data.existingPackage.map(packageItem => ({
                        ...packageItem,
                        status: "Pending"
                    }));
                    setPackages(packagesWithStatus);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };

        retrievePackage();
    }, []);

    const handleEdit = (packageItem) => {
        navigate(`/edit/${packageItem._id}`);
    };

    const handleAccept = async (packageItem) => {
        try {
            await axios.put(`http://localhost:3001/api/package/${packageItem._id}`, { status: "Approved" });

            const updatedPackages = packages.map((p) =>
                p._id === packageItem._id ? { ...p, status: "Approved" } : p
            );
            setPackages(updatedPackages);

            alert("Package accepted successfully");
        } catch (error) {
            console.error("Error accepting package:", error);
            alert("Failed to accept package");
        }
    };

    const handleReject = async (packageItem) => {
        try {
            await axios.put(`http://localhost:3001/api/package/${packageItem._id}`, { status: "Rejected" });

            const updatedPackages = packages.map((p) =>
                p._id === packageItem._id ? { ...p, status: "Rejected" } : p
            );
            setPackages(updatedPackages);

            alert("Package rejected successfully");
        } catch (error) {
            console.error("Error rejecting package:", error);
            alert("Failed to reject package");
        }
    };

  

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
        <div className='dash'>
            <div className='create-p'>
                <h2>Tour Packages</h2>
            </div>
            <div className="search-bar1">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="table-container" id="report-content">
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
                            <th>Status</th>
                            <th>Action</th>
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
                                <td>{Array.isArray(packageItem.meals) ? packageItem.meals.join(', ') : packageItem.meals}</td>
                                <td>{packageItem.activities}</td>
                                <td>{packageItem.accommodation}</td>
                                <td>{packageItem.price}</td>
                                <td>{packageItem.status}</td>
                                <td className="action-buttons">
                                    <button className="edit" onClick={() => handleEdit(packageItem)}>
                                        <i className="fas fa-edit"></i>&nbsp; Update
                                    </button>
                                    <button className="accept" onClick={() => handleAccept(packageItem)}>
                                        <i className="fas fa-check"></i>&nbsp; Accept
                                    </button>
                                    <button className="reject" onClick={() => handleReject(packageItem)}>
                                        <i className="fas fa-times"></i>&nbsp; Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='create-button2' onClick={() => navigate('/create')}>Create Package</button>
            <button className='report' onClick={() => navigate('/preport')}>Generate Report</button>
        </div>
    );
};

export default P_operationM;
