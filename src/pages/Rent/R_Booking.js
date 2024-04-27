import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/R_Booking.css";

const CarRentalForm = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [withDriver, setWithDriver] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [passportOrId, setPassportOrId] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !vehicleType ||
      !vehicle ||
      !startDate ||
      !endDate ||
      !pickupLocation ||
      !customerName ||
      !passportOrId ||
      !address ||
      !phoneNumber
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (isNaN(phoneNumber)) {
      alert("Phone Number should be a number");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/post/save", {
        vehicleType,
        vehicle,
        driver: withDriver,
        rentalDate: { startDate, endDate },
        location: pickupLocation,
        customerName,
        passportOrId,
        address,
        phone: phoneNumber,
      });

      if (response.data.success) {
        console.log("Data saved successfully");

        navigate("/R_Bdetails");
      } else {
        console.error("Failed to save data:", response.data.error);
      }
    } catch (error) {
      console.error("Failed to save data:", error.message);
    }
  };

  return (
    <div className="R_Booking" style={{ textAlign: "center" }}>
      <h2>Rent a Vehicle Here!</h2>
      <form onSubmit={handleFormSubmit}>
        {" "}
        <label>
          Vehicle Type:
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Sedan</option>
            <option value="van">SUV</option>
            <option value="cab">SUV</option>
            <option value="tuktuk">SUV</option>
            <option value="Bike">SUV</option>
          </select>
        </label>
        <br />
        <label>
          Vehicle:
          <input
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </label>
        <button className="R_vehicle" onClick={() => navigate("/R_vehicle")}>
          Vehicle details
        </button>
        <br />
        <label>
          With Driver:
          <input
            type="checkbox"
            checked={withDriver}
            onChange={() => setWithDriver(!withDriver)}
          />
        </label>
        <br />
        <label>
          Duration:
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </label>
        <br />
        <label>
          Pickup Location:
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <option value="">Select Pickup Location</option>
            <option value="airport">Airport</option>
            <option value="colombo">Colombo</option>
            <option value="galle">Galle</option>
            <option value="Kandy">Kandy</option>
            <option value="Ella">Ella</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Nuwaraeliya">Nuwaraeliya</option>
          </select>
        </label>
        <br />
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Passport or ID Number:
          <input
            type="text"
            value={passportOrId}
            onChange={(e) => setPassportOrId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default CarRentalForm;
