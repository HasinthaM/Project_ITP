import React, { useState, useEffect } from "react";
import axios from "axios";



const RentalDetails = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts`);
        if (response.data.success) {
          setPosts(response.data.existingPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <tr>
            <th>Vehicle Type</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Rental Duration</th>
            <th>Location</th>
            <th>Customer Name</th>
            <th>Passport/ID</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.vehicleType}</td>
              <td>{post.vehicle}</td>
              <td>{post.driver ? "Yes" : "No"}</td>
              <td>{`${new Date(
                post.rentalDate.startDate
              ).toLocaleDateString()} to ${new Date(
                post.rentalDate.endDate
              ).toLocaleDateString()}`}</td>
              <td>{post.location}</td>
              <td>{post.customerName}</td>
              <td>{post.passportOrId}</td>
              <td>{post.address}</td>
              <td>{post.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentalDetails;
