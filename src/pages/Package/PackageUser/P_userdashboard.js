import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/P_userdashboard.css';

const P_userdashboard = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const retrieveCustomizePackage = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/user');
                if (res.data.success) {
                    setUsers(res.data.existingUser);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        retrieveCustomizePackage();
    }, []);

    const handleEdit = (packageUItem) => {
        navigate(`/editu/${packageUItem._id}`);
    };

    const handleDelete = async (packageUItem) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/user/delete/${packageUItem._id}`);
            if (response.data && response.data.message === "Delete Successful") {
                setUsers(users.filter(item => item._id !== packageUItem._id));
                alert("Failed!");
            } else {
                alert("Customize Package deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting customize package:", error);
            alert("Failed to delete customize package. Please check the console for more details.");
        }
    };

    const handleView = (packageUItem) => {
        navigate(`/udetails/${packageUItem._id}`); 
    };
    const handleSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchQuery(value);
    };
    
    const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) => {
        if (typeof value === "number") {
            return String(value).toLowerCase().includes(searchQuery.toLowerCase());
        } else if (typeof value === "string") {
            return value.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    })
);

    

    return (
        <div>
            <div className='search-bar2'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className='cus-topic'>
                <h2>Customize Packages</h2>
            </div>
            <div className="table-container2">
                <table>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((packageUItem) => (
                            <tr key={packageUItem._id}>
                                <td>{packageUItem.province}</td>
                                <td>{packageUItem.duration}</td>
                                <td>{packageUItem.noOfperson}</td>
                                <td>{packageUItem.vehicle}</td>
                                <td>{packageUItem.places}</td>
                                <td>{packageUItem.meals}</td>
                                <td>{packageUItem.activities}</td>
                                <td>{packageUItem.accommodation}</td>
                                <td>{packageUItem.price}</td>
                                <td className="action-buttons">
                                    <button className="view" onClick={() => handleView(packageUItem)}>
                                        <i className="fas fa-eye"></i>&nbsp; Read
                                    </button>
                                    <button className="edit" onClick={() => handleEdit(packageUItem)}>
                                        <i className="fas fa-edit"></i>&nbsp; Update
                                    </button>
                                    <button className="delete" onClick={() => handleDelete(packageUItem)}>
                                        <i className="fas fa-trash-alt"></i>&nbsp; Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='create-button3' onClick={() => navigate('/ucus')}>Customize Package</button>
        </div>
    );
}

export default P_userdashboard;
