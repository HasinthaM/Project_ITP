import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate(); 

  return (
    <div className="">
      <header className="">
        <h1>Welcome</h1>
       
        <button className="users-button" onClick={() => navigate("/R_Booking")}>
         User
        </button>
        <button className="Admin" onClick={() => navigate("/Adminhome")}>
         Admin
        </button>
      </header>
    </div>
  );
}

export default App;
