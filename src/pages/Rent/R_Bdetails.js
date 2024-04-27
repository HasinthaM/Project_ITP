import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/R_Bdetails.css";
import { useReactToPrint } from "react-to-print";
const RentalDetails = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const componentPDF = useRef();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(`http://localhost:3001/posts`).then((res) => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/post/delete/${id}`).then((res) => {
      if (res.data.message === "Delete successful") {
        alert("Deleted successfully");
        fetchPosts();
      } else {
        console.error("Delete unsuccessful");
      }
    });
  };
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  return (
    <div ref={componentPDF} style={{ width: "100%" }}>
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
            <th>Actions</th>
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
              <td>
                <button
                  className="R_Bupdate"
                  onClick={() => navigate(`/R_Bupdate/${post._id}`)}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(post._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button" onClick={generatePDF}>Get pdf</button>
    </div>
  );
};

export default RentalDetails;
