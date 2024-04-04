import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/P_dashboard.css';

const P_dashboard = () => {
    const [packages, setPackages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

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

    const handleEdit = (packageItem) => {
        navigate(`/edit/${packageItem._id}`);
    };

    const handleDelete = async (packageItem) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/package/delete/${packageItem._id}`);
            if (response.data.message === "Delete Successful") {
                setPackages(packages.filter(item => item._id !== packageItem._id));
                alert("Package deleted successfully");
            } else {
                alert("Failed to delete package");
            }
        } catch (error) {
            console.error("Error deleting package:", error);
        }
    };

    const handleView = (packageItem) => {
        navigate(`/package/${packageItem._id}`); 
    };

    // Filter packages based on search query
    const filteredPackages = packages.filter(packageItem => {
        return (
            packageItem.pID.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.places.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.meals.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.activities.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.accommodation.toLowerCase().includes(searchQuery.toLowerCase()) ||
            packageItem.price.toString().toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div>
           <h2>Tour Packages</h2>
             <div className="search-bar">
             <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
             />
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>PID</th>
                            <th>Province</th>
                            <th>PName</th>
                            <th>Places</th>
                            <th>Meals</th>
                            <th>Activities</th>
                            <th>Accommodation</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPackages.map(packageItem => (
                            <tr key={packageItem._id}>
                                <td>{packageItem.pID}</td>
                                <td>{packageItem.province}</td>
                                <td>{packageItem.packageName}</td>
                                <td>{packageItem.places}</td>
                                <td>{packageItem.meals}</td>
                                <td>{packageItem.activities}</td>
                                <td>{packageItem.accommodation}</td>
                                <td>{packageItem.price}</td>
                                <td className="action-buttons">
                                    <button className="view" onClick={() => handleView(packageItem)}>
                                        <i className="fas fa-eye"></i>&nbsp; Read
                                    </button>
                                    <button className="edit" onClick={() => handleEdit(packageItem)}>
                                        <i className="fas fa-edit"></i>&nbsp; Update
                                    </button>
                                    <button className="delete" onClick={() => handleDelete(packageItem)}>
                                        <i className="fas fa-trash-alt"></i>&nbsp; Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='create-button' onClick={() => navigate('/create')}>Create Package</button>
        </div>
    );
};

export default P_dashboard;