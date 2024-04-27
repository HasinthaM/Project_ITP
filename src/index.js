import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/User/Users";
import R_Booking from "./pages/Rent/R_Booking";
import R_vehicle from "./pages/Rent/R_vehicle";
import R_Bdetails from "./pages/Rent/R_Bdetails";
import R_Bookdet from "./pages/Rent/R_Bookdet";
import R_Details from "./pages/Rent/R_Details";
import R_Bupdate from "./pages/Rent/R_Bupdate";
import Adminhome from "./pages/Rent/Admin/Adminhome";
import Adminbooking from "./pages/Rent/Admin/Adminbooking";
import Addvehicle from "./pages/Rent/Admin/Addvehicle";
import A_checkvehicle from "./pages/Rent/Admin/A_checkvehicle";
  import A_updatevehicle from "./pages/Rent/Admin/A_updatevehicle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/R_Booking" element={<R_Booking />} />
      <Route path="/R_vehicle" element={<R_vehicle />} />
      <Route path="/R_Bdetails" element={<R_Bdetails />} />
      <Route path="/R_Bookdet" element={<R_Bookdet />} />
      <Route path="/R_Details" element={<R_Details />} />
      <Route path="/R_Bupdate/:id" element={<R_Bupdate />} />
      //admin routes
      <Route path="/Adminhome" element={<Adminhome />} />
      <Route path="/Adminbooking" element={<Adminbooking />} />
      <Route path="/Addvehicle" element={<Addvehicle />} />
      <Route path="/A_checkvehicle" element={<A_checkvehicle />} />
      <Route path="/A_updatevehicle/:id" element={<A_updatevehicle />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
