import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/User/Users";
import Option from "./pages/Feedback/Option";
import Feedback1 from "./pages/Feedback/Feedback1";
import ServiceFeedback from "./pages/Feedback/ServiceFeedback";
import AddFeedback from "./pages/Feedback/AddFeedback"
import Admin from "./pages/Feedback/admin"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<User />} />
      <Route path="/feedback" element={<Feedback1 />} />
      <Route path="/feedback1" element={<Feedback1/>} />
      <Route path="/servicefeedback" element={<ServiceFeedback/>} />
      <Route path="/addfeedback" element={<AddFeedback/>}/>

      <Route path="/Admin" element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
