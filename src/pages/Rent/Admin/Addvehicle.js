import React, { useState } from "react";
import axios from "axios";

const AddVehicleForm = () => {
  const [vehicle, setVehicle] = useState({
    vehicleType: "",
    vehicleno: "",
    Owner: "",
    Ownerid: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({
      ...vehicle,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/vehicle/save", vehicle).then((res) => {
      if (res.data.success) {
        alert("Vehicle added successfully");
        // Clear the form after successful submission
        setVehicle({
          vehicleType: "",
          vehicleno: "",
          Owner: "",
          Ownerid: "",
          address: "",
          phone: "",
        });
      } else {
        console.error("Add vehicle unsuccessful");
      }
    });
  };

  return (
    <div>
      <h2>Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle Type:
          <input
            type="text"
            name="vehicleType"
            value={vehicle.vehicleType}
            onChange={handleChange}
          />
        </label>
        <label>
          Vehicle Number:
          <input
            type="text"
            name="vehicleno"
            value={vehicle.vehicleno}
            onChange={handleChange}
          />
        </label>
        <label>
          Owner Name:
          <input
            type="text"
            name="Owner"
            value={vehicle.Owner}
            onChange={handleChange}
          />
        </label>
        <label>
          Owner ID:
          <input
            type="text"
            name="Ownerid"
            value={vehicle.Ownerid}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={vehicle.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={vehicle.phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicleForm;
